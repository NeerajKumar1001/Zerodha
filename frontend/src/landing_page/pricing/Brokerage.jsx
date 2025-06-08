import React from 'react'

const Brokerage = () => {
  return (
    <div className="container ">
      <div className="row mt-5">
        <h1 className='fs-4 , mb-4'>Charges for account opening</h1>
        <table className='table border'>
          <thead>
            <tr>
              <th>Type</th>
              <th>Charges</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Online account</td>
              <td>Free</td>
            </tr>
            <tr>
              <td>Offline account</td>
              <td>₹ 300</td>
            </tr>
            <tr>
              <td>NRI account (offline only)</td>
              <td>	₹ 500</td>
            </tr>
            <tr>
              <td>Partnership, LLP, HUF, or Corporate accounts (offline only)</td>
              <td>₹ 500</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Brokerage