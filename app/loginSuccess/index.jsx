import React from 'react'
import LoginLeftSec from '@/components/ui/loginLeftSec'
import LoginRightSec from '@/components/ui/loginRightSec'

const formLogIn = [
  { text: 'Login', type: 'button', variant: 'primary', id: 'login', className: 'w-full py-4 px-12 h-[56px]' },
];

const LoginSuccess = () => {
  return (
    <section className='loginSuccess'>
      <div className="container mx-auto">
        <div className="flex xl:flex-row md:flex-row flex-col items-center gap-6 md:gap-0">
          {/* left  */}
          <LoginLeftSec
            title='Alium'
            heading='Start your journey with us..'
            discription='Lorem ipsum dolor sit amet consectetur. Neque sit at adipiscing massa et sem tempus. At non'
            image='../images/loginimg.svg'
          />

          {/* Right  */}
          <LoginRightSec
            heading='Done!'
            discription='If the information entered is associated with Alium account we have sent you an email with password reset instructions.'
            formButtons={formLogIn}  //Form LogIn Button
            showCheckbox={false}  // CheckBox & Forgot Password
            showDevide={false}    // Devide Line 
          />
        </div>
      </div>
    </section>
  )
}

export default LoginSuccess
