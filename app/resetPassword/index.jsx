import React from 'react'
import LoginLeftSec from '@/components/ui/loginLeftSec'
import LoginRightSec from '@/components/ui/loginRightSec'

// Form Input Field 
const formInputField = [
    { id: 'newPassword', label: 'New Password', type: 'Password', placeholder: 'Enter New Password', required:true },
    { id: 'confirmPassword', label: 'Confirm Password', type: 'password', placeholder: 'Confirm Password', required: true }
];

// Define different buttons for this page
const formSubmitButton = [
    { text: 'Submit', type: 'button', variant: 'primary', id: 'submit', className: 'w-full py-4 px-12 h-[56px] mt-8' },
];

const ResetPassword = () => {
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
                      heading='Reset password'
                      discription='Enter your password to reset your account password.'
                      inputFields={formInputField} // Pass the input fields dynamically
                      formButtons={formSubmitButton}      //Form Submit Button
                      showDevide={false}         // Devide Line 
                  />

              </div>
          </div>
      </section>
  )
}

export default ResetPassword
