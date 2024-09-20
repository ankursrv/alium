const Button = ({ label, icon, onClick, type, className='', variant = 'primary' }) => {
    // Apply different styles based on the variant prop
    const baseStyles = "flex items-center justify-center transition-all";

    const variants = {
        primary: "bg-primary text-white text-xl rounded-lg py-4 px-12 font-bold",
        secondary: "rounded-lg text-black font-medium border border-borderPrimary bg-white py-3 px-6 w-[149px] h-[48px]",
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${className}`}
            onClick={onClick}
            type={type}
        >
            {/* Icon if passed */}
            {icon && <span className="flex pr-3">{icon}</span>}
            {label}
        </button>
    );
};

export default Button;