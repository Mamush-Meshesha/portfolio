import { FC } from "react";

interface selectInputProps {
    type: "checkbox" | "radio";
    id: string;
    text: string;
    selectedOptions: string[]
    setselectedOptions: (newValue: string[]) => void
    allowedMultiple? : boolean
}

const SelectInput: FC<selectInputProps> = ({id, selectedOptions,setselectedOptions,text,type,allowedMultiple}) => {
    const handleOptionChange = (option: string) => {
        if (allowedMultiple) {
            const currentIndex = selectedOptions.indexOf(option)
            const newSelectedOptions = [...selectedOptions]

            if (currentIndex === -1) {
                newSelectedOptions.push(option)
            } else {
                newSelectedOptions.splice(currentIndex,1)
            }
            setselectedOptions(newSelectedOptions)
        } else {
            const newSelectedOptions = [option]
            setselectedOptions(newSelectedOptions)
        }
    } 
    return (
        <div className="flex items-center gap-x-2">
            <input
                type={type}
                id={id}
                checked={selectedOptions.includes(id)}
                onChange={() => handleOptionChange(id)}
            className="w-[15px] h-[15px] !rounded-xl !bg-transparent "
            />
            <label htmlFor={id}>
                {text}
            </label>
        </div>
    )
}

export default SelectInput