import { useState } from 'react'
import src from '../../../assets/images/img-avator.png'
import Button from '../../../ui/Button'
import UserModal from './userModal';

function UserList({ user }) {
    const [isModal, setIsModal] = useState(false);
    return (
        <>
            <div className="grid grid-cols-[1.5fr_1.5fr_2.5fr_1.2fr_1.2fr_1.2fr] text-xl bg-white px-2 py-3 border">
                <img src={user.imageUrl ? user.imageUrl : src} alt="user" className="w-12" />
                <div className='text-sm'>{user.firstName}</div>
                <div className='text-sm'>{user.email}</div>
                <div className='text-sm'>{user.jobTitle}</div>
                <div className='text-sm'>{user.experience}</div>
                <div onClick={()=>setIsModal(!isModal)}><Button className="px-4 py-2">View Detail</Button></div>
            </div>
            {isModal ? <UserModal user={user} setIsModal={setIsModal} /> : ""}
        </>
    )
}

export default UserList
