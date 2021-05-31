import React from 'react';
import Tutor from './tutor';

const Tutors = ({tutors})=>{
    const [ifOdd, setIfOdd] = React.useState(true)
    return <section>
        {tutors.map((tutor, index)=>{
            if(index % 2 == 0){
                return (
                    <Tutor key={tutor.id} {...tutor}/>
                )
            }
            else{
                return (
                    <div className="absolute right-32">
                        <Tutor key={tutor.id} {...tutor}/>
                    </div>
                )
            }
            
        })}
    </section>
}

export default Tutors