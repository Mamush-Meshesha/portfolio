import { FC, ReactNode } from "react";

interface TextAreaProps {
  icon?: ReactNode;
  placeholder?: string;
  name?: string;
}

const TextArea: FC<TextAreaProps> = ({ icon, placeholder, name,  }) => {
  return (
    <div className="relative w-full py-3" >
      {/* Icons */}

      <div className="absolute inset-y-0  start-0 flex items-center ps-3.5 py-4 pointer-events-none">
        {icon}
      </div>
      <textarea
        name={name}
        placeholder={placeholder}
        className="bg-primary-background w-full text-primary-foreground rounded-lg text-sm ps-10 p-2.5 pt-9 focus:outline-none"
      />
    </div>
  );
};

export default TextArea;
