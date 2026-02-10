import toast from "daisyui/components/toast";
import React from "react";

function App() {
  const handleAllData=(e)=>{
    e.preventDefault();
    const form=e.target
    const name=form.name.value
    const email=form.email.value
    const number=form.number.value
    const address=form.address.value
    console.log(name,email,number,address)
    
    const data={name,email,number,address}
    fetch("http://localhost:2701/seminar" ,{
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify(data)
    })
    
  }
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
        
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
          Seminar Registration
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Please fill in your details
        </p>

        <form onSubmit={handleAllData} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
            name="name"
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
            name="email"
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
            name="number"
              type="tel"
              placeholder="Enter your number"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Address
            </label>
            <textarea
            name="address"
              rows="3"
              placeholder="Enter your address"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300"
          >
            Register Now
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
