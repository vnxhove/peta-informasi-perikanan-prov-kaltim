export default function Legend() {
  return (
    <div className="flex flex-col gap-4">
      <div className="text-gray-500">
        <div className="text-gray-300 flex flex-col justify-between mb-4 border-b border-gray-100 dark:border-white/[0.05]">
          <h1 className="font-bold mb-2 border-b border-gray-100 dark:border-white/[0.05]">
            Description
          </h1>
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto
            aliquam deserunt dignissimos ipsum qui assumenda officiis ipsam
            quae, expedita totam!
          </p>
        </div>
      </div>
      <div className="">
        <div className="text-gray-500 flex justify-between border-b border-gray-100 dark:border-white/[0.05] mb-4 font-bold">
          <h1>Produksi Kelautan dan Perikanan</h1>
          <h1>2023</h1>
        </div>
        <div className="text-gray-400 flex justify-between border-b border-gray-100 dark:border-white/[0.05]">
          <ul className="flex flex-col gap-4">
            <li>Total Perikanan</li>
            <li>Perikanan Tanpa Rumput Laut</li>
            <li>Perikanan Tangkap</li>
            <li>Budi Daya Pembesaran</li>
            <li>Budi Daya Pembenihan</li>
            <li>Budi Daya Ikan Hias</li>
          </ul>
          <ul className="flex flex-col gap-4">
            <li className="text-right">419.545 ton</li>
            <li className="text-right">358.228 ton</li>
            <li className="text-right">199.646 ton</li>
            <li className="text-right">219.899 ton</li>
            <li className="text-right">1.552.523 ribu ekor</li>
            <li className="text-right">2.110.001 ekor</li>
          </ul>
        </div>
      </div>
      <div className="text-gray-500">
        <div className="text-gray-500 flex justify-between font-bold">
          <h1>Sumber: </h1>
          <a href="https://portaldata.kkp.go.id/">
            https://portaldata.kkp.go.id/
          </a>
        </div>
      </div>
    </div>
  );
}
