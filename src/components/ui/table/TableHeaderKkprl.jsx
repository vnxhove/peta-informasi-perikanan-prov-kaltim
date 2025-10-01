import { TableRow, TableCell } from ".";

const headers = [
  "No.",
  "Nama Pengelola",
  "Kab/Kota",
  "Ikan Utama",
  "Ikan Tambahan",
  "Luas Lahan",
];

export default function TableHeaderKkprl() {
  return (
    <TableRow>
      {headers.map((header, i) => (
        <TableCell
          key={i}
          isHeader
          className="px-5 py-3 font-medium text-gray-700 text-start text-theme-xs dark:text-gray-400"
        >
          {header}
        </TableCell>
      ))}
    </TableRow>
  );
}
