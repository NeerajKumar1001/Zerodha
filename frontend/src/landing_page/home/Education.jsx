import React from 'react'

const Education = () => {
  return (
  <div className='container mt-5'>
        <div className='row'>
          <div className='col-6'>
            <img src="media/images/education.svg" alt="" style={{width:"70%"}} />
          </div>
          
          <div className='col-5 mb-5'>
            <h1 className='mb-3 fs-2 mt-5'>Free and open market education</h1>
            <p className='mt-4'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
            <a href="" className='' style={{textDecoration: "none"}} >Varsity<i class="fa-solid fa-arrow-right"></i></a>
            <p className='mt-5 '>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
            <a href="" className='' style={{textDecoration: "none"}} >TradingQ&A<i class="fa-solid fa-arrow-right"></i></a>
          </div>
         
        </div>
    </div>
  )
}

export default Education