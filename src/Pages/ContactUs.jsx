import { useForm } from "react-hook-form";
import Input from '../ui/form/Input';
import EmailInput from '../ui/form/EmailInput';
import Button from '../ui/Button';
import * as Icons from '../assets/icons';

function ContactUs() {
    return (
        <section className="pt-8">
            <h2 className="text-4xl font-semibold text-center mb-8">Get in Touch</h2>
            <div className="flex md:justify-around md:flex-row custom-min:flex-col custom-min:gap-8 md:gap-0 items-center h-full sm:p-8 custom-min:p-16 bg-ground-color">
                <div>
                    <h3 className="text-xl font-semibold">Contact Us</h3>
                    <h1 className="md:text-6xl sm:text-4xl custom-min:text-3xl my-4">Have questions? <br /> Get in touch!</h1>
                    <div className="text-lg">
                        <div className="mb-2">
                            <span className="block text-base-color">+1 324 536 4676 85</span>
                        </div>
                        <div>
                            <span className="block text-base-color">Support@premier.com</span>
                        </div>
                    </div>
                </div>
                <div className="px-[20px] py-[30px] rounded bg-white">
                    <h3 className="text-2xl mb-4">Contact Form</h3>
                <ContactForm />
                </div>
            </div>
        </section>
    );
}

function ContactForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="mb-8">
            <Input
                register={register}
                errors={errors}
                name="Name"
                text="Name is required"
                placeholder="Name"
                className="w-full"
                classDiv="mb-8"
                Icon={Icons.NameIcon}
            />
            <EmailInput register={register} errors={errors} className="mb-8" Icon={Icons.EmailIcon} />

            <Input
                register={register}
                errors={errors}
                name="help"
                text="help is required"
                placeholder="How we can help you? Feel free to get in touch"
                className="w-full"
                classDiv="mb-8"
                Icon={Icons.EditIcon}
            />
            <div className='mb-8'>
                <div className='flex'>
                    <input type="checkbox" {...register("isAgree", { required: "Checkbox is required" })} />
                    <span className='ml-2'>I agree that my submitted data is being collected and stored.</span>
                </div>
                {errors.isAgree && <span className="text-red-500">{errors.isAgree.message}</span>}
            </div>
            <Button type="submit" className="py-2 px-4">Contact Us</Button>
        </form>
    );
}

export default ContactUs
