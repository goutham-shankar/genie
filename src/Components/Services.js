import React from 'react'
import ima from "../abc.jpg"
function Services() {
    return (
        <div>
            <h2 className="  font-bold text-center text-3xl">
                Services from Genie <p></p>

            </h2>
            <div className="sm:grid grid-cols-2 gap-1 block m-2 mt-2">

                <div>


                    <div className=" flex mt-5" >
                        <img className="object-contain  h-48 w-96" src={ima} />

                    </div>

                </div>
                <ul className="flex flex-col text-xl  p-4   rounded-lg bg-transparent  md:space-x-8 md:mt-0  ">
                    <li>
                        <h1 className="block py-2 pl-3 font-bold pr-4 text-black md:p-0  " aria-current="page">Genie Home Cleaning</h1>
                        <p className="block py-2 pl-3 pr-4 text-base   md:p-0">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    </li>
                    <ul class="flex  font-bold p-4 rounded-lg bg-transparent flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium ">
                        <button type="button" class="text-white m-2  bg-black focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0  ">Get started</button>
                    </ul>


                </ul>

            </div>


            <div className="sm:grid grid-cols-2 gap-1 block m-2 mt-2">
                <div>
                    <div className=" flex" >
                        <ul className="flex flex-col text-xl  p-4 mt-4 rounded-lg bg-transparent  md:space-x-8 md:mt-0  ">
                            <li>
                                <h1 className="block py-2 pl-3 font-bold pr-4 text-black md:p-0 " aria-current="page">Genie Home Cleaning</h1>
                                <p className="block py-2 pl-3 pr-4 text-base   md:p-0">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                            </li>
                            <ul class="flex  font-bold p-4 rounded-lg bg-transparent flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium ">
                                <button type="button" class="text-white m-2  bg-black focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0  ">Get started</button>
                            </ul>


                        </ul>


                    </div>

                </div>
                <img className="object-contain  h-48 w-96" src={ima} />

            </div>

            <div className="sm:grid grid-cols-2 gap-1 block m-2 mt-2">
                <div>

                    <div className=" flex" >
                        <img className="object-contain  h-48 w-96" src={ima} />

                    </div>

                </div>
                <ul className="flex flex-col text-xl  p-4 mt-4 rounded-lg bg-transparent  md:space-x-8 md:mt-0  ">
                    <li>
                        <h1 className="block py-2 pl-3 font-bold pr-4 text-black md:p-0 " aria-current="page">Genie Home Cleaning</h1>
                        <p className="block py-2 pl-3 pr-4 text-base   md:p-0">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    </li>
                    <ul class="flex  font-bold p-4 rounded-lg bg-transparent flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium ">
                        <button type="button" class="text-white m-2  bg-black focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0  ">Get started</button>
                    </ul>


                </ul>

            </div>

        </div>
    )
}

export default Services
