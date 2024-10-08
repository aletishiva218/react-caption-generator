import React from "react";

const Response = (props) => {
    const {summary,topics} = props;

    console.log(topics)

    return <div class="max-w-7xl mx-auto py-4 sm:p-6 lg:p-8">
    
    <div class="bg-white shadow-lg rounded-lg p-6 mb-6">
        <h1 class="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-indigo-600">Summary</h1>
        <p class="text-sm sm:text-base md:text-lg text-gray-700">
          {summary}
        </p>
      </div>

    <div class="bg-white shadow-lg rounded-lg p-6">
      <h2 class="text-lg sm:text-xl md:text-2xl font-bold mb-4 text-indigo-600">Topics with Timestamps</h2>
      
      <ul class="space-y-4">
        {topics.map(topic=>
            <li>
            <span class="font-semibold text-indigo-500 text-sm sm:text-base md:text-lg">{topic.timestamp}</span> - 
            <span class="text-gray-800 text-sm sm:text-base md:text-lg">{topic.topic}</span>
          </li>
        )}
      </ul>
    </div>

  </div>
}

export default Response;