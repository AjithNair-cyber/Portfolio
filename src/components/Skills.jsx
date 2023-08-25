
import React, { useState } from 'react'
import ReactCardFlip from "react-card-flip";

const Skills = () => {
    const [flipFrontEnd, setFlipFrontEnd] = useState(false);
    const [flipBackEnd, setFlipBackEnd] = useState(false);
    const [flipBlockChain, setFlipBlockChain] = useState(false);
    return (
        <div className="pt-36 pb-36" id='skills'>
            <center>
                <h1 className="lg:text-7xl text-4xl dark:text-white">Skills</h1>
            </center>
            <div className='lg:pt-20 pt-10 grid lg:grid-flow-row lg:grid-cols-3 gap-24'>
                <ReactCardFlip isFlipped={flipFrontEnd}
                    flipDirection="vertical" >

                    <div className='hover:cursor-pointer h-96 flex flex-col' >
                        <img src="./fullstack.gif" className=' rounded-3xl pb-4' />
                        <center>
                            <div className='text-4xl pt-2 pb-4 dark:text-white'>Front-End</div>
                            <button className='dark:bg-slate-700 p-2 dark:text-white rounded-md hover:opacity-75 transition-all ease-in-out bg-slate-200 text-md hover:cursor-pointer' onClick={() => setFlipFrontEnd(!flipFrontEnd)}>Know More</button>
                        </center>

                    </div>
                    <div className='hover:cursor-pointer rounded-md h-96 dark:bg-slate-700 dark:text-white bg-slate-200' onClick={() => setFlipFrontEnd(!flipFrontEnd)}>
                        <ul className='dark:text-white text-xl p-4'>

                            <li className='flex flex-row items-center '>
                                <img src='./html.svg' className='mr-auto ' width={110} />
                                <img src='./css.svg' className='ml-auto ' width={110} />
                            </li>

                            <li className='flex flex-row pt-20 items-center'>
                                <img src='./javascript.svg' className='mr-auto ' width={115} />
                                <img src='./react.svg' className='ml-auto bg-red' width={110} />
                            </li>

                        </ul>
                    </div>
                </ReactCardFlip>

                <ReactCardFlip isFlipped={flipBackEnd}
                    flipDirection="vertical">
                    <div>
                        <img src="./backend.gif" className='rounded-3xl' />
                        <center>
                            <div className='text-4xl pt-2 pb-4 dark:text-white'>Back-End</div>
                            <button className='dark:bg-slate-700 p-2 dark:text-white rounded-md hover:opacity-75 transition-all ease-in-out bg-slate-200 text-md hover:cursor-pointer' onClick={() => setFlipBackEnd(!flipBackEnd)}>Know More</button>
                        </center>
                    </div>
                    <div className='hover:cursor-pointer rounded-md h-96 dark:bg-slate-700 p-2 dark:text-white bg-slate-200' onClick={() => setFlipBackEnd(!flipBackEnd)}>
                        <ul className='dark:text-white text-xl p-4'>

                            <li className='flex flex-row items-center '>
                                <img src='./java.svg' className='mr-auto ' width={110} />
                                <img src='./spring.svg' className='ml-auto ' width={110} />
                            </li>

                            <li className='flex flex-row pt-20 items-center'>
                                <img src='./mongo.svg' className='mr-auto ' width={115} />
                                <img src='./expressjs.svg' className='ml-auto bg-red' width={110} />
                            </li>

                        </ul>
                    </div>
                </ReactCardFlip>
                <ReactCardFlip isFlipped={flipBlockChain}
                    flipDirection="vertical">
                    <div >
                        <img src="./blockchain.gif" className=' rounded-3xl ' />
                        <center>
                            <div className='text-4xl pt-2 pb-4 dark:text-white'>BlockChain Dev</div>
                            <button className='dark:bg-slate-700 p-2 dark:text-white rounded-md hover:opacity-75 transition-all ease-in-out bg-slate-200 text-md hover:cursor-pointer' onClick={() => setFlipBlockChain(!flipBlockChain)}>Know More</button>
                        </center>
                    </div>
                    <div className='hover:cursor-pointer h-96 rounded-md dark:bg-slate-700 p-2 dark:text-white bg-slate-200' onClick={() => setFlipBlockChain(!flipBlockChain)}>
                        <ul className='dark:text-white text-xl p-4'>

                            <li className='flex flex-row items-center '>
                                <img src='./solidity.svg' className='mr-auto ' width={120} />
                                <img src='./ethereum.svg' className='ml-auto ' width={90} />
                            </li>

                            <li className='flex flex-row pt-20 items-center'>
                                <img src='./bitcoin.svg' className='mr-auto ' width={90} />
                                <img src='./metamask.svg' className='ml-auto bg-red' width={90} />
                            </li>

                        </ul>
                    </div>
                </ReactCardFlip>
            </div>
        </div>
    )
}

export default Skills