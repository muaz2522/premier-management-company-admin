import LoginForm from '../components/login'


function Login() {
  return (
    <section className='min-h-lvh bg-ground-color pb-8'>
      <div className="custom-min:flex custom-min:flex-col md:flex-row custom-min:items-center items-center custom-min:gap-8 sm:gap-40 custom-min:px-8 md:w-4/5 lg:w-10/12 pt-20 mx-auto">
        <div className='md:w-[34rem]'>
          <h3 className='text-3xl font-semibold mb-4' style={{ color: "var(--bg-main)" }}>Information about<br />  Premier Management Consultant</h3>
          <p className='mb-3 text-lg leading-8' style={{ color: "var(--color-main)" }}>We are a Saudi management consultancy helping organizations break barriers and achieve success.

          Our mission is to not leave anyone behind. With a dream of a prosperous Kingdom, PMC is bringing positive change across all communities.<br/> Give your people a better chance at success. Adapt to a forward-thinking approach where resilience, inclusion and sustainability define your enduring impact.</p>
         
          {/* <ButtonLink link="/signUp" text="Create Account" className="py-2 px-4" classLink="hover:text-footer-color text-white" /> */}
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
