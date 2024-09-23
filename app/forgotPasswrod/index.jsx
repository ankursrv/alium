import React from 'react'
import LoginLeftSec from "@/components/ui/loginLeftSec";
import LoginRightSec from "@/components/ui/LoginRightSec";

// Social Button Link
const buttons = [
    { label: "Google", id: "google", icon: "../images/google.svg" },
    { label: "Facebook", id: "facebook", icon: "../images/facebook.svg" },
    { label: "Github", id: "github", icon: "../images/github.svg" },
];

const formInputField = [
    { id: 'email', label: 'Email', type: 'email', placeholder: 'Enter your email' },
];

// Define different buttons for this page
const formSubmitButton = [
    { text: 'Submit', type: 'button', variant: 'primary', id: 'signUp', className: 'w-full py-4 px-12 h-[56px] mt-8' },
];


const ForgotPassword = () => {
  return (
      <section className="forgotPassword">
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
                      heading='Forgot password?'
                      discription='Enter your details below to request an account password reset.'
                      showDevide={false}
                      inputFields={formInputField} // Pass the input fields dynamically
                      showForm={true}  // Form will be shown
                      formButtons={formSubmitButton} //Form Submit Button
                      showCheckbox={false}  // CheckBox & Forgot Password
                      socialLogInButtons={false}    // Social LogIn Button
                  />

              </div>
          </div>
      </section>
  )
}

export default ForgotPassword
