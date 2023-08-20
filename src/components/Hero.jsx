import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <div id="hero" className='p-4 pl-8 flex flex-row gap-48 dark:text-white'>
      <div className='flex-1'>
        <h1 className=' text-8xl m-4'>
          Hi,
        </h1>
        <h1 className=' text-8xl m-4'>
          I am Ajith Nair
        </h1>
        <TypeAnimation
          sequence={[
            2000, // Waits 1s
            'I am a Web Developer </>', // Deletes 'One' and types 'Two'
            2000, // Waits 2s
            'I am a Blockchain Developer ₿', // Types 'Three' without deleting 'Two'
          ]}
          wrapper="span"
          cursor={true}
          repeat={Infinity}
          className='p-2'
          style={{ fontSize: '1.5em', display: 'inline-block' }}
        />
        {/* <div className='dark:bg-slate-700 w-fit p-4 ml-24 mt-5 rounded-md hover:opacity-75 transition-all ease-in-out bg-slate-200 text-xl hover:cursor-pointer'>Hire me</div> */}
      </div>
      <div className='flex-1 '>
        <img src="/image.jpg" className='dark:hover:bg-slate-700 hover:bg-slate-200 transition-colors ease-linear rounded-full border-2 dark:border-white border-slate-700 ml-auto' />
      </div>
    </div>);
}

export default Hero;