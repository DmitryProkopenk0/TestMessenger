import React, { useContext, useEffect, useState } from 'react'
import '../pages/styles/home.css'
import PeopleCart from '../PeopleCart'
import axios from 'axios'
import { AppContext } from '../../context/AppContext'
const Home = ({ name, avatar, title, ...props}) => {
  const [messages, setMessages] = useState([]);
  const [bebra, setBebra] = useState([]);
  const [message, setMessage] = useState('');
  const {idInstance, apiTokenInstance, inp_text} = useContext(AppContext);
  const [recId, setRecId] = useState(0);

  const [GetMessage, setGetMessage] = useState('');



    const sendMessageClick = () => {

      let myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      
      let raw = JSON.stringify({
        "chatId": `${inp_text}@c.us`,
        "message": `${message}`,
      });
      let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      if ( message !== '' ) {
      fetch(`https://api.green-api.com/waInstance${idInstance}/sendMessage/${apiTokenInstance}`, requestOptions)


      }
      messages.push({textMessage: message, sender: true});
      setMessage('');
      getMessage();

      }


    const postGettinsPost = (result) => {
        console.log(result.data)
        if (result.data.body.messageData.typeMessage.textMessage) {
          setGetMessage(result.data.body.messageData.typeMessage.textMessage)
          console.log(getMessage);
        }
        setRecId(result.data.receiptId)
      if ( GetMessage ) {
        messages.push({textMessage: getMessage, sender: false})
      } else {
        console.log("Либо ответ с сервера пришёл без textMessage, либо в ответе тип сообщения является не текстом")
      }
    }


    const getMessage = () => {
      
      axios.get(`https://api.green-api.com/waInstance${idInstance}/receiveNotification/${apiTokenInstance}`, {
        method: 'GET',
        redirect: 'follow'
      }).then(result => postGettinsPost(result))


      
      axios.delete(`https://api.green-api.com/waInstance${idInstance}/deleteNotification/${apiTokenInstance}/${recId}`, {
        method: 'DELETE',
        redirect: 'follow'
      })
    }

  console.log(idInstance, apiTokenInstance, inp_text)

  
  return (
    <div className='main-content-container'>
        <div className='left-content'>
        <PeopleCart tel={inp_text}/>
        </div>
        <div className='chat-content'>
          <div className='chat'>
            <div className='chat-child'>

            {messages.map((el) => 
                <div className={el.sender === false ? 'message message-recipient' : ' message message-sender'}>
                  <div>{el.textMessage}</div>
                </div>
            )}
            </div>

          </div>
          <div className='input-container'>
            <input type="text" placeholder='Введите сообщение' value={message} className='inp-writeText' onChange={(event) => setMessage(event.target.value)}/>
            <div className='send-btn' onClick={sendMessageClick}>
              <img src="/imgs/send.png" alt="post message" className='send-img' style={{width: '30px', height: '30px'}}/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Home