import React, { useEffect, useState } from "react";
import { BiLeftArrowAlt } from "react-icons/bi";
import { Link } from "react-router";
import { toast } from "sonner";

function ShowUser() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:2703/seminar")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const handleDelete = (user) => {
    console.log(user._id);

    // Delete with body
    // fetch("http://localhost:2701/delete",{
    //   method:"DELETE",
    //   headers:{
    //     "content-type":"application/json"
    //   },
    //   body:JSON.stringify({id:user._id})
    // })

    // Delete with params
    fetch(`http://localhost:2703/delete/${user._id}`, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    })
    .then((res)=>{
      if(res.status===200){
        toast.success("Deleted Succesfully")
        window.location.reload()
      }
    })
    
    
  };

  return (
  <div className="min-h-screen bg-gray-100 p-6">
  <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-8">
    <Link to={"/"} className="flex items-center text-2xl"><BiLeftArrowAlt/></Link>
    <h2 className="text-3xl font-bold text-gray-800 mb-8">
      Seminar Registrations
    </h2>

    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-200 rounded-xl overflow-hidden">
        <thead className="bg-gradient-to-r from-blue-600 to-blue-500 text-white">
          <tr>
            <th className="px-6 py-4 text-left text-sm font-semibold">#</th>
            <th className="px-6 py-4 text-left text-sm font-semibold">Name</th>
            <th className="px-6 py-4 text-left text-sm font-semibold">Email</th>
            <th className="px-6 py-4 text-left text-sm font-semibold">Phone</th>
            <th className="px-6 py-4 text-left text-sm font-semibold">Address</th>
            <th className="px-6 py-4 text-center text-sm font-semibold">
              Actions
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          {users.map((user, index) => (
            <tr
              key={user._id}
              className="hover:bg-blue-50 transition duration-200"
            >
              <td className="px-6 py-4 font-medium text-gray-700">
                {index + 1}
              </td>

              <td className="px-6 py-4 text-gray-800 font-semibold">
                {user.name}
              </td>

              <td className="px-6 py-4 text-blue-600">
                {user.email}
              </td>

              <td className="px-6 py-4 text-gray-700">
                {user.number}
              </td>

              <td className="px-6 py-4 text-gray-600">
                {user.address}
              </td>

              <td className="px-6 py-4">
                <div className="flex justify-center gap-4">
                  <button
                    onClick={() => handleDelete(user)}
                    className="text-red-500 hover:text-red-600 font-medium hover:underline"
                  >
                    Delete
                  </button>

               <Link to={`/user/${user._id}`} >
                  <div
                    className="text-blue-500 hover:text-blue-600 font-medium hover:underline"
                  >
                    Edit
                  </div>
               </Link>


                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {users.length === 0 && (
        <div className="text-center py-10">
          <p className="text-gray-500 text-lg">
            No registrations found
          </p>
        </div>
      )}
    </div>
  </div>
</div>

  );
}

export default ShowUser;
