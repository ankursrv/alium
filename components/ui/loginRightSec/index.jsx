import React from 'react'
import Button from "@/components/ui/button";
import Image from "next/image";
import InputField from '../input';
import CheckBox from '../checkbox';

// Social Button Link
const socialLogInButton = [
    { text: "Google", id: "google", icon: "../images/google.svg" },
    { text: "Facebook", id: "facebook", icon: "../images/facebook.svg" },
    { text: "Github", id: "github", icon: "../images/github.svg" },
];

const LoginRightSec = ({ heading, discription, haveAnAccount, signup, optionTxt, inputFields = [], formButtons = [], showForm = true, showCheckbox = false, socialLogInButtons = false, showDevide=true }) => {
    return (
        <div className="md:px-[7rem] w-full md:w-1/2 mx-auto">
            {/* text  */}
            <div className="mb-12">
                <h2 className="text-black">{heading}</h2>
                <p className="text-xl leading-[30px] mt-3">
                    {discription}
                </p>
            </div>

            {/* form (conditionally rendered) */}
            {showForm && (
                <form>
                    <div>
                        {/* First and Last Name in the same row */}
                        <div className={`flex gap-5 ${inputFields.some(field => field.id === 'fullName' || field.id === 'organisationName') ? 'mb-5' : ''}`}>
                            {inputFields.filter(field => field.id === 'fullName' || field.id === 'organisationName').map((field) => (
                                <div className="w-1/2" key={field.id}>
                                    <InputField
                                        label={field.label}
                                        id={field.id}
                                        type={field.type}
                                        placeholder={field.placeholder}
                                        required={field.required}
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Other fields like Email and Password */}
                        {inputFields.filter(field => field.id !== 'fullName' && field.id !== 'organisationName').map((field) => (
                            <div className="mb-5 relative" key={field.id}>
                                <InputField
                                    label={field.label}
                                    id={field.id}
                                    type={field.type}
                                    placeholder={field.placeholder}
                                    required={field.required}
                                />
                                {/* eye icon for password-related fields */}
                                {['password', 'newPassword', 'confirmPassword'].includes(field.id) && (
                                    <Image
                                        className="absolute top-11 right-4 cursor-pointer"
                                        src="../images/eye-off.svg"
                                        alt="eye icon"
                                        width={20}
                                        height={20}
                                    />
                                )}
                            </div>
                        ))}
                        {/* Forgot Password  */}
                        {showCheckbox && (
                            <div className="flex items-center justify-between mb -8 mt-8">
                                <CheckBox size="sm" text="Remember for 30 days" />
                                <div>
                                    <a className="font-bold text-primary" href="#">
                                        Forgot password
                                    </a>
                                </div>
                            </div>
                        )}
                        {/* Buttons */}
                        {formButtons.map((button, index) => (
                            <Button
                                key={index}
                                variant={button.variant}
                                text={button.text}
                                onClick={button.onClick}
                                className={button.className}
                                id={button.id}
                                type={button.type}
                            />
                        ))}
                    </div>
                </form>
            )}
            {/* SignUp  */}
            <div className="flex flex-col gap-6 mt-6">
                {/* item-1  */}
                <div className="flex items-center justify-center">
                    <p className="font-medium text-gray-light mr-2">
                        {haveAnAccount}
                    </p>
                    <a href="#" className="font-bold text-primary">
                        {signup}
                    </a>
                </div>
                {/* OR Devide Section  */}
                {
                    showDevide && (
                        <div>
                            <p className="text-center font-bold text-black bg-white w-fit mx-auto px-8 relative z-20">
                                {optionTxt}
                            </p>
                            {/* line  */}
                            <div className="relative after:content-[''] after:absolute after:w-1/2 after:h-[2px] after:bg-[#E0E0E0] after:bottom-3  after:left-0 after:-z-10 before:content-[''] before:absolute before:w-1/2 before:h-[2px] before:bg-[#E0E0E0] before:bottom-3 before:right-0 before:-z-10"></div>
                        </div>
                    )
                }

                {/* Social Login Buttons  */}
                {socialLogInButtons &&
                    ( // Conditionally render social buttons
                        <div className="flex items-center justify-between">
                            {socialLogInButton.map((button) => (
                                <Button
                                    key={button.label} // Use a unique key for each button
                                    variant="secondary"
                                    text={button.text}
                                    icon={<Image src={button.icon} width={20} height={20} />}
                                />
                            ))}
                        </div>
                    )
                }

            </div>
        </div>
    )
}

export default LoginRightSec
