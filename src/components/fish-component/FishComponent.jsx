import { Kerapu } from "../icons/fish-icons";
export default function FishComponent({ Fish, Vol }) {
  return (
    <div className="flex gap-3 items-center rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:py-2 md:px-5">
      <Kerapu className="fill-gray-600 size-10 dark:fill-white/90" />
      <div>
        <h6 className="text-left text-gray-800 dark:text-white/90 text-xs font-medium">
          {Fish}
        </h6>
        <h4 className="text-left text-gray-600 dark:text-white/90 font-bold text-lg">
          {Vol} <span className="font-sm text-sm">Ton</span>
        </h4>
      </div>
    </div>
  );
}
