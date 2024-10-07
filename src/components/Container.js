import React,{useState} from "react";
import Form from "./Form";
import Response from "./Response";

const Container = (props) => {
    
    let [resp,setResp] = useState({error:"",introduction:" ",topics:[]});

    const handleResp = (result) => {
        if(typeof result=="string")
            setResp({error:result,introduction:" ",topics:[]})
        else
            setResp({error:"",introduction:result.response.introduction,topics:result.response.topics})
    }

    return <div className="bg-white shadow-md rounded-xl p-5 flex gap-2 flex-col">
        <h1 className="text-center font-bold text-3xl">YouTube Timestamp Generator</h1>
        <span className="text-center text-gray-900 text-sm">Generate timestamps for your YouTube videos automatically</span>
        <Form handleResp={handleResp} />
        {(resp.error)?<span className="text-red-500 bg-red-100 text-center p-2">{resp.error}</span>:(resp.topics.length===0)?null:<Response introduction={resp.introduction} topics={resp.topics}/>}
    </div>;
}

export default Container;