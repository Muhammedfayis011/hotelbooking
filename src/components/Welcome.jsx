
import React from 'react'
import '../Css/Welcome.css'

const Welcome = () => {
    return (
        <div className='wel w-100   ' >
           <div >
               <div className='one '>
                <h1>Welcome to your <br />
                     luxurious home away <br /> from home </h1>
                     <p className='para mt-5'>Write a paragraph that talks about your brand or property here. Convince your prospective clients to choose you and your offerings by highlighting the qualities that set you apart from the competition. Your audience is already on your website, so push a little bit harder to seal the deal!</p>
                    
               </div>
           </div>
           <div className='two w-50'> 
            <div className='img-one'>
                <img className='w-100 h-100' src="https://img.freepik.com/free-photo/woman-with-with-breakfast-floating-around-swimming-pool_74190-9850.jpg?t=st=1736401115~exp=1736404715~hmac=e707fcb04392c514328faf837925d00aa130b7b69e9d84bb9696204c364ff56d&w=826" alt="" />
            </div>
           </div>
        </div>
    )
}

export default Welcome