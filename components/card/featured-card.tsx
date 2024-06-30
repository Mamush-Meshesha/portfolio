"use client";
import { FC, ReactNode } from "react";
import Header from "./header";
import Video from "./video";

interface FeaturedCardProps {
  logo?: ReactNode;
  title: string;
  tag: string;
  video: string;
  credits?: string;
  active: boolean;
}

const FeaturedCard: FC<FeaturedCardProps> = ({
  logo,
  title,
  active,
  tag,
  video,
}) => {
  console.log(video);
  return (
    <div className="link w-full bg-secondary-background border border-border shadow-lg rounded-3xl cursor-pointer flex flex-col gap-2 flex-nowrap p-2 ">
      {/*  header */}
      <Header title={title} tag={tag} />
      {/* body */}
      <div className="relative flex float-none flex-nowrap p-6 w-full items-center justify-center h-[550px] border border-border rounded-3xl  ">
        {/* video */}
        <Video video={video} active={active} />
      </div>
    </div>
  );
};

export default FeaturedCard;
