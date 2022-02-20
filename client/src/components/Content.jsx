import React from 'react'
import './styles/content.css'
const Content = () => {
  return (
<div className='content'>
    <div className='searchclm'>
         <div className='object1'><input type="text" placeholder='search' className='input'/></div>
         <div className='object2'>hello world</div>
    </div>
    <div className='peopleclm'>
        <div className='object3'><h2>trendy post from today</h2></div>
        <div className='object4'>hello world</div>
    </div>

    {/* MAIN-CONTENT */}
    <div className='main-content'>
           <div className='board'>
              Lorem ipsum dolor sit amet conobcaecati rem deserunt magni repellendus! Tempore hic nam harum id?
           </div>
           {/* POSTS */}
           <div className='poster'>
              {/* USERS INFO AND POSTS DETAILS */}
              <div className='userinfo'>
                 <p className='name'>
                    <img src="./logo512.png" alt="" className='userimg'/>
                    <span className='username'>kwame oppong <br /><span>time</span></span>
                 </p>
                 <p>000000</p>
                 <p className='title-post'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, ratione.</p>
              </div>
              <div>
                 <img src="" alt="" />
              </div>
           </div>
    </div>
</div>
  )
}

export default Content