import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import { FC, useState } from "react";

interface TooltipProps {
  title: string;
  image: StaticImageData;
  bgColor?: string;
}

const Tooltip: FC<TooltipProps> = ({ title, image, bgColor }) => {
  const [active, setActive] = useState<boolean>(false)
    return (
    <div
      className={cn(
        "link relative bg-[#2d2c33] w-10 h-10 transform cursor-pointer grid place-items-center  ",
        "border border-border rounded-xl",
        "hover:scale-100 transition-all duration-200 "
      )}
      style={{ background: `$bgColor || "#2d2c33` }}
            onMouseEnter={() => setActive(true)}
            onMouseLeave={() => setActive(false)}
        >
          <div className="w-[27px] h-[27px]   ">
              <Image src={image} alt={title} className="w-full h-full overflow-clip object-contain" />
            </div>
            {/* title */}
            {
                active ? (
                      <div className="absolute -top-6 bg-black/[0.2] px-1.5 rounded-2xl backdrop-blur-[6px] transition-all duration-200 ">
                        <p className="font-pixel text-[10px] whitespace-nowrap ">
                            {title}
                    </p>
            </div>
                ) : null
          }
    </div>
  );
};
export default Tooltip;
