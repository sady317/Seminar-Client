import { Link,  useNavigate } from "react-router";
import { toast } from "sonner";

function App() {

  const navigate=useNavigate()
  
  const handleAllData=(e)=>{
    e.preventDefault();
    const form=e.target
    const name=form.name.value
    const email=form.email.value
    const number=form.number.value
    const address=form.address.value
    console.log(name,email,number,address)
    
    const data={name,email,number,address}
    fetch("http://localhost:2703/seminar" ,{
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify(data)
    }).then((res)=>{
      console.log(res)
      if(res.status===200){
        toast.success("Registration Succesfull")
        navigate("/users")
      }
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
            required
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
            required
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
            required
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
            required
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
        <Link to={"/users"}><div className=" bg-red-500 my-2 text-center text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300">All Registration User</div></Link>
      </div>
    </div>
  );
}

export default App;
