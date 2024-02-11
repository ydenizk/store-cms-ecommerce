"use client";

import React from "react";
import { Color, Size } from "@/app/types";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import qs from "query-string";
import { cn } from "@/lib/utils";

interface FilterProps {
  data: (Size | Color)[];
  name: string;
  valueKey: string;
}

const Filter: React.FC<FilterProps> = ({ data, name, valueKey }) => {
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
        {data.length === 0 && <p className="text-sm w-full font-light ">No {name} available!</p>}
        {data?.map((filter) => (
          <div key={filter.id} className="flex items-center">
            <button
              onClick={() => onClick(filter.id)}
              className={cn(
                "p-2 bg-white rounded text-black text-sm border border-indigo-700",
                selectedValue === filter.id && "bg-black text-white"
              )}
            >
              {filter.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
