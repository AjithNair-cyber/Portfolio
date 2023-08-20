
import React, { useState } from 'react'
import ReactCardFlip from "react-card-flip";

const Projects = () => {
    const [flipMasterCode, setFlipMasterCode] = useState(false);
    const [flipNewsApp, setFlipNewsApp] = useState(false);
    const [flipCakeOMania, setFlipCakeOMania] = useState(false);
    return (
        <div className="pt-36 pb-36" id='projects'>
            <center>
                <h1 className="text-7xl dark:text-white">Projects</h1>
            </center>
            <div className='pt-20 grid grid-flow-row grid-cols-3 gap-24'>
                <ReactCardFlip isFlipped={flipMasterCode}
                    flipDirection="vertical" >

                    <div className='hover:cursor-pointer dark:text-white h-96 flex flex-col' >
                        <img src="./mastercode.png" className='rounded-3xl pb-4' />
                        <center>
                            <div className='text-4xl pt-2 pb-4 dark:text-white'>MasterCode</div>
                            <p className='pb-4'>MasterCode is a online code judging platform where a user can challenge themselves by solving coding questions in their language of choice . It is a built using microservices architecture and cloud native approach</p>
                            <a href="https://github.com/mukul-pathania/MasterCode" className='dark:bg-green-700 p-2  mr-2 dark:text-white rounded-md hover:opacity-75 transition-all ease-in-out bg-green-400 text-md hover:cursor-pointer'>View on Github</a>

                            <button className='dark:bg-slate-700 p-2 dark:text-white rounded-md hover:opacity-75 transition-all ease-in-out bg-slate-200 text-md hover:cursor-pointer' onClick={() => setFlipMasterCode(!flipMasterCode)}>Know More</button>
                        </center>

                    </div>
                    <div className='hover:cursor-pointer rounded-md h-96 dark:bg-slate-700 dark:text-white bg-slate-200' onClick={() => setFlipMasterCode(!flipMasterCode)}>
                        {/* <ul className='dark:text-white text-xl p-4'>

                            <li className='flex flex-row items-center '>
                                <img src='./html.svg' className='mr-auto ' width={110} />
                                <img src='./css.svg' className='ml-auto ' width={110} />
                            </li>

                            <li className='flex flex-row pt-20 items-center'>
                                <img src='./javascript.svg' className='mr-auto ' width={115} />
                                <img src='./react.svg' className='ml-auto bg-red' width={110} />
                            </li>

                        </ul> */}
                        <center>
                            <p className='text-5xl font-semibold pb-5 pt-5'>
                                Tech Stack Used
                            </p>
                            <li className='grid grid-cols-2 p-2 items-center pb-4'>
                                <img src='./html.svg' className="mr-auto" width={110} />
                                <img src='./tailwind.svg' className='ml-auto' width={110} />
                                <img src='./k8.svg' className='mr-auto' width={100} />
                                <img src='./svelte.svg' className='ml-auto ' width={100} />
                            </li>

                        </center>

                    </div>
                </ReactCardFlip>

                <ReactCardFlip isFlipped={flipNewsApp}
                    flipDirection="vertical">
                    <div>
                        <center>
                            <img src="./newsapp.jpg" className='rounded-2xl' width={110} />
                            <div className='text-4xl pt-2 pb-4 dark:text-white'>NewsApp</div>
                            <p className='pb-4 dark:text-white'>An android NewsApp which shows different categories of news. Built using android studio and native approach</p>

                            <a href="https://github.com/AjithNair-cyber/NewsProject" className='dark:bg-green-700 p-2  mr-2 dark:text-white rounded-md hover:opacity-75 transition-all ease-in-out bg-green-400 text-md hover:cursor-pointer'>View on Github</a>
                            <button className='dark:bg-slate-700 p-2 dark:text-white rounded-md hover:opacity-75 transition-all ease-in-out bg-slate-200 text-md hover:cursor-pointer' onClick={() => setFlipNewsApp(!flipNewsApp)}>Know More</button>
                        </center>
                    </div>
                    <div className='hover:cursor-pointer rounded-md h-96 dark:bg-slate-700 p-2 dark:text-white bg-slate-200' onClick={() => setFlipNewsApp(!flipNewsApp)}>
                        <center>
                            <p className='text-5xl font-semibold pb-5 pt-5'>
                                Tech Stack Used
                            </p>
                            <li className='grid grid-cols-2 items-center pb-4'>
                                <img src='./java.svg' className='mr-auto ' width={110} />
                                <img src='./android.svg' className='ml-auto ' width={110} />
                                {/* <img src='./k8.svg' className='mr-auto' width={700} /> */}
                            </li>

                            {/* <li className='grid grid-cols-3 items-center '>
                                <img src='./svelte.svg' className='mr-auto ' width={100} />
                            </li> */}
                        </center>
                    </div>
                </ReactCardFlip>
                <ReactCardFlip isFlipped={flipCakeOMania}
                    flipDirection="vertical">
                    <div className='flex flex-col'>
                        <img src="./cakeomania.png" className=' rounded-3xl ' />
                        <center>
                            <div className='text-4xl mt-6 pb-16 dark:text-white'>Cake-O-Mania</div>

                            <p className='pb-4 dark:text-white'>Cake-O-Mania is an e-commerce website where anyone can register and buy cake of their choice. Payments feature is included and its built using the MERN stack</p>
                            <a href='https://github.com/anushkakamalja/Cake-O-Mania' className='dark:bg-green-700 p-2  mr-2 dark:text-white rounded-md hover:opacity-75 transition-all ease-in-out bg-green-400 text-md hover:cursor-pointer'>View on Github</a>
                            <button className='dark:bg-slate-700 p-2 dark:text-white rounded-md hover:opacity-75 transition-all ease-in-out bg-slate-200 text-md hover:cursor-pointer' onClick={() => setFlipCakeOMania(!flipCakeOMania)}>Know More</button>
                        </center>
                    </div>
                    <div className='hover:cursor-pointer h-96 rounded-md dark:bg-slate-700 p-2 dark:text-white bg-slate-200' onClick={() => setFlipCakeOMania(!flipCakeOMania)}>
                        <center>
                            <p className='text-5xl font-semibold pb-5 pt-5'>
                                Tech Stack Used
                            </p>
                            <li className='grid grid-cols-2 items-center pb-4 p-4'>
                                <img src='./mongo.svg' className='mr-auto ' width={110} />
                                <img src='./expressjs.svg' className='ml-auto ' width={110} />
                                <img src='./react.svg' className='mr-auto' width={100} />
                                <img src='./node.svg' className='ml-auto ' width={100} />
                            </li>


                        </center>
                    </div>
                </ReactCardFlip>
            </div>
        </div>
    )
}

export default Projects;