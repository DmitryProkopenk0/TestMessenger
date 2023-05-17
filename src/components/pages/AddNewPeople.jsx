import React from 'react'
import './styles/addNewPeople.css'
import { Link } from 'react-router-dom'
import { AppContext } from '../../context/AppContext';
const AddNewPeople = () => {

  document.getElementsByClassName("inp-newChat").value = "+7";
  const {inp_text,setInp_text} = React.useContext(AppContext);
  
  return (
    <div className='main-container'>

        <div className='content'>
        <h1>Создать новый чат</h1>

        {/* Кнопка ватсап */}
        <input type="text" placeholder='Введите номер получателя' className='inp-newChat' value={inp_text} onChange={(event) => setInp_text(event.target.value)} maxLength={12}/>
        <Link to={'/home'}>
        <div target="_blank" title="Написать в Whatsapp" rel="noopener noreferrer"><div class="whatsapp-button">
            <i class="fa fa-whatsapp">
            </i>
            <img src="/imgs/whatsapp-btn.svg" className='whatsapp-img'/>
            </div>
        </div>
        </Link>
        {/* конец кнопки */}
        </div>


    </div>
  )
}

export default AddNewPeople