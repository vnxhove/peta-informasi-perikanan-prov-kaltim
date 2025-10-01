import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../ui/table";
import API from "../../../api-server";
import {
  InputPagin,
  InputSearch,
  OptionPagin,
  Pagination,
  SelectPagin,
} from "../../ui/table/Pagination";
import {
  ChevronDownIcon,
  AngleLeftIcon,
  AngleRightIcon,
  Search,
} from "../../icons";

export default function TableKkprl() {
  const [allData, setAllData] = useState([]);
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchInput, setSearchInput] = useState("");

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);

  // Perhitungan total Halaman
  const totalPages = Math.ceil(data.length / rowsPerPage);
  const generatePageNumbers = () => {
    const totalPages = Math.ceil(data.length / rowsPerPage);
    const pages = [];

    // Selalu tampilkan halaman pertama
    if (currentPage > 3) {
      pages.push(1, "...");
    }

    // Halaman sekitar currentPage
    for (let i = currentPage - 2; i <= currentPage + 2; i++) {
      if (i > 0 && i <= totalPages) {
        pages.push(i);
      }
    }

    // Selalu tampilkan halaman terakhir
    if (currentPage < totalPages - 2) {
      pages.push("...", totalPages);
    }

    return pages;
  };

  // ambil data dari backend
  useEffect(() => {
    API.get("/geodb")
      .then((res) => {
        setAllData(res.data);
        setData(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  // Search Data Ketika Input diketik
  useEffect(() => {
    if (!searchQuery) {
      setData(allData);
    } else {
      const filtered = allData.filter((row) =>
        Object.values(row)
          .join(" ")
          .toLowerCase()
          .includes(searchQuery.toLowerCase())
      );
      setData(filtered);
    }
    setCurrentPage(1); // reset ke halaman 1 setiap kali search
  }, [searchQuery, allData]);

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
      {/* atas header select */}
      <Pagination>
        <div className="flex items-center gap-3">
          <span className="text-gray-500 dark:text-gray-400"> Show </span>
          <div className="relative z-20 bg-transparent">
            <SelectPagin
              onChange={(e) => {
                setRowsPerPage(e.target.value);
                setCurrentPage(1);
              }}
            >
              <OptionPagin text="10" value={10} />
              <OptionPagin text="50" value={50} />
              <OptionPagin text="100" value={100} />
            </SelectPagin>
            <span className="absolute z-30 text-gray-500 -translate-y-1/2 right-2 top-1/2 dark:text-gray-400">
              <ChevronDownIcon className="stroke-current size-3" />
            </span>
          </div>
          <span className="text-gray-500 dark:text-gray-400"> entries </span>
        </div>
        <InputPagin>
          <InputSearch
            placeholder="Cari Disini..."
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent py-2.5 pl-11 pr-4 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800 xl:w-[300px]"
          />
          <button
            onClick={() => setSearchQuery(searchInput)}
            className="absolute text-gray-500 -translate-y-1/2 left-4 top-1/2 dark:text-gray-400"
          >
            <Search className="size-5 fill-current" />
          </button>
        </InputPagin>
      </Pagination>

      <div className="max-w-full overflow-x-auto">
        <Table>
          {/* Table Header */}
          <TableHeader className="border border-gray-100 dark:border-white/[0.05]">
            <TableRow>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                No.
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                No. Kusuka
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                NAMA PENGELOLA
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                KAB/KOTA
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                IKAN UTAMA
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                IKAN TAMBAHAN
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                LUAS LAHAN
              </TableCell>
            </TableRow>
          </TableHeader>

          {/* Table Body */}
          <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
            {currentRows.map((row, index) => (
              <TableRow key={row._id}>
                <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                  {indexOfFirstRow + index + 1}
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                  {row.NoKusuka}
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                  {row.Nama}
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                  {row.KabKotaSARPRAS}
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                  {row.IkanUtama}
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                  {row.IkanTambahan}
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                  {row.LuasLahanDigunakan}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* bawah header ganti nomor */}
      <div className="border border-t-0 rounded-b-xl border-gray-100 py-4 pl-[18px] pr-4 dark:border-white/[0.05]">
        <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between">
          <div className="flex items-center justify-center gap-4 xl:justify-end">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="flex h-10 items-center gap-2 rounded-lg border border-gray-300 bg-white p-2 sm:p-2.5 text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <AngleLeftIcon className="size-5 stroke-current" />
            </button>
            <ul className="flex items-center gap-1">
              {generatePageNumbers().map((page, idx) =>
                page === "..." ? (
                  <span key={idx} className="px-4 py-2 text-white">
                    ...
                  </span>
                ) : (
                  <button
                    key={idx}
                    onClick={() => setCurrentPage(page)}
                    className={`px-4 py-2 rounded flex w-10 items-center justify-center h-10 rounded-lg text-sm font-medium hover:bg-blue-500/[0.08] hover:text-brand-500 dark:hover:text-brand-500 ${
                      currentPage === page
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200"
                    }`}
                  >
                    {page}
                  </button>
                )
              )}
            </ul>
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="flex h-10 items-center gap-2 rounded-lg border border-gray-300 bg-white p-2 sm:p-2.5 text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <AngleRightIcon className="size-5 stroke-current" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
