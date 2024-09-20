import React from "react";
import Button from "@/components/ui/button";
import Image from "next/image";
import CheckBox from "@/components/ui/checkbox";
import InputField from "@/components/ui/input";
// Social Button Link
const buttons = [
    { label: "Google", icon: "../images/google.svg" },
    { label: "Facebook", icon: "../images/facebook.svg" },
    { label: "Github", icon: "../images/github.svg" },
];

// Inputs Filed
const inputFields = [
    {
        label: "Email",
        id: "email",
        type: "email",
        placeholder: "john.doe@company.com",
        required: true,
    },

    {
        label: "Password",
        id: "password",
        type: "password",
        placeholder: "Password@2024",
        required: true,
    },
];


const Login = () => {
    return (
        <section className="login">
            <div className="container mx-auto">
                <div className="flex items-center">
                    {/* left  */}
                    <div className="bg-primary p-12 xl:max-w-[515px] rounded-2xl w-1/2 h-screen flex flex-col justify-between">
                        <div>
                            <small className="text-white font-extrabold text-xl pb-20 block">
                                Alium
                            </small>
                            <h1 className="text-white mb-6">
                                Start your <br /> journey with us..
                            </h1>
                            <p className="text-white max-w-[340px]">
                                Lorem ipsum dolor sit amet consectetur. Neque sit at adipiscing
                                massa et sem tempus. At non
                            </p>
                        </div>
                        <div>
                            <figure className="pt- 16">
                                <Image
                                    src="../images/loginimg.svg"
                                    alt="login image"
                                    width={405}
                                    height={293}
                                />
                            </figure>
                        </div>
                    </div>
                    {/* right  */}
                    <div className="px-[6rem] w-1/2 mx-auto">
                        {/* text  */}
                        <div className="mb-12">
                            <h2 className="text-black">Log in</h2>
                            <p className="text-xl leading-[30px] mt-3">
                                Welcome back! please enter your details
                            </p>
                        </div>
                        {/* form  */}

                        <form>
                            <div className="">
                                {inputFields.map((inputItem) => (
                                    <div className="mb-5 relative">
                                        <InputField
                                            label={inputItem.label}
                                            id={inputItem.id}
                                            type={inputItem.type}
                                            placeholder={inputItem.placeholder}
                                            required="true"
                                        />
                                        {/* Only render the image if the input type is 'password' */}
                                        {inputItem.type === 'password' && (
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
                            </div>

                            {/* <div className="mb-8 relative">
                <label
                  for="password"
                  className="block mb-[6px] font-semibold text-black"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="bg-white border border-borderPrimary text-black text-base font-semibold rounded-lg block w-full py-3 px-4 dark:placeholder-gray-light placeholder:font-normal"
                  placeholder="Password"
                  required
                />
                <Image
                  className="absolute top-11 right-4"
                  src="../images/eye-off.svg"
                  alt="eye icon"
                  width={20}
                  height={20}
                />
              </div> */}
                            {/* forgot Password  */}
                            <div>
                                <div class="flex items-center justify-between mb-8">
                                    <CheckBox size="sm" text="Remember for 30 days" />
                                    <div>
                                        <a className="font-bold text-primary" href="#">
                                            Forgot password
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <Button label="Sign in" className="w-full h-[56px]" />
                        </form>
                        {/* SignUp  */}
                        <div className="flex flex-col gap-6 mt-6">
                            {/* item-1  */}
                            <div className="flex items-center justify-center">
                                <p className="font-medium text-gray-light mr-2">
                                    Don’t have an account?
                                </p>
                                <a href="#" className="font-bold text-primary">
                                    Sign up
                                </a>
                            </div>
                            {/* item-2  */}
                            <div>
                                <p className="text-center font-bold text-black bg-white w-fit mx-auto px-8 relative z-20">
                                    OR
                                </p>
                                {/* line  */}
                                <div className="relative after:content-[''] after:absolute after:w-1/2 after:h-[2px] after:bg-[#E0E0E0] after:bottom-3  after:left-0 after:-z-10 before:content-[''] before:absolute before:w-1/2 before:h-[2px] before:bg-[#E0E0E0] before:bottom-3 before:right-0 before:-z-10"></div>
                            </div>
                            {/* item-3  */}
                            <div className="flex items-center justify-between">
                                {/* Social Button Link  */}
                                {buttons.map((button) => (
                                    <Button
                                        key={button.label} // Use a unique key for each button
                                        variant="secondary"
                                        label={button.label}
                                        icon={<Image src={button.icon} width={20} height={20} />}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
