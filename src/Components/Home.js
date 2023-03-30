import React from 'react'
import ima from "../abc.jpg"
import Services from './Services';
import Why from "./Why";
function Home() {
    return (
        <div>
            <div class="sm:grid grid-cols-2 gap-1 block m-2 mt-24">
                <div>
                    <h2 className=" font-bold  text-3xl">
                        Hire Genie & <p></p>
                        Get the Job done
                    </h2>
                    <h1 className="mt-5 font-serif">
                        Welcome to Pro Service Genie, your one-stop solution for all your home cleaning, maintenance, and repair needs.
                        Our company is dedicated to providing high-quality services to homeowners, renters, and property managers across the region.

                    </h1>
                    <ul class="flex  font-bold p-4 mt-4 rounded-lg bg-transparent flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium ">
                        <button type="button" class="text-white m-2  bg-black focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0  ">Get started</button>
                        <h2 className="text-decoration-line: underline  py-5 text-center mr-3 md:mr-0">Contact us </h2>
                    </ul>
                    <div class=" flex" >
                        <ul class="flex text-xl font-bold p-4 mt-4 rounded-lg bg-transparent flex-row md:space-x-8 md:mt-0  ">
                            <li>
                                <p href="#" class="block py-2 pl-3 pr-4 text-black md:p-0 " aria-current="page">700 +</p>
                                <p href="#" class="block py-2 pl-3 pr-4 text-black   md:p-0" aria-current="page">Customers</p>
                            </li>
                            <li>
                                <p href="#" class="block py-2 pl-3 pr-4 text-black md:p-0 " aria-current="page">200 +</p>
                                <p href="#" class="block py-2 pl-3 pr-4 text-black   md:p-0 " aria-current="page">Providers</p>
                            </li>
                            <li>
                                <p href="#" class="block py-2 pl-3 pr-4 text-black  md:p-0" aria-current="page">500 +</p>
                                <p href="#" class="block py-2 pl-3 pr-4 text-black  md:p-0" aria-current="page">Subscribers</p>
                            </li>

                        </ul>
                    </div>

                </div>

                <img class="object-contain  h-48 w-96" src={ima} />
            </div>
            <Why />
            <Services />

        </div>
    )
}

export default Home
