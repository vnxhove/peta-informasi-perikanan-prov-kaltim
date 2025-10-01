import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";
export default function FishCurrent({ datas }) {
  const results = [];
  datas.map((res) => {
    const t = res["title"];
    const v = res["fishData"].reduce((sum, row) => sum + row["Volume"], 0);
    const n = res["fishData"].reduce(
      (sum, row) => sum + row["Nilai"] / 1000,
      0
    );
    results.push([t, v, n]);
  });
  return (
    <Table>
      <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
        <TableRow>
          <TableCell className="px-5 py-3 font-medium text-gray-700 text-start text-theme-lg dark:text-gray-400">
            Kabupaten Kota
          </TableCell>
          <TableCell className="px-5 py-3 font-medium text-gray-700 text-start text-theme-lg dark:text-gray-400">
            Volume Produksi
          </TableCell>
          <TableCell className="px-5 py-3 font-medium text-gray-700 text-start text-theme-lg dark:text-gray-400">
            Nilai
          </TableCell>
        </TableRow>
      </TableHeader>
      <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
        {results.map((a, i) => (
          <TableRow
            key={i}
            className="border-b border-gray-100 dark:border-white/[0.05]"
          >
            <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
              {a[0]}
            </TableCell>
            <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
              {new Intl.NumberFormat("id-ID", {
                style: "decimal",
                maximumFractionDigits: 2,
              }).format(a[1])}
            </TableCell>
            <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
              {new Intl.NumberFormat("id-ID", {
                style: "decimal",
                maximumFractionDigits: 2,
              }).format(a[2])}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
