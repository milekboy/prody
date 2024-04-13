import React from 'react'
import { Link } from 'react-router-dom'
import { FaEye } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { FaRegTrashAlt } from "react-icons/fa";
const recentOrderData = [
	{
		id: '1',
		productive_name: 'Benfendual Agro Limited',
		agent: 'Stephen',
		entity: 'Limited Liability Company',
		industry: 'Agriculture',
		current_order_status: 'PLACED',
		location: 'Lagos'
	},
	{
		id: '7',
		productive_name: 'Daily-Fresh Agro Limited',
		agent: 'David',
		entity: 'Limited Liability Company',
		industry: 'Agriculture',
		current_order_status: 'CONFIRMED',
		location: 'Ogun'
	},
	{
		id: '2',
		productive_name: 'Whinchark Agro Limited',
		agent: 'Emmanuel',
		entity: 'Limited Liability Company',
		industry: 'Agriculture',
		current_order_status: 'SHIPPED',
		location: 'Abuja'
	}
	
]

export default function UserList() {
	return (
		<div className="bg-white px-4 pt-3  rounded-sm border border-gray-200 flex-1 mt-4 pb-10">
			<strong className="text-gray-700 text-lg font-bold">List User</strong>
			<div className="border-x border-gray-200 rounded-sm mt-3">
				<table className="w-full text-gray-700">
					<thead>
						
						<tr className='bg-[#f8d467] h-12' >
							<th >Name of productive unit</th>
							<th>Entity</th>
							<th>Industry</th>
							<th>Location</th>
							<th>Agent</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody  >
						{recentOrderData.map((order) => (
							<tr className='h-14'  key={order.id}>
								
								<td className=' border'>
									<Link >{order.productive_name}</Link>
								</td>
								<td className='border'>
									<Link >{order.entity}</Link>
								</td>
								<td className='border'>{order.industry}</td>
								<td className='border'>{order.location}</td>
								<td className='border'>{order.agent}</td>
								<td className='flex gap-2 '><FaEye />
								<CiEdit />
								<FaRegTrashAlt />
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}