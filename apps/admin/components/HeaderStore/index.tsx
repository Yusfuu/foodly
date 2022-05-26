
import React,{FC} from "react";

type Props = {
    store: string;
}

export const HeaderStore:FC<Props> = ({store}) => {
  return (
    <div className="p-5 border-black my-4 border-4 border-dashed rounded-md">
      <div className="w-full">
        <h3 className="text-2xl font-black uppercase">{store}</h3>
        <div className="flex justify-between  items-center p-2 w-[800px] h-fit"></div>
      </div>
    </div>
  );
};
