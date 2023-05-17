import React, {useContext} from 'react';
import {BsWhatsapp} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'
import {IoIosLock} from 'react-icons/io'
import './styles/login.css'
import { Link } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';



const Login = () => {

const {idInstance, apiTokenInstance, setApiTokenInstance, setIdInstance} = useContext(AppContext)

let count = 0;
const changeProfile = () => {
  if ( idInstance !== '' && apiTokenInstance !== '' ) {

    setIdInstance( idInstance );
    setApiTokenInstance( apiTokenInstance );
    count++;
    
  } else {
    alert('Укажите корректные данные!')
  }
  if ((idInstance || apiTokenInstance) && count !== 0) {
    alert('Вы уже зарегистрированы!')
  }
}
console.log(idInstance, apiTokenInstance)

  return <div className="box-container">

      <div className="logo-head">
          <BsWhatsapp/>
          <h4>Whatsapp</h4> 
      </div>

        <h2>Login</h2>

      <div className="form">
          <div className="format-box">
              <MdEmail className="email-icon"/>
              <input type="text" placeholder="idInstance" onChange={(event) => setIdInstance(event.target.value)} maxlength={10}/>
          </div>
          <div className="format-box">
              <IoIosLock className="lock-pass"/>
              <input type="text" placeholder="apiTokenInstance" onChange={(event) => setApiTokenInstance(event.target.value)} maxlength={50} />
          </div>
          <Link to={'/newChat'}>
            <button className='log-btn' onClick={ async() => await changeProfile }> Login </button>
          </Link>

      </div>
    
  </div>;
};

export default Login;
