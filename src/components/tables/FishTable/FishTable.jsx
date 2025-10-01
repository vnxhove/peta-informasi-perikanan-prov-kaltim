import { useState, useEffect } from "react";
import API from "../../../api-server";

import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
} from "../../ui/table";
import FishComponent from "../../fish-component/FishComponent";
import FishCurrent from "../../fish-component/FishCurrent";

function groupFishData(fishArray) {
  const grouped = {};

  fishArray.forEach((item) => {
    const jenis = item["JenisIkan"];
    if (!grouped[jenis]) {
      grouped[jenis] = { JenisIkan: jenis, Volume: 0 };
    }
    grouped[jenis]["Volume"] += item["Volume"];
  });

  return Object.values(grouped);
}

export default function FishTable({ fork, data }) {
  if (!fork) {
    return <FishCurrent datas={data} />;
  }

  const groupedData = groupFishData(fork["fishData"]);

  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-5 md:gap-6">
        {groupedData.map((data, i) => (
          <FishComponent
            key={i}
            Fish={data["JenisIkan"]}
            Vol={data["Volume"]}
          />
        ))}
      </div>
    </>
  );
}
