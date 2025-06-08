import React from 'react'

const Hero = () => {
  return (
    <div className="container text-center" >
      <div className="row  mt-5 text-center border-bottom  mb-5">
        <h1 className='fs-1 mt-5  text-center'> Charges
        </h1>
        <p className='text-muted fs-5 mb-5'  >List of all charges and taxes</p>
      </div>
      <div className="row p-5 text-center " >
        
        <div className="col-4 p-2 mt-5 fs-5">
          <img src="media/images/pricingEquity.svg" style={{width:"70%"}} alt="" />
          <h1 className='fs-3 mt-4'>Free equity delivery</h1>
          <p className='text-muted fs-5 mt-4'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
        </div>
        <div className="col-4 p-2  mt-5 fs-5">
          <img src="media/images/intradayTrades.svg" style={{width:"70%"}} alt="" />
          <h1 className='fs-3 mt-4'>Intraday and F&O trades</h1>
          <p className='text-muted fs-5 mt-4'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
        </div>
        <div className="col-4 p-2   mt-5 fs-5">
          <img src="media/images/pricingEquity.svg" style={{width:"70%"}} alt="" />
          <h1 className='fs-3 mt-4'>Free direct MF</h1>
          <p className='text-muted fs-5 mt-4'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
        </div>

      </div>

    </div>
  )
}

export default Hero