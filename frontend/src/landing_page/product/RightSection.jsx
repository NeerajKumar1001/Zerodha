import React from 'react'

const RightSection = ({ imageURL, productName, productDescription, learnMore }) => {
  return (
    <div className="container  mt-5">
      <div className="row ">
        <div className="col-5 p-5 mt-5">
          <h1 >{productName}</h1>
          <p>{productDescription}</p>
          <div>
            <a href={learnMore}  >Learn More</a>
          </div>
        </div>
        <div className="col-1"></div>
        <div className="col-6 ">
          <img src={imageURL} />
        </div>
      </div>
    </div>
  )
}

export default RightSection