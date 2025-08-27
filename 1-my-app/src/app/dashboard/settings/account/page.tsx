import React from 'react'

const AccountSettings = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-200 p-8">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-2xl p-8">
        <h1 className='text-gray-900 text-4xl font-extrabold mb-8 '>Account Settings</h1>

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Profile Information</h2>
          <div className="space-y-4">
            <div>
              <label className='block text-sm font-medium text-gray-600'>Name</label>
              <input type="text" defaultValue="Mounir Boukhiber" className='mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500' />
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-600'>Email</label>
              <input type="email" defaultValue="boukhiber09@gmail.com" className='mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500' />
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Security</h2>
          <div className="space-y-4">
            <div>
              <label className='block text-sm font-medium text-gray-600'>Password</label>
              <input type="password" placeholder='Enter new Password' className='mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500' />
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-600'>Confirm Password</label>
              <input type="password" placeholder='Confirm new Password' className='mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500' />
            </div>
          </div>
        </div>

        <div className="flex justify-end space-x-4">
          <button className="px-6 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">Cancel</button>
          <button className="px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">Save Changes</button>
        </div>

      </div>
    </div>
  )
}

export default AccountSettings
