import Button from '../../../ui/Button'
import src from '../../../assets/images/dashboard/profile-img.png'
import EditForm from './EditForm'

function EditProfile() {
    return (
        <div className="bg-ground-color">
            <section className="custom-min:p-8 md:p-4 lg:p-8">
                <div className="grid custom-min:grid-cols-1 sm:grid-cols-[1fr_5fr] md:grid-cols-1 lg:grid-cols-[1fr_5fr] gap-8">
                    <div className='flex custom-min:flex-row md:flex-row sm:flex-col custom-min:items-center lg:items-start lg:flex-col gap-4 md:gap lg:gap-4'>
                        <img src={src} alt="Image" className='custom-min:w-1/3 md:w-1/3 sm:w-full lg:w-full' />
                        <div className='flex flex-col gap-4'>
                        <Button className="p-2 w-32">Upload</Button>
                        <Button className="p-2 w-max">Delete Account</Button>
                        </div>
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
