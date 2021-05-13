import React from 'react'
import InputForm from '../../components/InputForm'
import NavBar from '../../components/Navbar'
import styles from '../../styles/register.module.css'
import TabTitle from '../../components/TabTitle'

function App() {
  return (
    <>
      <TabTitle title='Franklin Register'/>
      <NavBar />
      <div className={styles.reg_main}>
        <InputForm />
      </div>
    </>
  )
}

export default App