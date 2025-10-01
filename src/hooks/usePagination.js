import { useState } from "react";

export function usePagination(data, rowsPerPage = 50) {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);
  const totalPages = Math.ceil(data.length / rowsPerPage);

  const generatePageNumbers = () => {
    const pages = [];
    if (currentPage > 3) pages.push(1, "...");
    for (let i = currentPage - 2; i <= currentPage + 2; i++) {
      if (i > 0 && i <= totalPages) pages.push(i);
    }
    if (currentPage < totalPages - 2) pages.push("...", totalPages);
    return pages;
  };

  return {
    currentPage,
    setCurrentPage,
    currentRows,
    totalPages,
    generatePageNumbers,
  };
}
