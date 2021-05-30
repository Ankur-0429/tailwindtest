import React, { useEffect, useState } from 'react';
import Tutor from './tutor'
import styles from '../styles/register.module.css';
import Finished from './Finished'

const InputForm = () => {
  const [ifCompleted, setIfCompleted] = useState(false)
  const [ifError, setIfError] = useState(false)
  const [person, setPerson] = useState({id:1, name: '', bio: '', pic: '', email: ''})
  const [selectedFile, setSelectedFile] = useState<File>()
  
  useEffect(()=>{
    if (selectedFile){
      const reader = new FileReader()
      reader.onloadend = () =>{
        var preview = reader.result as string
        setPerson({...person, pic: preview})
      }
      reader.readAsDataURL(selectedFile)
    }
    else{
      person.pic = null
    }
  }, [selectedFile])

  const handleSubmit = (event) =>{
    event.preventDefault()

    var check = true
    Object.keys(person).forEach(function (k){
      if (!person[k]) {
          check = false
      }
    })

    if (check){
      console.log(person)
      setIfCompleted(true)
      setTimeout(()=>{ setIfCompleted(false) }, 4000);
      setPerson({id:1, name: '', bio: '', pic: '', email: ''})
    }
    else{
      setIfError(true)
      setTimeout(()=>{ setIfError(false) }, 4000);
    }
  }

  const handleChange = (event) =>{
    const name = event.target.name
    const value = event.target.value
    setPerson({...person, [name]: value})
  }
  
  return <>
      <div>
        <article className={styles.single_tutor}>
          <form className={styles.form} onSubmit={handleSubmit}>
            
            <div className={styles.form_control}>
              <label htmlFor="firstName">Name: </label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={person.name}
                onChange={handleChange}
                size={1}
              />
            </div>

            <div className={styles.form_control}>
              <label htmlFor="email">Email: </label>
              <input 
                type="text" 
                id="email" 
                name="email" 
                value={person.email}
                onChange={handleChange}
                size={1} 
              />
            </div>

            <div className={styles.form_control}>
              <label htmlFor="bio">Bio: </label>
              <input 
                type="text" 
                id="bio" 
                name="bio" 
                value={person.bio}
                onChange={handleChange}
                size={1}
              />
            </div>

            <div className={styles.form_control}>
              <label htmlFor="image_uploads">Image: </label>
              <input 
                type="file"
                accept="image/*" 
                onChange={(event)=>{
                  var file = event.target.files[0]
                  if (file && file.type.substring(0,5) === 'image'){
                    setSelectedFile(file)
                  }
                  else{
                    setSelectedFile(null)
                  }
                }}
              />
            </div>

            <button type="submit" onClick={handleSubmit}>add Person</button>
          
          </form>

          {ifCompleted && <Finished text='Finished!'/>}
          {ifError && <Finished text='All Fields must be Completed'/>}
        </article>
      </div>

      <Tutor key={person.id} {...person} />
  </>
};

export default InputForm;
