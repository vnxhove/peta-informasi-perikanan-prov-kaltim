import { ArrowLeftIcon, ArrowRightIcon } from "../../icons";

export default function PaginationControls({
  currentPage,
  totalPages,
  setCurrentPage,
  generatePageNumbers,
}) {
  return (
    <div className="flex items-center justify-between gap-8 px-6 py-4 sm:justify-normal">
      <button
        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        disabled={currentPage === 1}
        className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200 sm:px-3.5 sm:py-2.5"
      >
        <ArrowLeftIcon className="size-5 fill-current" />
        <span className="hidden sm:inline"> Previous </span>
      </button>

      {generatePageNumbers().map((page, idx) =>
        page === "..." ? (
          <span key={idx} className="px-3 py-1 text-gray-500">
            ...
          </span>
        ) : (
          <button
            key={idx}
            onClick={() => setCurrentPage(page)}
            className={`flex items-center justify-center w-10 h-10 text-sm font-medium text-gray-700 rounded-lg hover:bg-brand-500 hover:text-white ${
              currentPage === page
                ? "bg-brand-500 text-white"
                : "bg-dark-700 text-gray-500"
            }`}
          >
            {page}
          </button>
        )
      )}

      <button
        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
        disabled={currentPage === totalPages}
        className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200 sm:px-3.5 sm:py-2.5"
      >
        <span className="hidden sm:inline"> Next </span>
        <ArrowRightIcon className="size-5 fill-current" />
      </button>
    </div>
  );
}
