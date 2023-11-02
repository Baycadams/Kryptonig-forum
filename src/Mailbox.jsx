import React from 'react'
import { Link, useNavigate} from 'react-router-dom'
import { useParams } from 'react-router-dom'


const Mailbox = () => {
  const {username} = useParams()
   
  const navigate = useNavigate()
  return (
    <div className='h-screen sm:w-5/6 sm-mobile:w-full mt-10 mx-auto '>

      <div className='h-4/5 flex align-middle'>
        <div className='grow w-3/5 h-full'>
          <img className=' w-full h-screen relative ' src="aksonvady_crescent_sun_of_Peaceful_faerie_Landscape_Insane_and__c7c55c93-8978-4f0f-8fe4-8dec082cf5a7 1.png" alt="" />
          <p className='absolute top-32 text-white font-poppins font-semibold sm:text-lg mobile:text-sm sm-mobile:text-[14px] lg:text-2xl w-4/12 ml-4 shadow-sm'>Join a thriving community of creators</p>
        </div>
        
        
        <div className=' h-4/5 w-full flex items-center justify-center flex-col'>
          
          <img className='w-24 h-20' src="Group 10043.png" alt="" />
          <p className='w-8/12 text-center sm:text-lg mobile:text-sm sm-mobile:text-[12px] lg:text-xl mt-6 font-poppins text-gray-500 mb-8'>Hey {username}! We sent you an email. Please check your mailbox to verify your account</p>
          
          <Link to={'https://www.gmail.com'} className='w-8/12 flex items-center justify-center font-poppins text-[12px] text-white h-10 border-0 rounded-lg bg-gradient-to-t  from-[#3E77CD] to-[#ED7662]'>Check my mailbox</Link>
          
        </div>
      </div>
    </div>
  )
}

export default Mailbox