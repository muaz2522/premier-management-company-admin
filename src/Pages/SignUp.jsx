import SignUpForm from '@/components/signup';
import ButtonLink from '@/ui/ButtonLink';


function SignUp() {
  return (
    <section className='min-h-lvh bg-ground-color'>
      <div className="custom-min:flex custom-min:flex-col md:flex-row custom-min:items-center items-center gap-20 px-20 md:w-4/5 lg:w-3/4 pt-20 mx-auto">
        <div className='md:w-[34rem] custom-min:w-[24rem]'>
          <h3 className='text-3xl font-semibold mb-4' style={{ color: "var(--bg-main)" }}>Information about<br />  Premier Management Consultant</h3>
          <p className='mb-3 text-base leading-8' style={{ color: "var(--color-main)" }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero sequi amet cupiditate, quis et beatae necessitatibus eos illum, labore alias inventore explicabo a doloribus architecto, fugit esse! Harum, enim error?
            Doloremque voluptas lorum ut aspernatur vitae quibusdam natus porro voluptatem facilis provident at! Vel sapiente nulla suscipit dolorum aliquid sis!</p>
          <ButtonLink link="/login" text="Have an account" className="py-2 px-4" />
        </div>

        <div className="px-[16px] py-[20px] rounded bg-white custom-min:min-w sm:w-3/5 md:w-3/4 lg:w-2/4">
          <h3 className='text-3xl font-semibold mb-1'>SignUp</h3>
          <p className='text-gray-400 mb-10'>Please Enter Your details</p>
          <SignUpForm />
        </div>
      </div>
    </section>
  )
}

export default SignUp
