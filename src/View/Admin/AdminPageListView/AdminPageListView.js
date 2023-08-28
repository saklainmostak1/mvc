import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { HiTrash, HiEye, HiPencilAlt } from "react-icons/hi";
// const AdminPageListModel = require('../../../Model/Admin/AdminPageListModel')


const AdminPageListView = () => {

    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(10)

   
    const { data: Admin_page_list_all = [], isLoading, refetch
    } = useQuery({
        queryKey: ['Admin_page_list_all'],
        queryFn: async () => {
            const res = await fetch()
            // const res = await router.get('/all-admin', AdminPageListModel.AdminPageListAll)
            // AdminPageListModel.AdminPageListAll
            console.log(res)
            const data = await res.json()
            return data
        }
    })

    console.log(Admin_page_list_all)

    const lastPostIndex = currentPage * postsPerPage
    const firstPosIndex = lastPostIndex - postsPerPage
    const allAdminsPageList = Admin_page_list_all?.slice(firstPosIndex, lastPostIndex)

    let totalPosts = Admin_page_list_all.length
    let pages = []

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pages.push(i)
    }

    const handleDelete = id => {
        const proceed = window.confirm('Are You Sure delete')
        console.log(id)
        if (proceed) {
            fetch(`http://localhost:5002/admin/all-admin/${id}`, {
                method: "DELETE",

            })
                .then(Response => Response.json())
                .then(data => {
                    refetch()
                    toast.success('Delete Successfully')
                    console.log(data)
                    // if (data.deletedCount > 0) {
                    // }

                })
        }
    }


    return (
        <div>

        <div className="bg-slate-100 container mx-auto px-5 lg:px-12 py-4">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">All admin</h1>
                <div className="flex justify-end">
                    <label

                        className="bg-[#ff8084] text-white px-6 py-2 lg:font-medium text-small lg:text-sm rounded-lg my-7 cursor-pointer "
                    >
                        <Link to="">Add New admin</Link>

                    </label>
                </div>
            </div>
            <div className="mt-8 bg-white p-7 rounded-xl">

                <div className="overflow-x-auto">
                    <table className="table">
                        <thead className="bg-white">
                            <tr className=''>
                                <th className="bg-white "></th>
                                <th className="bg-white">Name</th>
                                <th className="bg-white">controller name</th>

                                <th className="bg-white ">Options</th>
                            </tr>
                        </thead>
                        <tbody>
                            {

                                allAdminsPageList?.map((admin, i) =>

                                    <tr className=''>
                                        <td>
                                            {i + 1}
                                        </td>

                                        <td>

                                            <p className=" text-sm">
                                                {admin.display_name}
                                            </p>

                                        </td>

                                        <td>

                                            <p className=" text-sm">
                                                {admin.controller_name}
                                            </p>

                                        </td>
                                        <td className="">
                                            <div className="flex items-center ">
                                                <Link to={`/allHome/details/${admin.id}`}>

                                                    <label
                                                        className="w-8 h-8 bg-green-200 inline-block rounded-full text-center cursor-pointer group hover:bg-green-500 duration-300 mr-1"
                                                        htmlFor=""
                                                    >
                                                        <p className=' mt-2 ml-2 text-green-700 group-hover:text-white duration-300'>
                                                            <HiEye></HiEye>
                                                        </p>
                                                    </label>
                                                </Link>
                                                <Link to={`/dashboard/update/admins/${admin.id}`}>

                                                    <label
                                                        className="w-8 h-8 bg-blue-200 inline-block rounded-full text-center cursor-pointer group hover:bg-blue-500 duration-300 mr-1"
                                                        htmlFor=""
                                                    >
                                                        <p className=' mt-2 ml-2 text-blue-700 group-hover:text-white duration-300'>
                                                            <HiPencilAlt></HiPencilAlt>
                                                        </p>
                                                    </label>
                                                </Link>



                                                <button
                                                    onClick={() => handleDelete(admin.id)}
                                                >
                                                    <label
                                                        className="w-8 h-8 bg-red-200 inline-block rounded-full text-center cursor-pointer group hover:bg-red-500 duration-300 mr-1"
                                                        htmlFor=""
                                                    >
                                                        <p className=' mt-2 ml-2 text-red-500 group-hover:text-white duration-300'>
                                                            <HiTrash></HiTrash>
                                                        </p>
                                                    </label>
                                                </button>

                                            </div>
                                        </td>
                                    </tr>
                                )
                            }

                        </tbody>
                    </table>
                </div>
                <div className=" mt-5 paigination">
                    {
                        pages.map((page, index) =>
                            <button
                                key={index + 1}
                                onClick={() => setCurrentPage(page)}
                                className=
                                {page === currentPage ? 'active' : ''}
                            >{page}</button>
                        )
                    }

                </div>

            </div>
        </div>


    </div>
    );
};

export default AdminPageListView;