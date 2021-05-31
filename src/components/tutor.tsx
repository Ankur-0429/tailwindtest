import React from 'react';
import styles from '../styles/register.module.css';
import Tilt from 'react-tilt';
import { useState,useEffect } from "react";
import { Transform } from 'node:stream';

const Tutor = ({id, name, pic,bio, ifTilt}) =>{

     
    return( 
        <div className='max-w-xl py-10'> 
            {ifTilt ? <div>
                <Tilt options={{ max : 25, easing: "cubic-bezier(.03,.98,.52,.99)"}}>
                        <Part name={name} pic={pic} bio={bio}/>
                </Tilt> 
            </div>:
            <Part name={name} pic={pic} bio={bio}/>}   
        </div>
    )
        
}

export default Tutor


const Part = ({bio, name, pic}) => {
    const [readMore, setReadMore] = useState(false)
    const [toggle, setToggle] = useState(true)
    if (readMore){
        return <>
        <figure className="transform hover:shadow-2xl shadow-md md:flex bg-gray-50 rounded-lg p-0 md:p-0 transition">
            <img className="w-32 h-32 object-cover md:w-48 md:h-auto md:rounded-r-none md:rounded-bl-none md:rounded-l-lg md:mx-0 md:max-h-80 rounded-full mx-auto" src={pic} alt={name} width="384" height="512" />
            <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                <blockquote>
                        <h4 className="text-2xl font-semibold">Hi I'm {name}</h4>
                        
                        <p>{readMore ? `"${bio}"`: `"${bio.substring(0,20)}"...`}
                            <button onClick={()=>setReadMore(!readMore)}>
                            {readMore ? <p className="font-thin text-sm  text-gray-400 underline">show less</p>: <p className="font-light text-sm text-gray-400 underline">read more</p>}
                            </button>
                        </p>
                </blockquote>
                    <button className={styles.btn_special} onClick={()=>setToggle(!toggle)}>
                        Let's Talk
                    </button>
            </div>
        </figure>
        </>
    }
    else{
        return <>
        <figure className="transform hover:shadow-2xl shadow-md md:flex bg-gray-50 rounded-lg p-0 md:p-0 transition">
            <img className="w-32 h-32 object-cover md:w-48 md:h-auto md:rounded-r-none md:rounded-l-lg md:mx-0 md:max-h-40 rounded-full mx-auto" src={pic} alt={name} width="384" height="512" />
            <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                <blockquote>
                        <h4 className="text-2xl font-semibold">Hi I'm {name}</h4>
                        
                        <p>{readMore ? `"${bio}"`: `"${bio.substring(0,20)}"...`}
                            <button onClick={()=>setReadMore(!readMore)}>
                            {readMore ? <p className="font-thin text-sm  text-gray-400 underline">show less</p>: <p className="font-light text-sm text-gray-400 underline">read more</p>}
                            </button>
                        </p>
                </blockquote>
                    <button className={styles.btn_special} onClick={()=>setToggle(!toggle)}>
                        Let's Talk
                    </button>
            </div>
        </figure>
        </>
    }    
}

{/*{toggle ? 
        <figure className="transform hover:shadow-2xl shadow-md md:flex bg-gray-50 rounded-lg p-0 md:p-0 transition">
            <img className="w-32 h-32 object-cover md:w-48 md:h-auto md:rounded-r-none md:rounded-l-lg md:mx-0 md:max-h-40 rounded-full mx-auto" src={pic} alt={name} width="384" height="512" />
            <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                <blockquote>
                        <h4 className="text-2xl font-semibold">Hi I'm {name}</h4>
                        
                        
                        <p>{readMore ? `"${bio}"`: `"${bio.substring(0,20)}"...`}
                            <button onClick={()=>setReadMore(!readMore)}>
                            {readMore ? <p className="font-thin text-sm  text-gray-400 underline">show less</p>: <p className="font-light text-sm text-gray-400 underline">read more</p>}
                            </button>
                        </p>
                </blockquote>
                    <button className={styles.btn_special} onClick={()=>setToggle(!toggle)}>
                        Let's Talk
                    </button>
            </div>
        </figure>:

        <figure className="transform fixed w-full h-screen left-0 right-0 mx-auto top-0 hover:shadow-2xl shadow-md md:flex bg-gray-50 rounded-lg p-0 transition">
            <img className="w-32 h-32 object-cover md:w-48 md:h-auto md:rounded-r-none md:rounded-l-lg md:mx-0 md:max-h-40 rounded-full mx-auto" src={pic} alt={name} width="384" height="512" />
            <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                <blockquote>
                        <h4 className="text-2xl font-semibold">Hi I'm {name}</h4>
                        
                        
                        <p>{readMore ? `"${bio}"`: `"${bio.substring(0,20)}"...`}
                            <button onClick={()=>setReadMore(!readMore)}>
                            {readMore ? <p className="font-thin text-sm  text-gray-400 underline">show less</p>: <p className="font-light text-sm text-gray-400 underline">read more</p>}
                            </button>
                        </p>
                </blockquote>
                    <button className={styles.btn_special} onClick={()=>setToggle(!toggle)}>
                        Let's Talk
                    </button>
            </div>
        </figure>

        }*/}