import React from "react";
import Heading from "@/components/heading/heading";
import { featuredData } from "@/data";
import FeaturedCard from "@/components/card/featured-card";
import ExpandableFeatured from "@/components/expandables/expendable-featured";

const MainFeatured = featuredData[0];

function FeaturedSection() {
  console.log(MainFeatured.video);
  return (
    <div className="p-24 px-3 lg:px-8  ">
      {/* header */}
      <Heading number="21" title_1="featured" title_2="work" />
      {/* main featured card  */}
      <FeaturedCard
        active
        title={MainFeatured.title}
        tag={MainFeatured.tag}
        video={MainFeatured.video}
      />
      <div className="mt-24">
        <ExpandableFeatured />
      </div>
    </div>
  );
}

export default FeaturedSection;
