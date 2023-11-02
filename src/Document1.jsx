import React from 'react'
import { TiTick } from 'react-icons/ti'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'

const Document1 = () => {
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
            iconStyle={{background: 'green', color: '#707070', fontFamily: 'Poppins', borderColor: '#D8D8D8', width: '24px', height: '24px'}}
            dateClassName='date-class-name'
            icon={<TiTick color='white' className='icon'/>}
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
            
            
        </div>
            
    </div>
  )
}

export default Document1