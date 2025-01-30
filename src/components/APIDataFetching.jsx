import React, { useState, useEffect } from "react";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        const data = await response.json();
        setUsers(data.slice(0, 6)); // Fetching only 6 users
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <p className="text-center text-gray-500">Loading users...</p>;
  if (error) return <p className="text-center text-red-400">Error: {error}</p>;

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-300 via-pink-400 to-red-400 py-12">
      <div className="max-w-6xl mx-auto p-6 bg-white rounded-2xl shadow-xl">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-8">
          User List
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {users.map((user, index) => (
            <div
              key={user.id}
              className="bg-white shadow-lg rounded-3xl p-6 border border-gray-200 transform transition-transform hover:scale-105 hover:shadow-2xl"
            >
              <div className="flex items-center justify-center mb-4">
                <img
                  // Custom images for each user
                  src={`https://i.pravatar.cc/150?img=${index + 1}`}  // Use a different image for each user
                  alt="user-avatar"
                  className="w-20 h-20 rounded-full border-4 border-indigo-400 shadow-md"
                />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">{user.name}</h3>
              <p className="text-gray-600"><strong>Email:</strong> {user.email}</p>
              <p className="text-gray-600"><strong>Phone:</strong> {user.phone}</p>
              <p className="text-gray-600"><strong>City:</strong> {user.address.city}</p>
              <p className="text-gray-600"><strong>Company:</strong> {user.company.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserList;
