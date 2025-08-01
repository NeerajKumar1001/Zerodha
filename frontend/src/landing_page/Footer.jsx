import React from 'react'

const Footer = () => {
  return (
    <div className='container-fluid border-top mt-5 pt-5' style={{ backgroundColor: "#f8f9fa", paddingLeft: "23rem", paddingRight: "23rem" }}>
      <div className="row">
        <div className="col">
          <img src="media/images/logo.svg" alt="" style={{ width: "55%" }} />
          <p className='mt-3'>&copy;2010 - 2025, Zerodha Broking Ltd. <br />
            All rights reserved. </p>
          <div className=' mt-3 '>
            <a className='text-muted' href="https://www.facebook.com/zerodhatrading" target="_blank" rel="noopener noreferrer"> <i class="fa-brands fa-facebook" style={{ width: "2rem", marginRight: "1rem" }}></i>
            </a>
            <a className='text-muted' href="https://X.com/zerodhaonline" target="_blank" rel="noopener noreferrer">
              <i class="fa-brands fa-twitter" style={{ width: "2rem", marginRight: "1rem" }}></i>
            </a>
            <a className='text-muted' href="https://www.instagram.com/zerodhaonline/" target="_blank" rel="noopener noreferrer">
              <i class="fa-brands fa-instagram" style={{ width: "2rem", marginRight: "1rem" }}></i>
            </a>
            <a className='text-muted' href="https://www.linkedin.com/company/zerodha/" target="_blank" rel="noopener noreferrer">
              <i class="fa-brands fa-linkedin" style={{ width: "2rem", marginRight: "1rem" }}></i>
            </a>
          </div>
        </div>

        <div className="col">
          <p className='fs-4'>Company</p>
          <a href="" className='fs-5 mb- text-muted' style={{ textDecoration: "none", color: "#007bff"}}>About</a><br />
          <a href="" className='fs-5 text-muted' style={{ textDecoration: "none", color: "#007bff", marginBottom: "0.5rem" }}>Products</a><br />
          <a href="" className='fs-5 text-muted' style={{ textDecoration: "none", color: "#007bff", marginBottom: "0.5rem" }}>Pricing</a><br />
          <a href="" className='fs-5 text-muted' style={{ textDecoration: "none", color: "#007bff", marginBottom: "0.5rem" }}>referral programme</a><br />
          <a href="" className='fs-5 text-muted' style={{ textDecoration: "none", color: "#007bff", marginBottom: "0.5rem" }}>Careers</a><br />
          <a href="" className='fs-5 text-muted' style={{ textDecoration: "none", color: "#007bff", marginBottom: "0.5rem" }}>Zerodha.etch</a><br />
          <a href="" className='fs-5 text-muted' style={{ textDecoration: "none", color: "#007bff"}}>Press & media</a><br />
          <a href="" className='fs-5 text-muted' style={{ textDecoration: "none", color: "#007bff"}}>Zerodha cares (CSR)</a>
        </div>
        <div className="col">
          <p className='fs-4'>Support</p>
          <a href="" className='fs-5 text-muted' style={{ textDecoration: "none", color: "#007bff" }}>Contact</a><br />
          <a href="" className='fs-5 text-muted' style={{ textDecoration: "none", color: "#007bff" }}>Support portal</a><br />
          <a href="" className='fs-5 text-muted' style={{ textDecoration: "none", color: "#007bff" }}>Z-connect blog</a><br />
          <a href="" className='fs-5 text-muted' style={{ textDecoration: "none", color: "#007bff" }}>List of charges</a><br />
          <a href="" className='fs-5 text-muted' style={{ textDecoration: "none", color: "#007bff" }}>Downloads & resources</a>
        </div>
        <div className="col">
          <p className='fs-4'>Account</p>
          <a href="" className='fs-5 text-muted' style={{ textDecoration: "none", color: "#007bff" }}>Open an account</a><br />
          <a href="" className='fs-5 text-muted' style={{ textDecoration: "none", color: "#007bff" }}>fund transfer</a><br />
          <a href="" className='fs-5 text-muted' style={{ textDecoration: "none", color: "#007bff" }}>60 day challenge</a>
        </div>
      </div>
      <div className='mt-5  text-muted ' style={{ fontSize: "0.8rem" }}>
        <p>Zerodha Broking Ltd.: Member of NSE, BSE & MCX  SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001  SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>
        <p>Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>
        <p><a href="">Smart Online Dispute Resolution | Grievances Redressal Mechanism</a></p>
        <p>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>
        <p>Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>
        <p>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.</p>
      </div>
      <div className='mb-4 d-flex justify-content-center flex-wrap'>
        <a href="" className='m-2 fs-6 text-muted' style={{textDecoration:"none"}}>NSE</a>
        <a href="" className='m-2 fs-6 text-muted' style={{textDecoration:"none"}}>BSE</a>
        <a href="" className='m-2 fs-6 text-muted' style={{textDecoration:"none"}}>Terms & conditions </a>
        <a href="" className='m-2 fs-6 text-muted' style={{textDecoration:"none"}}>Policies & procedures </a>
        <a href="" className='m-2 fs-6 text-muted' style={{textDecoration:"none"}}>Privacy policy </a>
        <a href="" className='m-2 fs-6 text-muted' style={{textDecoration:"none"}}>Disclosure </a>
        <a href="" className='m-2 fs-6 text-muted' style={{textDecoration:"none"}}>For investor's attention </a>
        <a href="" className='m-2 fs-6 text-muted' style={{textDecoration:"none"}}>Investor charter</a>
      </div>

    </div>
  )
}

export default Footer;