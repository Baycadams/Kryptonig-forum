import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import app from './firebase';
import { getFirestore } from 'firebase/firestore';
import { collection, addDoc } from "firebase/firestore";
import {v4} from 'uuid'

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword]= useState('')
  const [username, setUsername]= useState('')
  const [confirmPassword, setConfirmPassword]= useState('')
  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const auth = getAuth(app);
  const db = getFirestore(app)
  const navigate = useNavigate()
  
  const handleSignup = (e) => {
    e.preventDefault()
    

    if(password !== confirmPassword ) {
      setError(true)
      setErrorMessage('please check your password')
    }
    if( !username) {
      setError(true)
      setErrorMessage('username cannot be empty')
    }
    else if(password===confirmPassword && username){
      const userID = v4()
      createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        sendEmailVerification(auth.currentUser)
      })
      .then(()=>{

        addDoc(collection(db, "forum-user"), {
          username: username,
          userID: userID
        })

        setUsername('')
        setEmail('')
        setPassword('')
        setConfirmPassword('')
        navigate(`/${userID}`)

      })
      
      .catch((error) => {
        setError(true)
        const errorMessage = error.message;
        setErrorMessage(errorMessage)

      });
    }

  }

  useEffect(()=>{
    setTimeout(()=>{
      setError(false)
    },5000)
    
  },[errorMessage])

  return (
    <div className='h-screen sm:w-5/6 sm-mobile:w-full mt-10 mx-auto '>
      <p className='font-poppins sm:text-[12px] sm-mobile:text-[8px] mr-20' dir='rtl'>have an account? <span className='cursor-pointer text-red-500' >sign in</span></p>
      <div className='h-4/5 flex align-middle'>
        <div className='grow w-3/5 h-full'>
          <img className=' w-full h-screen relative ' src="aksonvady_crescent_sun_of_Peaceful_faerie_Landscape_Insane_and__c7c55c93-8978-4f0f-8fe4-8dec082cf5a7 1.png" alt="" />
          <p className='absolute top-32 text-white font-poppins font-semibold sm:text-lg mobile:text-sm sm-mobile:text-[14px] lg:text-2xl w-4/12 ml-4'>Join a thriving community of creators</p>
        </div>
        
        
        <div className=' h-4/5 w-full mt-4 flex items-center flex-col'>
          
          <div className='rounded-3xl w-14 h-14 bg-blue-200 flex justify-center'><img className='w-10 h-10 my-2' src="logo-removebg-preview.png" alt="" /></div>
          <p className='font-semibold sm:text-lg mobile:text-sm sm-mobile:text-[12px] lg:text-xl mt-6 font-poppins'>Get Started With Kryptonig</p>
          <p className='text-gray-400 font-poppins font-light mobile:text-xs sm-mobile:hidden mobile:block sm:text-sm '>Getting started is easy</p>
          
          <form action="submit" className='flex flex-col w-full items-center mt-8'>
            <input className='border-2 border-gray-400 w-4/5 mb-8 h-14 font-poppins text-[12px] rounded-lg' type="text" name="" placeholder='Username' required id="" value={username} onChange={(e)=>setUsername(e.target.value)} />
            <input className='border-2 border-gray-400 w-4/5 mb-8 h-14 font-poppins text-[12px] rounded-lg' type="text" name="" placeholder='Email' id="" required value={email} onChange={(e)=>setEmail(e.target.value)} />
            <input className='border-2 border-gray-400 w-4/5 mb-8 h-14 font-poppins text-[12px] rounded-lg' type="password" name="" required placeholder='Password' id="" value={password} onChange={(e)=>setPassword(e.target.value)} />
            <input className='border-2 border-gray-400 w-4/5 mb-8 h-14 font-poppins text-[12px] rounded-lg' type="password" name="" placeholder='Confirm password' id="" required value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} />
            <button className='w-4/5 font-poppins text-[12px] text-white h-14 border-0 rounded-lg bg-gradient-to-t  from-[#3E77CD] to-[#ED7662]' onClick={handleSignup}>Create Account</button>
          </form>
          {error && <p className='font-poppins text-red-500 font-bold mt-4 sm:text-[12px] sm-mobile:text-[8px] text-center'>{errorMessage}</p>}
          <p className='font-poppins text-gray-500 mt-4 sm:text-[12px] sm-mobile:text-[8px] text-center'>By continuing you indicate that you read and agreed to the Terms of Use</p>
        </div>
      </div>
    </div>
  )
}

export default Signup