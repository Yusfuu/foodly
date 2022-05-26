import Image from "next/image";
import { type } from "os";
import React, { FC, useEffect } from "react";
import HomeSlider from "../HomeSlider";
import { ProductComp } from "../Product";
import { ProductWithStar } from "../ProductWithStar";
import { useGetAllProductsQuery, Product } from "@/graphql/generated/graphql";
import { SkeletonProduct } from "../Skeleton";

export const HomeComp = ({}) => {
 

  return (
    <div className="mx-auto pt-32 container px-6 xl:px-0 py-12">
      
    </div>
  );
};

export default HomeComp;
