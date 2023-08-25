
const Work = () => {
    return (
        <div id="work">
            <center>
                <h1 className="lg:text-7xl text-4xl dark:text-white pb-24">Work History</h1>
                <div className="flex flex-col font-semibold text-xl w-fit p-6 dark:text-white rounded-md bg-slate-200 dark:bg-slate-700 justify-center items-center ">
                    <img src="./gt.svg" width={300} />
                    <p className="p-2">Senior Associate (Full Stack/ Blockchain Developer)</p>
                    <p className="p-2">Aug 2023- Present</p>
                </div>
                <img src="./line.png" width={550} className="dark:hidden block pt-4 pb-5" />
                <img src="./whiteline.png" width={550} className="dark:block hidden pt-4 pb-5" />
                <div className="flex flex-col font-semibold text-xl w-fit p-6 dark:text-white rounded-md bg-slate-200 dark:bg-slate-700 justify-center items-center ">
                    <img src="./dev.png" width={100} />
                    <p className="p-2">Web Development Intern </p>
                    <p className="p-2">December 2021 - January 2022</p>
                </div>
            </center>
        </div>
    )
}

export default Work