import { Search } from "../../icons";

export default function SearchBar({ value, onChange, onSearch }) {
  return (
    <div className="flex justify-end gap-2 w-full">
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Cari Disini..."
        className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent py-2.5 pl-5 pr-4 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-2 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800 xl:w-[300px]"
      />
      <button
        onClick={onSearch}
        className="text-gray-500 dark:text-gray-400 border border-gray-300 px-4 py-2 rounded-lg hover:border-none hover:bg-blue-500 hover:text-white dark:border-gray-700 dark:hover:text-white dark:hover:border-none"
      >
        <Search className="size-5 fill-current" />
      </button>
    </div>
  );
}
