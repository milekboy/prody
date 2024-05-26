import React from 'react'
import { Link } from 'react-router-dom'
// import { FaEye } from "react-icons/fa";
// import { CiEdit } from "react-icons/ci";
// import { FaRegTrashAlt } from "react-icons/fa";
const recentOrderData = [
	{
		id: '1',
		agent_name: 'Okorie Ifeanyi',
		agent: 'Stephen',
		category: 'Admin',
		industry: 'Agriculture',
		location: 'Lagos'
	},
	{
		id: '7',
	    agent_name: 'Desmond Lindsay',
		category: 'Admin',
		industry: 'Agriculture',
		location: 'Ogun'
	}
	
]

export default function AgentList() {
	return (
		<div className="bg-white px-4 pt-3  rounded-sm border border-gray-200 flex-1 mt-4 pb-10">
			<strong className="text-gray-700 text-lg font-bold">List User</strong>
			<div className="border-x border-gray-200 rounded-sm mt-3">
				<table className="w-full text-gray-700">
					<thead>
						
						<tr className='bg-[#f8d467] h-12' >
							<th >Name of Agent</th>
							<th>Category</th>
							<th>Industry</th>
							<th>Location</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody  >
						{recentOrderData.map((order) => (
							<tr className='h-14'  key={order.id}>
								
								<td className=' border'>
									<Link >{order.agent_name}</Link>
								</td>
								<td className='border'>
									<Link >{order.category}</Link>
								</td>
								<td className='border'>{order.industry}</td>
								<td className='border'>{order.location}</td>
								<td className='flex gap-2 '>
								{/* <CiEdit />
								<FaRegTrashAlt /> */}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}