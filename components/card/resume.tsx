import React from "react";
import Card from "../ui/card";
import Image from "next/image";
import segImage from "@/public/assets/segniture/signature.png";
import Button from "../ui/button";
import { FaDownload } from "react-icons/fa";
import Social from "../ui/social";

export default function ResumeCard() {
  return (
    <Card className="md:h-full">
      <p className="text-lg xl:text-2xl font-medium text-primary-foreground ">
        As a full-stack web developer, I excel in building modern web
        applications using a MERN (MongoDB, Express.js, React.js, Node.js) tech
        stack, coupled with Vue.js and Hasura. I possess a strong understanding
        of front-end development, back-end programming, and database management,
        allowing me to deliver efficient and high-quality solutions.
      </p>
      <div>
        <Image src={segImage} alt="segniture" />
      </div>
      {/* social */}
          <div className="flex items-center md:gap-7 justify-between md:absolute md:bottom-6 md:left-6 md:w-[100% ] ">
             <Social />
              <Button>
                  <FaDownload />
                  Resume
              </Button>
      </div>
    </Card>
  );
}
