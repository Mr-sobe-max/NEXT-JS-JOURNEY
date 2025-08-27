import Link from 'next/link'
import React from 'react'

const Users = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-200 p-8">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-2xl p-8">
        <h1 className='text-gray-800 text-4xl font-bold mb-6 '>Users</h1>
        <p className="text-lg text-gray-600 mb-8">
          Manage your users here. You can view detailed informations or browse a list of users
        </p>

        {/* User-related section */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          <Link 
            href="/dashboard/users/users-details"
            className='bg-teal-50 p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow'
          >
              <h2 className='text-xl font-semibold text-teal-800 mb-2'>Users Details</h2>
              <p className='text-gray-600'>View detailed information about each user in your system</p>
          </Link>
          <Link 
            href="/dashboard/users/users-list"
            className='bg-orange-50 p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow'
          >
              <h2 className='text-xl font-semibold text-orange-800 mb-2'>Users List</h2>
              <p className='text-gray-600'>Browser and manage all the users in the system</p>
          </Link>
        </div>


      </div>
    </div>
  )
}

export default Users
