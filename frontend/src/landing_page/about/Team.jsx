import React from 'react'

const Team = () => {
    return (
        <div className="container">
            <div className="row p-5 mt-5  border-top ">
                <h1 className='fs-2 text-center '>People</h1>
            </div>
            <div className="row p-5  ">
                <div className="col-1"></div>
                <div className="col-5 text-center fs-5">
                    <img src="media/images/nithinKamath.jpg" style={{ borderRadius: "100%", width: "65%" }} alt="" />
                    <h4 className='mt-3'>Nithin Kamath</h4>
                    <h5>founder & CEO</h5>
                </div>
                {/* <div className="col-1"></div> */}
                <div className="col-6 mt-4 fs-5">
                    Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry. <br /> <br />
                    He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC). <br /> <br />     
                </div>
                <div className="col-1"></div>
            </div>

        </div>
    )
}

export default Team