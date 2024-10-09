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
        console.log(urlText)
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
        <form className="space-y-4" onSubmit={handleForm}>
        <div class="w-full">
        <label for="url" class="block text-sm sm:text-base lg:text-lg font-medium text-gray-700">Enter YouTube Video URL</label>
        <input type="text" id="url" name="url" required placeholder="https://www.youtube.com/watch?v=videoID" class="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm sm:text-base" onChange={handleUrl} />
      </div>
      <div class="flex justify-center">
        <button type="submit"
                class="w-full sm:w-auto bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 text-sm sm:text-base lg:text-lg">
          Generate
        </button>
      </div>
    </form>
    {(clicked)?<span className="text-center p-2 block">Loading...</span>:null}
    </div>;
}

export default Form;