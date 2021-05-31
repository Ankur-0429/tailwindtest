import React from 'react';
import Tutor from './tutor';
import {useState, useEffect} from 'react';

const Tutors = ({tutors})=>{
    const [size, setSize] = useState(1)
    const [ifMobile, setIfMobile] = useState(false)

    useEffect(()=>{
        window.addEventListener('resize', checkSize)
        return ()=>{
        window.removeEventListener('resize', checkSize)
        }
    })
    useEffect(()=>{
        setSize(window.innerWidth)
        if (size <= 768){setIfMobile(true)}
    },[])

    const checkSize = () =>{
        setSize(window.innerWidth)
        if (size <= 768){setIfMobile(true)}
        else {setIfMobile(false)}
    }

    return <section>
        {tutors.map((tutor, index)=>{
            if(index % 2 == 0 && !ifMobile){
                return (
                    <div className="relative left-32 lg:left-64">
                        <Tutor key={tutor.id} {...tutor} ifTilt={true}/>
                    </div>
                )
            }
            else if (index % 2 != 0 && !ifMobile){
                return (
                    <div className="relative left-8">
                        <Tutor key={tutor.id} {...tutor} ifTilt={true}/>
                    </div>
                )
            }

            else{
                return (
                    <div>
                        <Tutor key={tutor.id} {...tutor} ifTilt={false}/>
                    </div>
                )
            }
            
        })}
    </section>
}

export default Tutors