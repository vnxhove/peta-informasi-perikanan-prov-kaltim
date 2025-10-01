import { Link } from "react-router-dom";
import API from "../../api-server";
import React, { useEffect, useState } from "react";
import PageMeta from "../../components/common/PageMeta";
import Maps from "../../components/map/Maps";
import FishTable from "../../components/tables/FishTable/FishTable";
import ComponentCard from "../../components/common/ComponentCard";
import Legend from "../../components/map/Legend";

export default function Home() {
  const [dataMaps, setDataMaps] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    API.get("/fish")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.error(err));
  }, []);
  const forkData = data.find((i) => i.title === dataMaps);

  return (
    <>
      <PageMeta
        title="React.js Ecommerce Dashboard | TailAdmin - React.js Admin Dashboard Template"
        description="This is React.js Ecommerce Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <div className="grid grid-cols-12 space-y-6 gap-4 md:gap-6">
        <div className="col-span-12 xl:col-span-7">
          <ComponentCard
            title="Peta Informasi Perikanan"
            className="text-gray-500 text-center max-w-full overflow-x-auto"
            desc={forkData ? dataMaps : "Provinsi Kalimantan Timur"}
          >
            <Maps dataMaps={setDataMaps} />
            <button>as</button>
          </ComponentCard>
        </div>

        <div className="col-span-12 xl:col-span-5 pb-6">
          <ComponentCard
            title={forkData ? dataMaps : "Provinsi Kalimantan Timur"}
            className="h-full overflow-x-auto"
            desc="Deskripsi"
          >
            <Legend />
          </ComponentCard>
        </div>

        {/* <div className="col-span-12">
          <StatisticsChart />
        </div>

        <div className="col-span-12 xl:col-span-5">
          <DemographicCard />
        </div>

        <div className="col-span-12 xl:col-span-7">
          <RecentOrders />
        </div> */}
      </div>
      <ComponentCard
        className="max-w-full overflow-x-auto"
        title="Total Produksi Perikanan"
        desc={forkData ? dataMaps : "Provinsi Kalimantan Timur"}
      >
        <FishTable
          dataMaps={dataMaps}
          setDataMaps={setDataMaps}
          fork={forkData}
          data={data}
        />
      </ComponentCard>
    </>
  );
}
