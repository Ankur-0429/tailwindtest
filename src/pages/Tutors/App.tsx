import React from 'react'
import NavBar from '../../components/Navbar'
import TabTitle from '../../components/TabTitle'
import Tutors from 'components/tutors'
import {data} from 'components/data'

function App(props) {
  // only when we are actually accessing an api
  // const [loading,setLoading] = useState(true)
  const [tutors, setTutors] = React.useState([])
  
  React.useEffect(()=>{
    setTutors(data)
  },[])

  return (
    <main className="overflow-x-hidden">
      <TabTitle title='Tutors'/>
      <NavBar />
      <div className="absolute px-5 md:overflow-x-hidden w-screen md:left-8 lg:left-44">
        <Tutors tutors = {tutors} />
      </div>
    </main>
  )
}

export default App