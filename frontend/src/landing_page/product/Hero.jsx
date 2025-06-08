import React from 'react'

const Hero = () => {
  return (
    <div className="container border-bottom text-center ">
      <div className="row p-5 ">
        <h1 className='fs-1 mt-5 text-center'>Zerodha Products </h1>
        <h3 className='text-muted fs-4 mt-2'>Sleek, modern, and intuitive trading platforms</h3>
        <p  className='mt-3 mb-5'>Check out our <a href="/investment-offerings" style={{ textDecoration: 'none', color: '#007bff' }}>investment offerings<i className="fa-solid fa-arrow-right"></i></a></p>
      </div>
    </div>
  )
}

export default Hero;