import React from 'react';
import styles from '../styles/register.module.css';
import Tilt from 'react-tilt';
import { useState,useEffect } from "react";

const Tutor = ({id, name, pic,bio}) =>{
    const [readMore, setReadMore] = React.useState(false)

    const [size, setSize] = useState(1)
  
    useEffect(()=>{
      window.addEventListener('resize', checkSize)
      return ()=>{
        window.removeEventListener('resize', checkSize)
      }
    })
    useEffect(()=>{
      setSize(window.innerWidth-50)
    },[])

    const checkSize = () =>{
        if (size < 620){
            setSize(window.innerWidth-50)
        }

        else {
            setSize(620)
        }
        
      }

        return <>
        <Tilt options={{ max : 25 }}>
            <figure className="transform hover:shadow-2xl shadow-md md:flex bg-gray-50 rounded-lg p-0 md:p-0 transition">
                <img className="w-32 h-32 md:w-48 md:h-auto md:rounded-r-none md:mx-0 rounded-lg mx-auto" src={pic} alt={name} width="384" height="512" />
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
            </figure>
        </Tilt>
    </>
}

export default Tutor