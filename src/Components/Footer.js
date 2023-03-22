import React from 'react'

function Footer() {
    return (
        <div>
            <footer class=" text-center text-black">
                <div
                    class="  bg-orange-600 p-4 text-center  ">

                    <a
                        class="text-black font-mono text-xl"
                        href="/"
                    >
                        Genie
                    </a>
                </div>


                <div class=" grid  place-items-center">

                    <ul class="flex items-center p-4  rounded-lg bg-transparent md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0  ">
                        <li>
                            <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 " aria-current="page">ABOUT US</a>
                        </li>
                        <li>
                            <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded   md:hover:text-black md:p-0 ">CONTACT </a>
                        </li>
                        <li>
                            <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded   md:hover:text-black md:p-0 ">HELP</a>
                        </li>
                        <li>
                            <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded  ">PRIVACY POLICY</a>
                        </li>
                    </ul>
                </div>
            </footer>
        </div>
    )
}

export default Footer
