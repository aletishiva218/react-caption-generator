import React,{useState,Fragment} from "react";
import Form from "./Form";
import Response from "./Response";

const Container = (props) => {
    
    let [resp,setResp] = useState({error:"",summary:" ",topics:[]});

    const handleResp = (result) => {
        if(typeof result=="string")
            setResp({error:result,summary:" ",topics:[]})
        else
            setResp({error:"",summary:result.response.summary,topics:result.response.topics})
    }

    return <Fragment>
    <div class="max-w-xl w-full bg-white shadow-lg rounded-lg p-8">
    <h1 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-6 text-center">
    YouTube Timestamp and Video Summary Generator
    </h1>
    
    <Form handleResp={handleResp} />
    
    {(resp.error)?<div id="errorMessage" class="mt-6">
      <h2 class="text-lg sm:text-xl lg:text-2xl font-semibold text-red-600">Error:</h2>
      <p id="errorText" class="bg-red-50 p-4 rounded-lg border border-red-200 mt-2 text-xs sm:text-sm lg:text-base text-red-700">{resp.error}</p>
    </div>:null}
  </div>

{(resp.topics.length===0)?null:<Response summary={resp.summary} topics={resp.topics}/>}
  </Fragment>

}

export default Container;