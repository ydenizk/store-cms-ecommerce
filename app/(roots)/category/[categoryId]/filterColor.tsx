"use client";

import React from "react";
import { Color} from "@/app/types";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import qs from "query-string";
import { cn } from "@/lib/utils";

interface filterProps {
  data: Color [];
  name: string;
  valueKey: string;
}

const FilterColor: React.FC<filterProps> = ({ data, name, valueKey }) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const selectedValue = searchParams.get(valueKey);

  const onClick = (id: string) => {
    const current = qs.parse(searchParams.toString());

    const query = {
      ...current,
      [valueKey]: id,
    };

    if (current[valueKey] === id) {
      query[valueKey] = null;
    }
    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipNull: true }
    );
    router.push(url);
  };

  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold">{name}</h3>
      <hr className="my-4" />
      <div className="flex flex-wrap gap-2">
        {data.map((filter) => (
          <div key={filter.id} className="flex items-center">
            <button
              onClick={() => onClick(filter.id)}
              className={cn(
                "p-2  rounded-full  w-6 h-6 text-sm border-2 border-transparent ",
                selectedValue === filter.id && "border-gray-400  rounded"
              )}
              style={{ backgroundColor: filter.value }}
            >
        
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterColor;
