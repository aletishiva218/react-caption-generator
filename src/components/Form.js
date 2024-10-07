import React, { useState } from "react";
import axios from "axios";

const Form = (props) => {
    const {handleResp} = props;
    const [urlText,setUrl] = useState(" ");
    const [clicked,setClicked] = useState(false)

    const handleUrl = (event) => {
        const {value} = event.target;
        setUrl(value)
    }

    const handleForm = (event) => {
        event.preventDefault();
        setClicked(true)
        axios.get(`https://youtube-caption-extractor-api-production.up.railway.app/api/summarizedcaptions?videoUrl=${urlText}`).then(response=>{
            handleResp(response.data)
            setClicked(false)
        }).catch(err=>{
        handleResp(err.response.data.error)
        setClicked(false)
        })
    }

    return <div>
        <form className="flex gap-1 min-[480px]:items-center max-[480px]:flex-col" onSubmit={handleForm}>
        <input type="text" placeholder="Paste Youtube URL here" className="p-2 outline-0 border-2 rounded-md flex-grow focus:border-blue-600 transition-colors duration-200" onChange={handleUrl}/><button type="submit" className="p-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 active:bg-blue-800 transition-colors duration-200 self-center">Generate</button>
    </form>
    {(clicked)?<span className="text-center p-2 block">Loading...</span>:null}
    </div>;
}

export default Form;