import { TableRow, TableCell } from ".";

export default function TableRowKkprl({ row, index }) {
  return (
    <TableRow className="border-b border-gray-100 dark:border-white/[0.05]">
      <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
        {index + 1}
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
  );
}
