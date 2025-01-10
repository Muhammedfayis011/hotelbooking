import React from 'react'
import '../Css/Garden.css'
const Garden = () => {
  return (
    <div className='garden'>
        <h1 className='text-center'>What Our Guests
        </h1>
        <h1 className='text-center'>Say About Us</h1>
      
      <div className='garden-main'>
        <div className='garden-text'>
            <hr  />
            <hr />
            <p className='garden-para'>"Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable."</p>

            <h2 className='larsi'>Larisa Varma</h2>
        </div>
        <div className='garden-text'>
            <hr  />
            <hr />
            <p className='garden-para'>“Testimonials are short quotes from people who love your brand. It's a great way to convince customers to try your services.”</p>

            <h2 className='larsi'>Gaja Dubicki</h2>
        </div>
        <div className='garden-text'>
            <hr  />
            <hr />
            <p className='garden-para'>"Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable."</p>

            <h2 className='larsi'>Posha Chopra</h2>
        </div>
      </div>
    </div>
  )
}

export default Garden