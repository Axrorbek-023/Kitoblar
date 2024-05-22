import React, { useEffect, useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'

function Login() {
  const [show, setShow] = useState(true)
  const [confirm, setConfirm] = useState(false)
  const [data, setData] = useState([])
  const navigate = useNavigate()

  function fnUp(e){
    e.preventDefault()
    let info = {
      username: e.target.username.value,
      email: e.target.email.value,
      tel: e.target.tel.value,
      password: e.target.password.value,
      confirm: e.target.confirm.value,
    }

    if(info.password !== info.confirm){
      setConfirm(true)
    }else{
      setConfirm(false)
      fetch(`https://65eb425343ce164189339401.mockapi.io/Books`,{
        method:'POST',
        headers:{'content-type':'application/json'},
        body:JSON.stringify(info)
      })
      .then((res)=> res.json())
      .then((data)=> console.log(data))
      .then(()=> {
          window.localStorage.setItem('token', 'qwerty')
          e.target.username.value = ''
          e.target.email.value = ''
          e.target.tel.value = ''
          e.target.password.value = ''
          e.target.confirm.value = ''
          navigate('/')
      })
    }
  }

  useEffect(()=>{
    fetch(`https://65eb425343ce164189339401.mockapi.io/Books`)
    .then((res)=> res.json())
    .then((users)=> setData(users))
  },[])

  function fnIn(e){
    e.preventDefault()
    let info = {
      username: e.target.username.value,
      password: e.target.password.value,
    }
    let finUser = data.find((item)=> item.username == info.username && item.password == info.password)
    if(finUser){
      window.localStorage.setItem('token', 'qwerty')
      navigate('/')
    }else{
      alert("siz avval ro'yxatdan o'tmagansiz")
    }
  }

  return (
    <div className='login'>
      <div className="container">
        <h1 className='login__title'>Login</h1>
        {
          show ? <div className="up">
          <form onSubmit={fnUp} className='form' action="#">
            <input className={`form-control mb-3 border boder-info`} name='username' type="text" placeholder='username'/>
            <input className={`form-control mb-3 border boder-info`} name='email' type="text" placeholder='email'/>
            <input className={`form-control mb-3 border boder-info`} name='tel' type="text" placeholder='tel:'/>
            <input className={confirm ? 'form-control mb-3 border boder-info bg-danger' : 'form-control mb-3 border boder-info'} name='password' type="text" placeholder='password'/>
            <input className={confirm ? 'form-control mb-3 border boder-info bg-danger' : 'form-control mb-3 border boder-info'} name='confirm' type="text" placeholder='password confirm'/>
            <button type='submit' className='btn btn-info up__btn'>Login up</button>
            <div className='up__box'>
              <p>Already have an account? <button onClick={()=> setShow(false)} className='btn btn-link'>Sign in</button></p>
            </div>
          </form>
        </div> : <div className="in">
          <form onSubmit={fnIn} className='form'  action="#">
            <input className={`form-control mb-3 border boder-info`} type="text" placeholder='username' name='username'/>
            <input className={`form-control mb-3 border boder-info`} type="text" placeholder='password' name='password'/>
            <button type='submit' className='btn btn-info in__btn'>Login in</button>
            <div className='in__box'>
              <p>Do not you have an account? <button onClick={()=> setShow(true)} className='btn btn-link '>Sign up</button></p>
            </div>
          </form>
        </div> 
        }
      </div>
    </div>
  )
}

export default Login