import React from 'react'

const LeftSection = ({ imageURL, productName, productDescription, tryDemo, learnMore, googleplay, appstore, }) => {
  return (
    <div className="container  mt-5">
      <div className="row mt-5">
        <div className="col-6  p-5">
          <img src={imageURL} />
        </div>
        <div className="col-1"></div>
        <div className="col-4 mt-5 p-5">
          <h1 className='mb-3'>{productName}</h1>
          <p>{productDescription}</p>
          <div>
            <a href={tryDemo}>Try Demo</a>
            <a href={learnMore} style={{ marginLeft: '70px' }} >Learn More</a>
          </div>
          <div className='mt-4' >
            <a  href={googleplay}><img src="media/images/googlePlayBadge.svg" alt="Google Play" /></a>
            <a style={{ marginLeft: '50px' }} href={appstore}><img src="media/images/appStoreBadge.svg" alt="App Store" /></a> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftSection ;