import React from 'react';
import styles from '../styles/register.module.css';
import Tilt from 'react-tilt';
import { useState,useEffect } from "react";

const Tutor = ({id, name, pic,bio}) =>{
    const [ifMobile, setIfMobile] = React.useState(false)

    const [size, setSize] = useState(1)
  
    useEffect(()=>{
      window.addEventListener('resize', checkSize)
      return ()=>{
        window.removeEventListener('resize', checkSize)
      }
    })
    useEffect(()=>{
      setSize(window.innerWidth-50)

      if(size <= 620){
          setIfMobile(true)
      }
      else{
          setIfMobile(false)
      }
    },[])

    const checkSize = () =>{
        if (size < 620){
            setSize(window.innerWidth-50)
            setIfMobile(true)
        }

        else {
            setSize(620)
            setIfMobile(false)
        }
        
      }

        return( 
    <div className='max-w-2xl py-10'>
        {!ifMobile ? 
            <Tilt options={{ max : 25, easing: "cubic-bezier(.03,.98,.52,.99)"}}>
                <Part name={name} pic={pic} bio={bio}/>
            </Tilt>: 
            <Part name={name} pic={pic} bio={bio}/>
        }
    </div>)
}

export default Tutor


const Part = ({bio, name, pic}) => {
    const [readMore, setReadMore] = React.useState(false)
    return <>
    <figure className="transform hover:shadow-2xl shadow-md md:flex bg-gray-50 rounded-lg p-0 md:p-0 transition">
        <img className="w-32 h-32 md:w-48 md:h-auto md:rounded-r-none md:rounded-l-lg md:mx-0 rounded-full mx-auto" src={pic} alt={name} width="384" height="512" />
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
            <blockquote>
                    <h4 className="text-2xl font-semibold">Hi I'm {name}</h4>
                    {/* <Contacts /> */}
                    
                    <p>{readMore ? `"${bio}"`: `"${bio.substring(0,20)}"...`}
                        <button onClick={()=>setReadMore(!readMore)}>
                        {readMore ? <p className="font-thin text-sm  text-gray-400 underline">show less</p>: <p className="font-light text-sm text-gray-400 underline">read more</p>}
                        </button>
                    </p>
            </blockquote>
                <button className={styles.btn_special}>
                    Let's Talk
                </button>
        </div>
    </figure></>
}