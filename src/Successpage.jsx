import React from 'react'
import { useNavigate } from 'react-router-dom'

const Successpage = () => {
  const navigate = useNavigate()
  
  return (
    <div className='h-screen sm:w-5/6 sm-mobile:w-full mt-10 mx-auto '>

    <div className='h-4/5 flex align-middle'>
      <div className='grow w-3/5 h-full'>
        <img className=' w-full h-screen relative ' src="aksonvady_crescent_sun_of_Peaceful_faerie_Landscape_Insane_and__c7c55c93-8978-4f0f-8fe4-8dec082cf5a7 1.png" alt="" />
        <p className='absolute top-32 text-white font-poppins font-semibold sm:text-lg mobile:text-sm sm-mobile:text-[14px] lg:text-2xl w-4/12 ml-4 shadow-sm'>Join a thriving community of creators</p>
      </div>
      
      
      <div className=' h-4/5 w-full flex items-center justify-center flex-col'>
        <img className='w-14 h-14' src="clarity_success-standard-line.png" alt="" />
        <p className='w-8/12 text-center sm:text-lg mobile:text-sm sm-mobile:text-[12px] lg:text-xl mt-6 font-poppins text-gray-500 mb-8'>Your kryptonig account has been verified, you are welcome to the community. You are now officially a krypto-nigga</p>
        <p className='w-8/12 flex items-center justify-center font-poppins text-[12px] text-white h-10 border-0 rounded-lg bg-gradient-to-t  from-[#3E77CD] to-[#ED7662] cursor-pointer mb-4'>Go to community</p>
        <p className='w-8/12 flex items-center justify-center font-poppins text-[12px] text-[#ED7662] h-10 border-2 border-[#ED7662] rounded-lg cursor-pointer mb-4' onClick={()=>navigate('/kyc/personalinfo')}>Setup my KYC Verification</p>
      </div>
    </div>
  </div>
  )
}

export default Successpage