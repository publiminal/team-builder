import './App.css';
import React, { useState, useEffect } from 'react'
import UserForm from './components/UserForm'
import Team from './components/Team'
import axios from './axios'

export default function App() {

  /* Init Data Template //////////////////////////////////////// 
  * @username : string : textInput
  * @email : string : textInput
  * @role : string : dropdown
  */ //////////////////////////////////////////////////////////    
  const initFormData = {username:'', email:'', role:''};

  /* Set state //////////////////////////////////////////////// 
  * @formErrors : 
  *
  */
  const [formErrors, setFormErrors] = useState(null);
  const [formData, setFormData] = useState(initFormData)
  const [team, setTeam] = useState([])


  const updateForm = (inputName, inputValue) => {
    setFormData({ ...formData, [inputName]: inputValue });
  }

  const submitForm = () => {
    
    const newUser = { username:formData.username.trim(), email:formData.email.trim(), role: formData.role }
    console.log('new User ', newUser)
    if (!newUser.username || !newUser.email || !newUser.role) {setFormErrors("review your info"); return; }

    axios.post("nowhere.com", newUser)
    .then(res => {
      // console.log('after axios',  res.data);
      setTeam([res.data, ...team]);
      setFormData(initFormData);
      setFormErrors("");
    }).catch(err => console.error(err))


  }

  useEffect(() => {
    axios.get('nowhere.com').then(res => setTeam(res.data))
  }, [])

  /* Render /////////////////////////////////////////////////// 
  *
  *
  * *//////////////////////////////////////////////////////////

  return (
    <div className={`App formBox`}>
      <h1>Team Builder</h1>
      { formErrors && <h2 className="error">{formErrors}</h2> }
        <UserForm values={formData} update={updateForm} submit={submitForm} />

      {
        team.map(user => {
          return (
            <Team key={user.id} details={user} />
          )
        })
      }
    </div>
  )
}

 