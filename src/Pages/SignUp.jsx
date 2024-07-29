import SignupForm from '../components/SignupForm';
import ButtonLink from '../ui/ButtonLink';


function SignUp() {
  return (
    <section style={{ backgroundColor: "var(--bg-base)" }} className='h-[calc(100vh-50px)]'>
      <div className="flex items-center gap-20 px-20 w-4/5 pt-20 mx-auto" style={{ backgroundColor: "var(--bg-base)" }}>
        <div className='w-[34rem]'>
          <h3 className='text-3xl font-semibold mb-4' style={{color:"var(--bg-main)"}}>Information about<br />  Premier Management Consultant</h3>
          <p className='mb-3 text-base leading-8' style={{color:"var(--color-main)"}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero sequi amet cupiditate, quis et beatae necessitatibus eos illum, labore alias inventore explicabo a doloribus architecto, fugit esse! Harum, enim error?
            Doloremque voluptas lorum ut aspernatur vitae quibusdam natus porro voluptatem facilis provident at! Vel sapiente nulla suscipit dolorum aliquid sis!</p>
          <ButtonLink link="/login" text="Have an account" className="py-2 px-4" />
        </div>

        <div className="px-[16px] py-[20px] rounded bg-white w-2/4">
          <h3 className='text-3xl font-semibold mb-1'>SignUp</h3>
          <p className='text-gray-400 mb-10'>Please Enter Your details</p>
          <SignupForm />
        </div>
      </div>
    </section>
  )
}

export default SignUp
