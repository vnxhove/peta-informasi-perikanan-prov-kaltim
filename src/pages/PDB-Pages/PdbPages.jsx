import PageMeta from "../../components/common/PageMeta";
import PdbTable from "../../components/tables/AppPDBTable/PdbTable";

export default function PdbPages() {
  return (
    <>
      <PageMeta
        title="React.js Ecommerce Dashboard | TailAdmin - React.js Admin Dashboard Template"
        description="This is React.js Ecommerce Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PdbTable />
    </>
  );
}
