import React, { useState } from 'react'
import { TiTick } from 'react-icons/ti'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { useNavigate } from 'react-router-dom'

const PI21 = () => {

  const navigate = useNavigate()

  const [otp, setOtp] = useState(new Array(4).fill(''))
  const handleChange = (element, index) => {
    setOtp([...otp.map((d, idx)=> (idx===index) ? element.value : d)]);

    if(element.nextSibling){
      element.nextSibling.focus();
    }
  }

  const handleNext = (e) => {
    alert("Entered OTP is " + otp.join(''))
    navigate('/kyc/documentverification')
    
  }

  return (
    <div className='flex'>
        
    <div className='bg-[#FFF4F2] w-2/5 h-screen flex flex-col items-center'>
        <p className='text-[#303030] font-montserrat text-[16px] font-bold mt-8'>Steps - </p>
        <div className="mx-auto">
        <VerticalTimeline layout='1-column-left' lineColor='#D8D8D8'  >
          
          <VerticalTimelineElement className=' vertical-timeline-element--work ml-[9px] lg:ml-2'
          iconStyle={{background: 'green', color: '#707070', fontFamily: 'Poppins', borderColor: '#D8D8D8', width: '24px', height: '24px'}}
          dateClassName='date-class-name1'
          icon={<TiTick color='white' className='icon'/>}
          date='Personal Information Gender:   Male DOB:   16-07-1998 Country:   Nigeria'
          >
          
          </VerticalTimelineElement>

          <VerticalTimelineElement className=' vertical-timeline-element--work ml-[9px] lg:ml-2'
          iconStyle={{background:"#D8D8D8", color: '#707070', fontFamily: 'Poppins', borderColor: '#D8D8D8', width: '20px', height: '20px', paddingLeft: '6px'}}
          dateClassName='date-class-name'
          icon='2'
          date='Verification'>
            
          </VerticalTimelineElement>

          <VerticalTimelineElement className=' vertical-timeline-element--work ml-[9px] lg:ml-2'
          iconStyle={{background:"#D8D8D8", color: '#707070', fontFamily: 'Poppins', borderColor: '#D8D8D8', width: '20px', height: '20px', paddingLeft: '6px'}}
          dateClassName='date-class-name'
          icon='3'
          date='Upload ID'>
            
          </VerticalTimelineElement>

        </VerticalTimeline>
        </div>
        
    </div>
    
    <div className=' h-4/5 mt-28 flex items-center justify-center flex-col bg-[#FFF] w-3/5'>
          
          <img className='w-24 h-20' src="https://firebasestorage.googleapis.com/v0/b/kryptonig.appspot.com/o/Group%2010049.png?alt=media&token=578983cf-bdf6-4539-b41c-df1053f7187d" alt="" />
          <p className='w-8/12 text-center sm:text-lg mobile:text-sm sm-mobile:text-[12px] lg:text-xl mt-6 font-poppins  mb-8 text-black'>Verify your phone number</p>
          <p className='w-5/12 text-center text-gray-500 font-poppins text-[12px] -mt-6 sm:w-2/3 sm-mobile:w-3/4' >To secure your account, confirm your phone number with the code that will be sent to your phone</p>

          <div className='flex gap-2 mt-14 mb-20'>
            {
              otp.map((data, index) => {
                return (
                  <input type="number" 
                  className='w-16 h-16 rounded-md font-poppins text-black text-base text-center border-2 border-gray-300'
                  name='otp'
                  maxLength='1'
                  key={index}
                  value={data}
                  onChange={(e)=> handleChange(e.target, index)}
                  onFocus={(e)=> e.target.select()}
                  />
                )
              })
            }
            
          </div>

          <button className='w-5/12 flex items-center justify-center font-poppins text-[12px] text-white h-10 border-0 rounded-lg bg-gradient-to-t  from-[#3E77CD] to-[#ED7662] cursor-pointer' onClick={(e)=> handleNext(e)} >Next</button>   
          
          
    </div>
        
</div>
  )
}

export default PI21