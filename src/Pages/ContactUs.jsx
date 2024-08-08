import { useForm } from "react-hook-form";
import Input from '../ui/form/Input';
import EmailInput from '../ui/form/EmailInput';
import Button from '../ui/Button';
import * as Icons from '../assets/icons';

function ContactUs() {
    return (
        <section className="pt-8">
            <h2 className="text-4xl font-semibold text-center mb-12">Get in Touch</h2>
            <div className="flex md:justify-between md:flex-row custom-min:flex-col custom-min:gap-8 md:gap-0 items-center h-full sm:py-8 sm:px-32 custom-min:py-16 custom-min:px-8 bg-ground-color">
                <div>
                    <h3 className="text-xl text-base-color font-semibold">CONTACT US</h3>
                    <h1 style={{lineHeight:"1.3"}} className="md:text-5xl sm:text-4xl font-semibold custom-min:text-3xl my-4">Have questions? <br /> Get in touch!</h1>
                    <div className="text-lg">
                        <div className="mb-2">
                            <span className="block font-normal text-lg text-base-color">+1(324 536 4676 85)</span>
                        </div>
                        <div>
                            <span className="block font-normal text-lg text-base-color">Support@premier.com</span>
                        </div>
                    </div>
                </div>
                <div className="px-[20px] py-[30px] rounded bg-white">
                    <h3 className="text-2xl font-semibold mb-4">Contact Form</h3>
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
                Icon={Icons.NameIcon}
            />
            <EmailInput register={register} errors={errors} className="my-8" Icon={Icons.EmailIcon} />

            <Input
                register={register}
                errors={errors}
                name="help"
                text="help is required"
                placeholder="How we can help you? Feel free to get in touch"
                className="w-full"
                Icon={Icons.EditIcon}
            />
            <div className='my-8'>
                <div className='flex'>
                    <input type="checkbox" {...register("isAgree", { required: "Checkbox is required" })} />
                    <span className='ml-2 text-lg text-dashboard-para'>I agree that my submitted data is being collected and stored.</span>
                </div>
                {errors.isAgree && <span className="text-red-500">{errors.isAgree.message}</span>}
            </div>
            <Button type="submit" className="py-2 px-4">Get in Touch</Button>
        </form>
    );
}

export default ContactUs
