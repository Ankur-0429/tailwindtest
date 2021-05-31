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
    <main>
      <TabTitle title='Tutors'/>
      <NavBar />
      <div className="absolute p-5 mb-40 w-full md:left-0 -translate-x-2/4 -translate-y-2/4">
        <Tutors tutors = {tutors} />
      </div>
    </main>
  )
}

export default App