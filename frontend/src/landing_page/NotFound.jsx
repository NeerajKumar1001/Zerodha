import React from 'react'
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='container p-5 mt-5'>
      <div className='row text-center'>
        <h1 className='mt-5'>404 Not Found</h1>
        <p className='fs-5'>Sorry,The page you are looking for does not exist.</p>
        <Link to="/"><button className='p-2 btn btn-primary fs-5 mb-5 mt-3' style={{width:"20%" , margin:"0 auto"}}>Go Home </button></Link>
      </div>
    </div>
  )
}

export default NotFound;