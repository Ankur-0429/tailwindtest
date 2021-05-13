import Navbar from "components/Navbar"
import { useState,useEffect } from "react"
import TabTitle from '../components/TabTitle'
import FlexColumns from '../components/FlexColumns'

const Home = () => {
  const [size, setSize] = useState(1)
  const subjectBackground = 'rgba(209, 213, 219,1)'
  const [ifMobile, setIfMobile] = useState('0.3')

  useEffect(()=>{
    window.addEventListener('resize', checkSize)
    return ()=>{
      window.removeEventListener('resize', checkSize)
    }
  })
  useEffect(()=>{
    setSize(window.innerWidth)
    if (size <= 768){setIfMobile('0.7')}
  },[])

  const checkSize = () =>{
    setSize(window.innerWidth)
    if (size <= 768){setIfMobile('0.7')}
    else {setIfMobile('0.3')}
  }
  
  return (
    <div className="overflow-x-hidden">
      <TabTitle title ='Franklin Study Group'/>
      <Navbar />
      <FlexColumns columns={['home', 'subjects', 'members']} start={60} />
      <img id="home" src="/Images/study.jpeg" className="w-full"/>
      <div style={{borderLeft: `${size}px solid transparent`, borderRight: '0px solid transparent', borderBottom: `50px solid ${subjectBackground}`, position: 'relative', bottom:'50px', transform: 'scaleX(-1)'}} />
      
      <div className="px-4 pb-4 py-2 relative" style={{bottom: '3.1rem', backgroundColor: `${subjectBackground}`}}>
        <h4>About Study Buddies:</h4>
        <div style={{width: '45px', height: '3px', backgroundColor: '#ba95e6', margin: '20px 0px 20px 0px'}} />
        <p className="pb-2 text-center">"Our goal is to encourage students to participate in the community in socially distanced times.
            We hope that everyone has a great time learning from others and teaching their peers!"</p>
        
        <div style={{width: '45px', height: '3px', backgroundColor: '#ba95e6', margin: `20px auto 20px ${size/2-100}px`}} />
        <div style={
          {display: 'inline-block',
          backgroundColor: '#ba95e6',
          padding: "10px 19px",
          borderRadius: "3px",
          textTransform: "uppercase",
          fontSize: "11px",
          color: "#fff",
          fontWeight: "bolder",
          textDecoration: 'none',
          letterSpacing: "0.5px",
          margin: `0px 0px 20px ${size/2-100}px`}
          }>
            <a href="#portfolio">Learn More About Us</a>
        </div>
      </div>
      <div className="z-10" style={{borderLeft: `${size}px solid transparent`, borderRight: '0px solid transparent', borderBottom: `50px solid ${subjectBackground}`, position: 'relative', bottom:'50px', transform: 'scaleY(-1)'}} />
      
      <img id="home" src="/Images/2nd-section.jpg" className="w-full relative z-0" style={{bottom: '100px', height: 'auto'}} />
      <div className="container md:grid grid-flow-row grid-cols-2 grid-rows-2 gap-4 px-4 relative bottom-20 md:bottom-80 lg:bottom-96" id="subjects" style={{margin:'auto'}}>
          <Part ifMobile={ifMobile} title="Math" paragraph="Math 1, Math 2, Math 3, Pre-Calculus, AP Calculus AB/BC, AP Statistics, etc."/>
          <Part ifMobile={ifMobile} title="Science" paragraph="General Science, AP & CP Chemistry, Physics, Biology, etc."/>
          <Part ifMobile={ifMobile} title="English" paragraph="Regular/Honors English 9-12, AP Language & Composition, AP Literature & Compostion, etc."/>
          <Part ifMobile={ifMobile} title="Social Science" paragraph="AP Human Geography, World History, US History, US Gov, Comparative Gov, Micro/Macro Economics, Psychology, etc."/>
        
      </div>
    </div>
  )
}

const Part = ({ifMobile, title, paragraph}) =>{
  return <div style={
    {color: '#fff',
    display: "block",
    backgroundColor: `rgba(0, 0, 0, ${ifMobile})`,
    textAlign: "center",
    textTransform: "uppercase",
    fontSize: "12px",
    borderRadius: "5px",
    marginBottom: '3px'
  }}>
    <h4 className="text-lg">{title}</h4>
    <div style={{width: '45px', height: '3px', backgroundColor: '#ba95e6', margin: `5px auto 5px auto`}} />
    <p>{paragraph}</p>
  </div>
}

export default Home
