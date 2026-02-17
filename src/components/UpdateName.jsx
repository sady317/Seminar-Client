import { useLoaderData, useNavigate } from 'react-router'
import { toast } from 'sonner';

function UpdateName() {
    const data =useLoaderData();
    console.log(data)
    const navigate=useNavigate()
    const handleUpdateName=(e)=>{
          e.preventDefault();
    const form=e.target
    const name=form.name.value
    console.log(name)

    fetch(`http://localhost:2703/seminar/${data._id}`,{
        method:"PATCH",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify({name})
    })
    .then(()=>{
       toast.success("Succesfully updated name")
       navigate("/users")
    })
    }
  return (
    <>
       <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
    onSubmit={handleUpdateName}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Update Name
        </h2>

        <input
          type="text"
          name='name'
         defaultValue={data.name}
          placeholder="Enter new name"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Update
        </button>
      </form>
    </div>
    </>
  )
}

export default UpdateName