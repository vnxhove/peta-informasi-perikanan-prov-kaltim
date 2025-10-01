import React from "react";
import { useEffect, useState } from "react";
import { Table, TableBody, TableHeader } from "../../ui/table";
import API from "../../../api-server";

import { usePagination } from "../../../hooks/usePagination";
import SearchBar from "../../ui/table/SearchBar";
import PaginationControls from "../../ui/table/PaginationControl";
import TableHeaderKkprl from "../../ui/table/TableHeaderKkprl";
import TableRowKkprl from "../../ui/table/TableRowKkprl";

export default function Bantuan2025() {
  const [allData, setAllData] = useState([]);
  const [data, setData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const {
    currentPage,
    setCurrentPage,
    currentRows,
    totalPages,
    generatePageNumbers,
  } = usePagination(data, 50);

  // fetch data dari API
  useEffect(() => {
    API.get("/client")
      .then((res) => {
        setAllData(res.data);
        setData(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  // filter search
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
    setCurrentPage(1);
  }, [searchQuery, allData, setCurrentPage]);
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
      {/* SearchBar */}
      <div className="flex items-center gap-3 wfull py-4 px-4 w-full">
        <h2 className="text-gray-700 dark:text-gray-400 w-full">
          Penerima Bantuan Tahun 2025
        </h2>
        <SearchBar
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          onSearch={() => setSearchQuery(searchInput)}
        />
      </div>

      {/* Table */}
      <div className="max-w-full overflow-x-auto">
        <Table>
          <TableHeader className="border border-gray-100 dark:border-white/[0.05]">
            <TableHeaderKkprl />
          </TableHeader>
          <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
            {currentRows.map((row, i) => (
              <TableRowKkprl key={row._id} row={row} index={i} />
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="p-4 border-t border-gray-100 dark:border-gray-800 sm:p-6">
        <PaginationControls
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
          generatePageNumbers={generatePageNumbers}
        />
      </div>
    </div>
  );
}
