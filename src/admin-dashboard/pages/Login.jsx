import LoginForm from '../components/login'
import ButtonLink from '../../ui/ButtonLink'

function Login() {
  return (
    <section className='min-h-[calc(100vh-70px)] bg-ground-color pb-8'>
      <div className="custom-min:flex custom-min:flex-col md:flex-row custom-min:items-center items-center custom-min:gap-8 sm:gap-40 custom-min:px-8 md:w-4/5 lg:w-10/12 pt-20 mx-auto">
        <div className='md:w-[34rem]'>
          <h3 className='text-3xl font-semibold mb-4' style={{ color: "var(--bg-main)" }}>Information about<br />  Premier Management Consultant</h3>
          <p className='mb-3 text-lg leading-8' style={{ color: "var(--color-main)" }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero sequi amet cupiditate, quis et beatae necessitatibus eos illum, labore alias inventore explicabo a doloribus architecto, fugit esse! Harum, enim error?
            Doloremque voluptas lorum ut aspernatur vitae quibusdam natus porro voluptatem facilis provident at! Vel sapiente nulla suscipit dolorum aliquid sis!</p>
          <ButtonLink link="/signUp" text="Create Account" className="py-2 px-4" classLink="hover:text-footer-color text-white" />
        </div>

        <div className="px-8 py-12 rounded bg-white custom-min:w-full custom-md:w-3/5 sm:w-3/5 md:w-3/4 lg:w-2/4">
          <h3 className='text-2xl font-semibold text-base-color mb-1'>Sign In</h3>
          <p className='text-slate-400 text-lg mb-10'>Please Enter Your details</p>
          <LoginForm />
        </div>
      </div>
    </section>
  )
}

export default Login
