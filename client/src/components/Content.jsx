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
         <div className='side1'>
           <div className='object'> 
              <div>
                 <img src="./fastreach.jpg" alt="" srcset="" className='side-image'/>  
                 <p>only te boy</p> 
              </div>
              <div className='sidenv'>sdkldlskdslkd</div>
           </div>
           <div className='object'> 
             <div>
                 <img src="./fastreach.jpg" alt="" srcset="" className='side-image'/> 
                 <p>only te boy</p> 
             </div>
             <div className='sidenv'>sdkldlskdslkd</div>
           </div>
           <div className='object'> 
              <div>
                 <img src="./fastreach.jpg" alt="" srcset="" className='side-image'/>  
                 <p>only te boy</p> 
              </div>
              <div className='sidenv'>sdkldlskdslkd</div>
           </div>
           <div className='object'> 
             <div>
                 <img src="./fastreach.jpg" alt="" srcset="" className='side-image'/> 
                 <p>only te boy</p> 
             </div>
             <div className='sidenv'>sdkldlskdslkd</div>
           </div>
         </div>
    </div>
</div> 
  )
}

export default Content