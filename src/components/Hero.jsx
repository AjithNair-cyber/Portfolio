import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <div id="hero" className='lg:p-4 pl-8 flex lg:flex-row flex-col lg:gap-48 gap-12 dark:text-white'>
      <div className='flex-1'>
        <h1 className=' lg:text-8xl text-4xl lg:m-4 m-3'>
          Hi,
        </h1>
        <h1 className=' lg:text-8xl text-4xl lg:m-4 m-3'>
          I am Ajith Nair
        </h1>
        <div className='lg:block hidden'>
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
            className='lg:p-2'
            style={{ fontSize: '1.5em', overflow: "hidden", textOverflow: "ellipsis", whiteSpace: 'nowrap', display: 'inline-block' }}
          />
        </div>
        <div className='lg:hidden block'>
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
            className='lg:p-2'
            style={{ fontSize: '1.2em', overflow: "hidden", textOverflow: "ellipsis", whiteSpace: 'nowrap', display: 'inline-block' }}
          />
        </div>

        {/* <div className='dark:bg-slate-700 w-fit p-4 ml-24 mt-5 rounded-md hover:opacity-75 transition-all ease-in-out bg-slate-200 text-xl hover:cursor-pointer'>Hire me</div> */}
      </div>

      <div className='flex-1 '>
        <img src="/image.jpg" className='dark:hover:bg-slate-700 hover:bg-slate-200 transition-colors ease-linear rounded-full border-2 dark:border-white border-slate-700 ml-auto' />
      </div>
    </div>);
}

export default Hero;