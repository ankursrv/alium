import React from 'react'
import LoginLeftSec from '@/components/ui/loginLeftSec'
import LoginRightSec from '@/components/ui/loginRightSec'

const inputFields = [
  { id: 'fullName', label: 'Full Name', type: 'text', placeholder: 'Enter your full name' },
  { id: 'organisationName', label: 'Organisation Name', type: 'text', placeholder: 'Organisation Name' },
  { id: 'email', label: 'Email', type: 'email', placeholder: 'Enter your email' },
  { id: 'password', label: 'Password', type: 'password', placeholder: 'Enter your password' }
];

const loginButtons = [
  { text: 'Ragister', variant: 'primary',type:'button', className: 'w-full py-4 px-12 h-[56px] mt-8' },
];

const CreateAccount = () => {
  return (
    <section className="login">
      <div className="container mx-auto">
        <div className="flex xl:flex-row md:flex-row flex-col items-center gap-6 md:gap-0">
          {/* left  */}
          <LoginLeftSec
            title='Alium'
            heading='Start your journey with us..'
            discription='Lorem ipsum dolor sit amet consectetur. Neque sit at adipiscing massa et sem tempus. At non'
            image='../images/loginimg.svg'
          />
          {/* right  */}
          <LoginRightSec
            heading='Create An Account'
            discription='Register for a new membership'
            haveAnAccount='Already have an account?'
            signup='Sign in'
            // optionTxt='OR'
            showDevide={true}
            inputFields={inputFields} // Pass the input fields dynamically
            showForm={true}  // Form will be shown
            formButtons={loginButtons}  // Form Submit button
            showCheckbox={false}    // CheckBox & Forgot Password
            socialLogInButtons={true}  // Social LogIn Button
          />

        </div>
      </div>
    </section>
  )
}

export default CreateAccount
