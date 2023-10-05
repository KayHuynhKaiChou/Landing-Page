import style from './Login.module.scss'
import googleIcon from '../../asserts/image/google.png'
import facebookIcon from '../../asserts/image/Facebook.png'
import appleIcon from '../../asserts/image/apple.png'
import { useState } from 'react'

export default function LoginPage() {
  const [user , setUser] = useState({
    username : '',
    password : '',
  })

  const [errFields , setErrFields ] = useState({
    msgUsername : '',
    msgPassword : ''
  })

  const validateForm = () => {
    if(!(user.username.trim() && user.password.trim())){
      setErrFields({
        msgPassword : user.password ? '' : 'Password is required',
        msgUsername : user.username ? '' : 'Username is required'
      })
    }else{
      alert('login success');
    }
  }
  return (
    <div className={style['background-login']}>
      <div className={style['form-login']}>
        <div className={style['header-login']}>
          <div className={style['welcome']}>
            Welcome to 
            <span>Lorem</span>
          </div>
          <div className={style['action']}>
            <div className={style['no-account']}>No Account ?</div>
            <div className={style['signup']}>Sign up</div>
          </div>
        </div>
        <div className={style['sign-in-title']}>Sign in</div>
        <div className={style['button-action']}>
          <div className={style['google']}>
            <img src={googleIcon} />
            <div>Sign in with google</div>
          </div>
          <div className={style['facebook']}>
            <img src={facebookIcon} alt="" />
          </div>
          <div className={style['apple']}>
            <img src={appleIcon} alt="" />
          </div>
        </div>
        <div className={style['body-login']}>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Enter your username or email address</label>
            <input 
              onInput={() => setErrFields({...errFields , msgUsername: ''})} 
              onChange={e => setUser({...user , username : e.target.value})} 
              type="email" 
              class="form-control" 
              id="exampleFormControlInput1" 
              placeholder="name@example.com"
            />
            <span style={{color:'red'}}>{errFields.msgUsername}</span>
          </div>
          <div class="mb-5">
            <label for="exampleFormControlTextarea1" class="form-label">Enter your Password</label>
            <input 
              onInput={() => setErrFields({...errFields , msgPassword: ''})} 
              onChange={e => setUser({...user , password : e.target.value})} 
              type="password" 
              class="form-control" 
              id="exampleFormControlInput1" 
              placeholder="Password ..."
            />
            <span style={{color:'red'}}>{errFields.msgPassword}</span>
          </div>
          <button onClick={validateForm}>Sign in</button>
        </div>
      </div>
    </div>
  )
}
