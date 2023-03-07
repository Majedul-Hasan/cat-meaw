import React from 'react'
import { Link } from 'react-router-dom'


const ErrorPage = () => {
  return (
    <React.Fragment>
        {/* <HeaderComponent /> */}
        <div className='flex items-center justify-center h-96 '>
            <Link to='/' className='bg-sky-400 px-6 py-3 font-semibold rounded-lg'>please go back</Link>
        </div>

    
    </React.Fragment>
  )
}

export default ErrorPage