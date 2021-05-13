import { useState, useEffect } from 'react'

const FlexColumns = ({columns, start})=>{
    
    const calcBottom = () =>{
        start -= 26
        return start
    }

    return <section>
        {columns.map((column)=>{
            return <FlexColumn tag={column} bottom={calcBottom()}/>
        })}
    </section>
}


const FlexColumn = ({tag, bottom}) =>{
    const [ifHover, setIfHover] = useState(false)
    return (<>
        <div className="hidden md:block fixed right-1 top-1/2 z-40 -mt-100 px-30 py-0"> 
                <a href={`#${tag}`}>
                    <button style={{height: '25px', width: '126px', position: 'fixed', bottom: `${bottom+370}px`, right: '17px'}} onMouseMove={()=>{setIfHover(true)}} onMouseLeave={()=>{setIfHover(false)}} className="z-40 focus:outline-none">
                            {ifHover && <span style={{fontSize: '12px', padding:'2px 12px', borderRadius: '15px', position: 'absolute', bottom: '0px', right: '35px'}} className="bg-white text-black text-center transform uppercase">{tag}</span>}                    
                            <div className="bg-gray-300 rounded-full h-3 w-3 absolute bottom-1 left-24" />
                    </button>
                </a>
        </div>
                
    </>)
}

export default FlexColumns