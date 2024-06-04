import { cn } from "@/lib/utils";
import { FC, ReactNode } from "react";

interface CardProps {
  title?: string;
  children: ReactNode;
  className?: string;
}

const Card: FC<CardProps> = ({title, children, className }) => {
  return (
    <div
      className={cn(
        "relative bg-primary-background w-full h-fit rounded-2xl border border-border p-6 text-primary-foreground overflow-hidden",
        className
      )}
      >
          <div className="flex flex-col gap-y-6 w-full">
              
              {/*title*/}
              {title ? (
                  <div className="">
                      <p className="uppercase text-lg">{title}</p>
                      
                  </div>
              ) : null  }
              
              {/* childeren */}
        <div>
          {children}
               </div>
          </div>
    </div>
  );
};

export default Card
