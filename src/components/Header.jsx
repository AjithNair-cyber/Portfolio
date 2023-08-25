import Switcher from "../utils/Switcher"
import { Link } from "react-scroll"

const Header = () => {

    return (
        <header className="pt-4 flex justify-center items-center sticky z-10 top-0 dark:bg-slate-700 shadow-sm shadow-black pr-10 pl-10 h-min w-full bg-slate-200 dark:text-white">
            <div className="flex flex-row lg:gap-36 lg:text-lg gap-10 font-semibold">

                <Link to="hero" spy={true} smooth={true} offset={0} duration={500} className="hover:cursor-pointer lg:block hidden mr-96">
                    <img src="./logo.png" />
                </Link>

                <Link to="skills" spy={true} smooth={true} offset={50} duration={500} className="hover:cursor-pointer">
                    Skills
                </Link>
                <Link to="work" spy={true} smooth={true} offset={50} duration={500} className="hover:cursor-pointer">
                    Work
                </Link>
                <Link to="projects" spy={true} smooth={true} offset={50} duration={500} className="hover:cursor-pointer">
                    Projects
                </Link>
                <Link to="contact" spy={true} smooth={true} offset={50} duration={500} className="hover:cursor-pointer">
                    Contact
                </Link>


                <div className=" ml-auto">
                    <Switcher />
                </div>
            </div>
        </header>
    )

}

export default Header;