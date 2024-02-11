import { Billboard as BillboardType } from "@/app/types";

interface BillboardProps {
  data: BillboardType;
}

const Billboard: React.FC<BillboardProps> = ({ data }) => {
  
  return (
    <div className="p-4 rounded-md overflow-hidden">
      <div
<<<<<<< HEAD
        className="rounded-md relative  overflow-hidden bg-cover bg-center h-96 max-h-96 w-full"
=======
        className="rounded-md relative  overflow-hidden bg-cover h-96 max-h-96 w-full"
>>>>>>> origin/main
        style={{ backgroundImage: `url(${data.imageUrl})` }}
      >
        <div className="h-full w-full flex justify-end items-start p-8 opacity-90  ">
          <button className="font-bold  text-4xl text-right max-w-sm 
          uppercase text-gray-200 px-1 border-r-2  border-l-2 ">{data.label}</button>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
