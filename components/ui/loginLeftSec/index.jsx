import React from 'react'
import Image from 'next/image'

const LoginLeftSec = ({title,heading,discription,image}) => {
    return (
        <div className="bg-primary p-12 xl:max-w-[515px] rounded-2xl w-1/2 h-screen flex flex-col justify-between">
            <div>
                <small className="text-white font-extrabold text-xl pb-20 block">
                    {title}
                </small>
                <h1 className="text-white mb-6 max-w-[366px]">
                    {heading}
                    {/* Start your <br /> journey with us.. */}
                </h1>
                <p className="text-white max-w-[340px]">
                    {discription}
                    {/* Lorem ipsum dolor sit amet consectetur. Neque sit at adipiscing
                    massa et sem tempus. At non */}
                </p>
            </div>
            <div>
                <figure className="pt- 16">
                    <Image
                        src={image}
                        alt="login image"
                        width={405}
                        height={293}
                    />
                </figure>
            </div>
        </div>
    )
}

export default LoginLeftSec
