import PathData from "../../assets/map/Maps.json";
import ComponentCard from "../common/ComponentCard";
import { SvgMap, GroupsPath, Paths } from ".";
import { useState } from "react";

export default function Maps({ dataMaps }) {
  const width = 500;
  const height = 375;

  const [transform, setTransform] = useState("translate(0, 0) scale(1)");
  const [transisi, setTransition] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const [nameEnter, setNameEnter] = useState("Provinsi Kalimantan Timur");

  const focusOn = (event) => {
    const bounds = event.getBBox();
    const padding = 25;
    const x0 = bounds.x - padding;
    const x1 = bounds.x + bounds.width + padding;
    const y0 = bounds.y - padding;
    const y1 = bounds.y + bounds.height + padding;

    const scale = 1 / Math.max((x1 - x0) / width, (y1 - y0) / height);
    const translateX = width / 2 - (scale * (x0 + x1)) / 2;
    const translateY = height / 2 - (scale * (y0 + y1)) / 2;

    setTransform(`translate(${translateX},${translateY}) scale(${scale})`);
    setTransition(1 + scale * 10000);
  };

  const setReset = document.querySelectorAll(".path");
  const reset = (e) => {
    setTransform("translate(0, 0) scale(1)");
    setTransition(500);
    setSelectedId(null);
    dataMaps(false);
    setReset.forEach((a) => a.classList.remove("active"));
  };

  const handlePathClick = (e) => {
    e.stopPropagation(); // cegah onClick svg ikut terpanggil
    const id = e.currentTarget.id || e.currentTarget.dataset.id || null;

    // console.log(selectedId);
    setReset.forEach((a) => {
      if (id && id === selectedId) {
        // klik path yang sama -> kembali ke tampilan awal
        reset();
      } else {
        // fokus ke path yang baru di-klik
        // lebih dulu lakukan clearing active
        if (a.classList.contains("active")) {
          a.classList.remove("active");
        }
        // Kemudian Tambahakan Active
        e.currentTarget.classList.add("active");

        // setting state yang dibutuhkan
        setSelectedId(id);
        focusOn(e.currentTarget);
        dataMaps(id);
      }
    });
  };

  const handleSvgClick = () => {
    // klik di luar path -> reset
    reset();
  };

  const enterName = (e) => {
    setNameEnter(e.currentTarget.id);
  };
  return (
    <>
      <SvgMap
        id="Maps"
        className="rounded-2xl"
        viewBox="0 0 500 375"
        onClick={handleSvgClick}
      >
        <title>{nameEnter}</title>
        <GroupsPath
          className={`pointer-event-none transition-all duration-${transisi} ease-in-out`}
          transform={transform}
          style={{ transition: transisi }}
        >
          <GroupsPath
            className="group__path"
            transform="matrix(0.999751,0,0,0.999751,0,0)"
          >
            {PathData.map((c) => (
              <Paths
                className={`path fill-gray-200 dark:fill-gray-400 stroke-[0.25] stroke-gray-500 dark:stroke-gray-100 ${
                  selectedId === c.title
                    ? "fill-green-800 dark:fill-green-800"
                    : "hover:fill-yellow-500 dark:hover:fill-yellow-600"
                } hover:fill-yellow-500 dark:hover:fill-yellow-600 pointer-event-auto`}
                key={c.id}
                id={c.title}
                d={c.path}
                onClick={handlePathClick}
                onMouseEnter={enterName}
                onMouseOut={() => {
                  setNameEnter("Provinsi Kalimantan Timur");
                }}
              />
            ))}
          </GroupsPath>
        </GroupsPath>
      </SvgMap>
    </>
  );
}
