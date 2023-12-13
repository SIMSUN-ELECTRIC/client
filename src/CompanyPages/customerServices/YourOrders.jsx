import React from 'react'

const YourOrders = () => {
    const orders = [
        {
          id: 1,
          date: '2023-10-01',
          items: ['Electronic Lift Parts', 'Escalator Parts'],
          total: 100,
        },
        {
          id: 2,
          date: '2023-09-25',
          items: ['Electronic Lift Parts', 'Escalator Parts', 'Escalator Parts'],
          total: 150,
        },
        {
          id: 3,
          date: '2023-09-15',
          items: ['Electronic Lift Parts', 'Electronic Lift Parts'],
          total: 80,
        },
        {
          id: 4,
          date: '2023-09-10',
          items: ['Electronic Lift Parts', 'Electronic Lift Parts', 'Escalator Parts'],
          total: 200,
        },
        {
          id: 5,
          date: '2023-09-05',
          items: ['Escalator Parts'],
          total: 50,
        },
        {
          id: 6,
          date: '2023-08-28',
          items: ['Escalator Parts', 'Electronic Lift Parts', 'Escalator Parts'],
          total: 175,
        },
        {
          id: 7,
          date: '2023-08-20',
          items: ['Electronic Lift Parts', 'Escalator Parts'],
          total: 90,
        },
        {
          id: 8,
          date: '2023-08-12',
          items: ['Electronic Lift Parts', 'Electronic Lift Parts', 'Electronic Lift Parts'],
          total: 220,
        },
        {
          id: 9,
          date: '2023-08-05',
          items: ['Escalator Parts', 'Escalator Parts'],
          total: 110,
        },
        {
          id: 10,
          date: '2023-07-30',
          items: ['Electronic Lift Parts', 'Escalator Parts', 'Electronic Lift Parts'],
          total: 250,
        },
      ];
      
      
  return (
    <>
        <div className="container mx-auto p-4">
  <h1 className="text-3xl font-semibold mb-4">Previous Orders</h1>
  <div className="bg-white rounded-lg shadow overflow-x-auto">
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-100">
        <tr>
          <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
            Order Date
          </th>
          <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
            Items
          </th>
          <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
            Total
          </th>
        </tr>
      </thead>
      <tbody className="bg-[#596c7f] divide-y divide-gray-200">
        {orders.map((order) => (
          <tr key={order.id}>
            <td className="px-4 sm:px-6 py-3 whitespace-nowrap">{order.date}</td>
            <td className="px-4 sm:px-6 py-3 whitespace-nowrap">
              {order.items.join(', ')}
            </td>
            <td className="px-4 sm:px-6 py-3 whitespace-nowrap">₹{order.total}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

    </>
  )
}

export default YourOrders
