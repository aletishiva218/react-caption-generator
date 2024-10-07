import React from "react";

const Response = (props) => {
    const {introduction,topics} = props;

    console.log(topics)

    return <div className="p-2 border rounded-md flex flex-col gap-2 max-[519px]:gap-5 max-[519px]:py-5">
        <h1 className="font-bold text-xl">Introduction</h1>
        <p className="border-b-2 py-2">{introduction}</p>
        {topics.map((topic,ind)=><div className="flex gap-1" key={ind}><span className="text-blue-600">{topic.timestamp}</span><span className="flex-grow">{topic.topic}</span></div>)}
    </div>;
}

export default Response;