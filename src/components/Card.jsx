import { featureJobs } from "../constants";
import React from 'react'

const Card = ({ icon, title, company, content, tools, salary }) => {
    return (
        <div className="p-6 rounded-[20px] max-w-sm  m-auto shadow-xl hover:bg-[#001AFF] hover:text-white">

        <div className="flex justify-start items-start ">

            <img src={icon} alt={title} className="border rounded-lg"/>
            <div className="flex-row ml-4">
                <h3>{title}</h3>
                <h6>{company}</h6>
            </div>
            
        </div>
        <p className="mt-4 text-justify font mb-5">{content}</p>
            <hr className="px-7 mb-2"/>
        <div className="flex flex-wrap justify-between">
            <h5 className="rounded-md  px-2 bg-slate-100 text-black ">{tools}</h5>
            <h5>{salary}</h5>
        </div>
        </div>
    )
}

export default Card