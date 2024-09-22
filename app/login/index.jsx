import React from "react";
import LoginLeftSec from "@/components/ui/loginLeftSec";
import LoginRightSec from "@/components/ui/LoginRightSec";

// Social Button Link
const buttons = [
    { label: "Google", id:"google", icon: "../images/google.svg" },
    { label: "Facebook", id: "facebook", icon: "../images/facebook.svg" },
    { label: "Github", id: "github", icon: "../images/github.svg" },
];

// Form Input Field 
const formInputField = [
    { id: 'email', label: 'Email', type: 'email', placeholder: 'Enter your email' },
    { id: 'password', label: 'Password', type: 'password', placeholder: 'Enter your password', }
];

// Define different buttons for this page
const formSignUP = [
    { text: 'Sign Up', type:'button', variant: 'primary', id:'signUp', className: 'w-full py-4 px-12 h-[56px] mt-8' },
];

const Login = () => {
    return (
        <section className="login">
            <div className="container mx-auto">
                <div className="flex items-center">
                    {/* left  */}
                    <LoginLeftSec 
                        title='Alium'
                        heading='Start your journey with us..'
                        discription='Lorem ipsum dolor sit amet consectetur. Neque sit at adipiscing massa et sem tempus. At non'
                        image='../images/loginimg.svg'
                    />
                    {/* right  */}
                    <LoginRightSec
                        heading='Log in'
                        discription='Welcome back! please enter your details'
                        haveAnAccount='Don’t have an account?'
                        signup='Sign up'
                        optionTxt='OR'
                        inputFields={formInputField} // Pass the input fields dynamically
                        showForm={true}  // Form will be shown
                        formButtons={formSignUP}    //Form SignUP Button
                        showCheckbox={true}     // CheckBox & Forgot Password
                        socialLogInButtons={true}    // Social LogIn Button
                    />
                   
                </div>
            </div>
        </section>
    );
};

export default Login;
