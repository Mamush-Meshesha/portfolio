import { FC, ReactNode } from "react";

interface InputProps {
  icon?: ReactNode;
  placeholder?: string;
  className?: string;
  type?: string;
}

const Input: FC<InputProps> = ({ icon, placeholder, className, type }) => {
  return (
    <div className="relative w-full py-3" >
      {/* Icons */}

      <div className="absolute inset-y-0  start-0 flex items-center ps-3.5 py-4 pointer-events-none">
        {icon}
      </div>
      <input
        type={type}
        placeholder={placeholder}
        className="bg-primary-background text-primary-foreground rounded-lg text-sm ps-10 px-2 py-4 focus:outline-none"
      />
    </div>
  );
};

export default Input;
