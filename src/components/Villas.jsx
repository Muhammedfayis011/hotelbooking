import React from 'react'
import '../Css/Villas.css'

const Villas = () => {
    return (
        <div className='we'>
            <h1 className='text-center pt-5 '> Villas</h1>

            <div className='villa-main'>
                <div className='villa-img'>
                    <img className='aa ' src="https://img.freepik.com/free-photo/pool-umbrellas-hammocks-seen-from_1203-296.jpg?t=st=1736423972~exp=1736427572~hmac=c87bb67c40c42edb5f9e2d026cd6265c6e474b318399969effbccd01f4c73e03&w=826" alt="" />


                    <div className='vill-con'>
                        <div className='text-center mt-3'><h4 className='fw-bold' >Garden Villa</h4>
                            <h5 className='fw-bold' >starts at $239/night</h5>
                            <p>Max 3 Guests </p>

                        </div>


                    </div>

                </div>
                <div className='villa-img'>
                    <img className='aa ' src="https://img.freepik.com/free-photo/swimming-pool-resort_1150-10730.jpg?t=st=1736423911~exp=1736427511~hmac=cb467a0d21c0ecaed09bab5a3cb921b2a5cd36e8f32b6f74d537586eff270fbd&w=826" alt="" />


                    <div className='vill-con'>
                        <div className='text-center mt-3'><h4 className='fw-bold' >Courtyard Villa</h4>
                            <h5 className='fw-bold' >starts at $339/nig</h5>
                            <p>Max 3 Guests </p>

                        </div>


                    </div>

                </div>
                <div className='villa-img'>
                    <img className='aa ' src="https://img.freepik.com/free-photo/china-old-garden_1127-3660.jpg?t=st=1736423861~exp=1736427461~hmac=f27a9d94beb323162083ade3e9fb50bc0a1c5c62da4bf40d674bf928712de1ec&w=826" alt="" />


                    <div className='vill-con'>
                        <div className=' text-center mt-3'><h4 className='fw-bold' >2-BR Poolside Villa</h4>
                            <h5 className='fw-bold' >starts at $399/night</h5>
                            <p>Max 3 Guests </p>

                        </div>


                    </div>

                </div>

            </div>
        </div>
    )
}

export default Villas