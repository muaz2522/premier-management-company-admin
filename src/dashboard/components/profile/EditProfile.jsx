import Button from '../../../ui/Button'
import src from '../../../assets/images/dashboard/profile-img.png'
import EditForm from './EditForm'

function EditProfile() {
    return (
        <div className="bg-ground-color">
            <section className="p-8">
                <div className="grid grid-cols-[1fr_5fr] gap-8">
                    <div className='flex flex-col gap-4'>
                        <img src={src} alt="Image" />
                        <Button className="p-2">Upload</Button>
                        <Button className="p-2">Delete Account</Button>
                    </div>
                    <div className='bg-ground-color'>
                        <h1 className='text-3xl font-semibold py-4'>Edit Details</h1>
                        <EditForm />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default EditProfile
