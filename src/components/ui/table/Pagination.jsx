const Pagination = ({ children }) => {
  return (
    <div className="flex flex-col gap-2 px-4 py-4 border border-b-0 border-gray-100 dark:border-white/[0.05] rounded-t-xl sm:flex-row sm:items-center sm:justify-between">
      {children}
    </div>
  );
};

const SelectPagin = ({ children }) => {
  return (
    <select className="w-full py-2 pl-3 pr-8 text-sm text-gray-800 bg-transparent border border-gray-300 rounded-lg appearance-none dark:bg-dark-900 h-9 bg-none shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800">
      {children}
    </select>
  );
};

const OptionPagin = ({ text, value }) => {
  return (
    <option
      value={value}
      className="text-gray-500 dark:bg-gray-900 dark:text-gray-400"
    >
      {text}
    </option>
  );
};

const InputPagin = ({ children }) => {
  return <div className="relative">{children}</div>;
};

const InputSearch = (props) => {
  return <input {...props} />;
};

export { Pagination, SelectPagin, OptionPagin, InputPagin, InputSearch };
