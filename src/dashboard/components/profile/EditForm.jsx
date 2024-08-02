import React from 'react';
import { useForm } from 'react-hook-form';
import Input from '../../../ui/form/Input';
import EmailInput from '../../../ui/form/EmailInput';
import PhoneInput from '../../../ui/form/PhoneInput';
import * as Icons from '../../../assets/icons';


export default function EditForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='grid md:grid-cols-2 mb-8 sm:grid-cols-1 custom-min:gap-8 lg:gap-0'>
                <Input
                    register={register}
                    errors={errors}
                    name="firstName"
                    text="First name is required"
                    placeholder="First Name"
                    className="w-full bg-ground-color"
                    classDiv="mr-3"
                    Icon={Icons.NameIcon}
                />
                <Input
                    register={register}
                    errors={errors}
                    name="lastName"
                    text="Last name is required"
                    placeholder="Last Name"
                    className="w-full bg-ground-color"
                    Icon={Icons.NameIcon}
                />
            </div>

            <EmailInput register={register} errors={errors} Icon={Icons.EmailIcon} className="mb-8" color="bg-ground-color" />
            <PhoneInput register={register} errors={errors} Icon={Icons.PhoneIcon} className="bg-ground-color" color="bg-ground-color" />

            <div className='grid md:grid-cols-2 lg:gap-0 mb-8 custom-min:grid-cols-1 custom-min:gap-8'>
                <Input
                    register={register}
                    errors={errors}
                    name="jobTitle"
                    text='Job title is required'
                    placeholder="Job Title"
                    className="w-full px-2 bg-ground-color"
                    classDiv="mr-3"
                    Icon={Icons.JobTitleIcon}
                />
                <Input
                    register={register}
                    errors={errors}
                    name="jobExp"
                    text='Job experience is required'
                    placeholder="Job Experience"
                    className="w-full px-2 bg-ground-color"
                    Icon={Icons.JobexpIcon}
                />
            </div>
            <div className='grid grid-cols-1 mb-8'>
                <Input
                    register={register}
                    errors={errors}
                    name="about"
                    text='About is required'
                    placeholder="About"
                    className="w-full bg-ground-color"
                    Icon={Icons.AboutIcon}
                />
            </div>
            <div className='grid grid-cols-1 mb-8'>
                <Input
                    register={register}
                    errors={errors}
                    name="cv"
                    text='cv is required'
                    type="file"
                    accept=".pdf,.docx"
                    className="w-full border-none bg-ground-color"
                    Icon={Icons.CvIcon}
                />
            </div>
        </form>
    );
}
