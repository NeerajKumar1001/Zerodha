import React from 'react'

const Universe = () => {
  return (
    <div className="container text-muted text mt-5">
      <div className="row text-center ">
        <h1 className='fs-2 text-center mt-5'>The Zerodha Universe</h1>
        <p className='text-center fs-5 mt-3'>Extend your trading and investment experience even further with our partner platforms</p>

        
        <div className="col-4 mt-5 text-center">
          <img src="media/images/dittologo.png" style={{width:"30%"}} alt="" />
          <p className='mt-4'>Personalised advice on life <br /> and health insuarance. No spam <br />and no mis-selling </p>
          <img className='mt-5' src="media/images/streakLogo.png" style={{width:"40%"}} alt="" />
          <p className='mt-4'> Systematic trading platform <br /> that allows you to create and backtest <br /> strategies without coding.</p>
          
        </div>
        <div className="col-4 mt-5 text-center">
          <img src="media/images/smallcaseLogo.png" alt="" />
          <p className='mt-4'> Thematic investing platform <br /> that helps you invest in diversified <br /> baskets of stocks on ETFs.</p>
          <img className='mt-5' src="media/images/zerodhaFundhouse.png" style={{width:"45%"}} alt="" />
          <p className='mt-4'> Our asset management venture <br /> that is creating simple and transparent index <br /> funds to help you save for your goals</p>

        </div>
        <div className="col-4 mt-5 text-center">
          <img src="media/images/sensibullLogo.svg" style={{width:"40%"}} alt="" />
          <p className='mt-5'> options trading platform that lets you <br /> create strategies, analyze positions, and examine <br /> data points like open interest, FII/DII, and more.</p>
          <img className='mt-5' src="media/images/smallcaseLogo.png" alt="" />
          <p className='mt-4 mb-5'> Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.</p>
        </div>
        <button className='p-2 btn btn-primary fs-5 mb-5 mt-5' style={{width:"20%" , margin:"0 auto"}}>Signup Now</button>
      </div>
    </div>
  )
}

export default Universe ;