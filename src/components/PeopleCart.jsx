import React from 'react'
import './styles/peopleCart.css'
const PeopleCart = ({tel, ...props}) => {
  return (
    <div className='people1-container'>
        <img src="imgs/bulka.jpg" alt="avatar" className='avatar-img' />
        <div className='content-chat-people'>
            <b className='name-people'>+{tel}</b>
        </div>
    </div>
  )
}

export default PeopleCart