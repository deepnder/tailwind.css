import logo from './logo.svg';
import './App.css';
import { AiOutlineHeart } from "react-icons/ai"
import home from "../src/images/home.jpeg";
import { BiBed, BiBath } from "react-icons/bi";
import { BsDot } from "react-icons/bs"

function App() {
  return (
    <>
      <header className=' mx-3 my-3 '>
        <div className='sm:flex sm:mt-20 justify-center '>
          <div className=' sm:flex shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]'>
          <div className='relative'>
            <img className='w-[100%] h-[12rem] relative rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none sm:h-[10.6rem] sm:w-[15rem] lg:h-[9rem]' src={home} alt="home" />
            <AiOutlineHeart className=' absolute top-4 right-6 text-white sm:left-[1rem]' />
          </div>
          <div className='rounded-b-lg  bg-white sm:flex flex-row-reverse sm:rounded-r-lg sm:rounded-bl-none lg:flex-row '>
            {/* div 1 */}
            <div >
              <div className='py-3 px-4 sm:bg-slate-100 sm:border-l sm:border-slate-300 sm:py-[2.55rem] sm:rounded-r-lg lg:bg-white lg:py-[2rem] lg:pt-[2.5rem] lg:border-none'>
                <div className='flex gap-5 text-[11.3px] font-medium text-slate-500 sm:flex-col sm:gap-0 lg:flex-row lg:gap-[14px] lg:text-[13px]'><p >DETACHED HOUSE </p><p className='flex items-center'><BsDot className='text-[15px]' /> 5Y OLD</p></div>
                <p className='text-[1.5rem] py-[0.1rem]  lg:text-[1.8rem] lg:mt-[-8px] lg:mb-[-5px]'>$750,000</p>
                <p className='text-[11px] text-slate-500 lg:text-[12px]'>742 Evergreen Terrace</p>
              </div>
            </div>
            {/* div 2 */}
            <div className='sm:flex flex-col-reverse lg:flex-row-reverse lg:bg-slate-100 lg:rounded-r-lg'>
            <div className='flex gap-8 pl-3 py-3 border-t border-slate-300 sm:flex sm:flex-col sm:gap-[0.8rem] lg:border-l lg:border-slate-300 lg:border-t-0 lg:gap-0 lg:pr-[4rem] lg:pt-[2.9rem]'>
              <span className='flex items-center gap-2'><BiBed className='text-[21px] lg:text-[23px]' /> <p className='text-[12px] font-medium lg:text-[13px]'>3 Bedrooms</p> </span>
              <span className='flex items-center gap-2'><BiBath className='text-[21px] lg:text-[23px]' /> <p className='text-[12px] font-medium lg:text-[13px]'>2 Bathrooms</p> </span>
            </div>
            {/* div 3 */} 
            <div className='bg-slate-100 border-t rounded-b-lg border-slate-300  sm:bg-white sm:border-t-0 lg:bg-slate-100 lg:border-l lg:border-slate-300 lg:rounded-bl-none '>
              <div className='px-3 py-2 sm:pb-[1.5rem] sm:pr-[4rem] lg:pr-[3rem] lg:pt-[2.5rem]'>
                <p className='text-slate-400 text-[11px] mb-1 lg:lg:text-[13px]'>REALTOR</p>
                <div className='flex items-center gap-2'>
                  <img className='w-[30px] h-[30px] rounded-[30px]' src={home} alt="home" />
                  <div className='flex flex-col'>
                    <span className='text-[12px] font-medium text-black lg:text-[13px]'>Tiffany Heffner</span>
                    <span className='text-[11.5px] text-slate-400 lg:text-[12px]'>(555) 555-4231</span>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
        </div>
      </header>
    </>
  );
}

export default App;
