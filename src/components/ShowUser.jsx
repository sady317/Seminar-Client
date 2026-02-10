import React, { useEffect, useState } from "react";

function ShowUser() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:2701/seminar")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Seminar Registrations
        </h2>

        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-gradient-to-r from-blue-600 to-blue-500 text-white">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold">#</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Name</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Email</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">
                  Phone
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold">
                  Address
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {users.map((user, index) => (
                <tr
                  key={user._id}
                  className="hover:bg-blue-50 transition"
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
                </tr>
              ))}
            </tbody>
          </table>

          {users.length === 0 && (
            <p className="text-center text-gray-500 py-6">
              No registrations found
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ShowUser;
