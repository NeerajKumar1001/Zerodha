import React from 'react'

const Hero = () => {
  return (
    <section className="container-fluid " id="supportHero">
      <div className="p-5 " id="supportWrapper">
        <h4 className='fs-4' style={{marginLeft: "11%"}}>Support Portal</h4>
        <a style={{marginRight: "15%"}} href="">Track Tickets</a>
      </div>
      <div className="row p-4 m-3">
        <div className="col-2"></div>
        <div className="col-4 p-3">
          <h1 className="fs-4 mb-5">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input className='' placeholder="Eg. how do I activate F&O" />
          <br />
          <a  style={{marginRight: "6%"}} href="">Track account opening</a>
          <a style={{marginRight: "6%"}} href="">Track segment activation</a>
          <a style={{marginRight: "6%"}} href="">Intraday margins</a>
          <a style={{marginRight: "6%"}} href="">Kite user manual</a>
        </div>
        <div className="col-4 mb-5 p-5">
          <h1 className="fs-2">Featured</h1>
          <ol>
            <li className='mb-3'>
              <a href="">Current Takeovers and Delisting - January 2024</a>
            </li>
            <li>
              <a href="">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  )
}

export default Hero