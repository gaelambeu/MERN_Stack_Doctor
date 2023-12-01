import React, { useState } from 'react'

const Login = () => {

  const [formData, setFormData] = useState({
    email:'',
    password:''
  })

  const handleInputChange = e => {
    setFormData({... formData, [e.target.name]: e.target.value})
  }

  return (
    <section className="px-5 lg:px-0">
      <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10">
        <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
          Hello! <span className="text-primaryColor">Welcome</span> Back
        </h3>

        <form action="" className="py-4 md:py-0">
          <div className="mb-5">
            <input 
              type="email" 
              placeholder="Enter your Email" 
              name="email" value={formData.email} 
              onChange={handleInputChange} 
              className=""
              required
            />
          </div>
        </form>
      </div>
    </section>
  )
}

export default Login