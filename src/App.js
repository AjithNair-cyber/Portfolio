import { useRef } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Switcher from "./utils/Switcher";
import Projects from "./components/Projects";
import Work from "./components/Work";
import { Analytics } from "@vercel/analytics/react";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-slate-100 min-h-screen items-center flex flex-col gap-10 dark:bg-slate-800">
      <Header />
      <div className="w-3/4 p-2 m-2">
        <Hero />
        <Skills />
        <Work />
        <Projects />
        <Analytics />
      </div>
      <Contact />
    </div>
  );
}

export default App;
