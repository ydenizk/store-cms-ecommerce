<<<<<<< HEAD
import { Size } from "@/app/types";
import qs from "query-string";
const URL = `${process.env.NEXT_PUBLIC_API_URL}/sizes`;

interface Query {
  categoryId?: string;
}

const getSizes = async (query: Query): Promise<Size[]> => {
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      categoryId: query.categoryId,
    },
  });

  const res = await fetch(url);

  return res.json();
};

export default getSizes;
=======
 import { Size} from "@/app/types";
 const URL=`${process.env.NEXT_PUBLIC_API_URL}/sizes`


 const getSizes=async():Promise<Size[]>=>{

    const res=await fetch(URL)

    return res.json()
 }

 export default getSizes   
>>>>>>> origin/main
