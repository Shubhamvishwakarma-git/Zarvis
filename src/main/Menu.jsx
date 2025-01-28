import React, { useContext } from 'react'
import './menu.css'
import { assets } from '../assets/assets'
import { Context } from '../context/Context'

const Menu = () => {

  const{onsend,recentprompt,showres,loading,resdata,setinput,input} = useContext(Context)
  return (
    <div className='m1'>
      <div className="nav">
        <p>Zarvis</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        {!showres
        ?<>

<div className="greet">
          <p><span>Hello, Dev.</span></p>
          <p>How can i help you today?</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>Suggest beautiful places to see  on an upcoming road trip</p>
            <img src={assets.compass_icon} alt="compass icon" />
          </div>
          <div className="card">
            <p>Briefly summarize this concept: urban planning</p>
            <img src={assets.bulb_icon} alt="compass icon" />
          </div>
          <div className="card">
            <p>Brainstorm team bonding activities for our work retreat</p>
            <img src={assets.menu_icon} alt="compass icon" />
          </div>
          <div className="card">
            <p>Improve the readibility of the following code</p>
            <img src={assets.code_icon} alt="compass icon" />
          </div>
        </div>
        
       </>
       : <div className="result">
          <div className="result-title">
            <img src={assets.user_icon} alt="" />
            <p>{recentprompt}</p>
          </div>
          <div className="result-data">
            <img src={assets.gemini_icon} alt="" />
            {loading
            ?<div className='loader'>
              <hr />
              <hr />
              <hr />
            </div>
          : <p dangerouslySetInnerHTML={{__html:resdata}}></p>
          }
            
          </div>
       </div>
       }
        
        <div className="main-bottom">
          <div className="search-box">
            <input onChange={(e)=>setinput(e.target.value)} value={input} type="text" placeholder='Enter a promt here' />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              {input?<img onClick={()=>onsend()} src={assets.send_icon} alt="" />:null}
            </div>
          </div>
          <p className="bottom-info">Zarvis may display inaccurate info, including about people, so double-check its responses. your privacy and Zarvis apps</p>
        </div>
      </div>
    </div>
  )
}

export default Menu
