import React from 'react'
import { useNavigate } from 'react-router-dom'

const Error = () => {
    const navigate = useNavigate()

  return (
    <div className='flex flex-col'>
        <h2 className='mx-auto'> 404 | Page Not Found</h2>
        <br/>
        <button onClick={()=>navigate('/')} className='mx-auto border-2 rounded-lg border-slate-800  p-2'>Go back to homepage</button>
    </div>
  )
}

export default Error