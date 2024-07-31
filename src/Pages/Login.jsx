import LoginForm from '../components/login';
import ButtonLink from '../ui/ButtonLink';


function Login() {
  return (
    <section style={{ backgroundColor: "var(--bg-base)" }} className='h-full'>
     <div className="custom-min:flex custom-min:flex-col md:flex-row custom-min:items-center items-center gap-20 px-20 md:w-4/5 lg:w-3/4 pt-20 mx-auto" style={{ backgroundColor: "var(--bg-base)" }}>
     <div className='md:w-[34rem] custom-min:w-[24rem]'>
          <h3 className='text-3xl font-semibold mb-4' style={{color:"var(--bg-main)"}}>Information about<br />  Premier Management Consultant</h3>
          <p className='mb-3 text-base leading-8' style={{color:"var(--color-main)"}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero sequi amet cupiditate, quis et beatae necessitatibus eos illum, labore alias inventore explicabo a doloribus architecto, fugit esse! Harum, enim error?
            Doloremque voluptas lorum ut aspernatur vitae quibusdam natus porro voluptatem facilis provident at! Vel sapiente nulla suscipit dolorum aliquid sis!</p>
          <ButtonLink link="/signup" text="Create Account" className="py-2 px-4" />
        </div>

        <div className="px-[16px] py-[20px] rounded bg-white custom-min:w-full custom-md:w-3/5 sm:w-3/5 md:w-3/4 lg:w-2/4">
          <h3 className='text-2xl font-semibold mb-1'>Login</h3>
          <p className='text-slate-400 mb-10'>Please Enter Your details</p>
          <LoginForm />
        </div>
      </div>
    </section>
  )
}

export default Login
