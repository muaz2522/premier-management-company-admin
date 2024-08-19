import Button from '../../../ui/Button'
import src from '../../../assets/images/img-avator.png'
import { NavLink } from "react-router-dom"
import { useState,useEffect } from 'react'
import { formatDate } from '../../../helpers'

function UserModal({ user,setIsModal }) {
    const createdAt = user.createdAt ? formatDate(user.createdAt) : "No date available";
    const updatedAt = user.createdAt ? formatDate(user.createdAt) : "No date available";


    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white w-full max-w-lg rounded-lg shadow-lg text-xl p-6">
                <div className="flex flex-col items-center">
                    <img
                        src={user.imageUrl ? user.imageUrl : src}
                        alt="User Avatar"
                        className="w-24 h-24 rounded-full object-cover mb-4"
                    />
                    <h2 className="text-xl font-semibold text-gray-800">{user.firstName} {user.lastName}</h2>
                </div>
                
                <div className="mt-6">
                    <div className="flex justify-between py-2">
                        <span className="font-semibold text-gray-600">Email:</span>
                        <span className="text-gray-800">{user.email}</span>
                    </div>
                    <div className="flex justify-between py-2">
                        <span className="font-semibold text-gray-600">Phone:</span>
                        <span className="text-gray-800">{user.phoneNo}</span>
                    </div>
                    <div className="flex justify-between py-2">
                        <span className="font-semibold text-gray-600">Job Title:</span>
                        <span className="text-gray-800">{user.jobTitle}</span>
                    </div>
                    <div className="flex justify-between py-2">
                        <span className="font-semibold text-gray-600">Experience:</span>
                        <span className="text-gray-800">{user.experience}+ years</span>
                    </div>
                    <div className="flex justify-between py-2">
                        <span className="font-semibold text-gray-600">Status:</span>
                        <span className="text-gray-800">{user.accountStatus}</span>
                    </div>
                    <div className="flex justify-between py-2">
                        <span className="font-semibold text-gray-600">Created At:</span>
                        <span className="text-gray-800">{createdAt}</span>
                    </div>
                    <div className="flex justify-between py-2">
                        <span className="font-semibold text-gray-600">Updated At:</span>
                        <span className="text-gray-800">{updatedAt}</span>
                    </div>
                    <div className="flex justify-between py-2">
                        <span className="font-semibold text-gray-600">Resume:</span>
                        <NavLink to={user.resumeUrl} target='_blank' className="text-blue-500 hover:underline">
                            View Resume
                        </NavLink>
                    </div>
                </div>
                <div className="mt-6 flex justify-center" onClick={()=>setIsModal(false)}>
                    <Button className="py-2 px-6 text-white bg-base-color rounded-3xl">
                        Close
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default UserModal;
