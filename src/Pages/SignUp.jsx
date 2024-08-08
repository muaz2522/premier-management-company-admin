import SignUpForm from '../components/signup';
import ButtonLink from '../ui/ButtonLink';


function SignUp() {
  return (
    <section className='min-h-[calc(100vh-60px)] bg-ground-color'>
      <div className="custom-min:flex custom-min:flex-col md:flex-row  custom-min:gap-8 sm:gap-40 custom-min:px-12 md:w-4/5 lg:w-10/12 py-12 mx-auto">
        <div className='md:w-[34rem] pt-8'>
          <h3 className='text-3xl font-semibold mb-4' style={{ color: "var(--bg-main)" }}>Information about<br />  Premier Management Consultant</h3>
          <p className='mb-3 text-lg leading-8' style={{ color: "var(--color-main)" }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero sequi amet cupiditate, quis et beatae necessitatibus eos illum, labore alias inventore explicabo a doloribus architecto, fugit esse! Harum, enim error?
            Doloremque voluptas lorum ut aspernatur vitae quibusdam natus porro voluptatem facilis provident at! Vel sapiente nulla suscipit dolorum aliquid sis!</p>
          <ButtonLink link="/login" text="Have an account" className="py-2 px-4" classLink="hover:text-footer-color text-white" />
        </div>
        <div className="custom-min:px-[12px] sm:px-[16px] py-[20px] rounded bg-white custom-min:min-w sm:w-3/5 md:w-3/4 lg:w-2/4">
          <h3 className='text-3xl font-semibold text-base-color mb-1'>Sign Up</h3>
          <p className='text-gray-400 mb-10 text-lg'>Please Enter Your details</p>
          <SignUpForm />
        </div>
      </div>
    </section>
  )
}

export default SignUp
