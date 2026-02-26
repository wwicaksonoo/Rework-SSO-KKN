import mahasiswa from "../data/data";


function Desa() {
  return (

<div className="px-2 py-2 pt-2 ">
    <div className="rounded-lg shadow-md px-4 ">
        <div className="flex justify-between mx-auto p-4">
        

{/*flex */}
        <div className="flex flex-col">
      <h1>Desa KKN:</h1>
        <p className="font-semibold max-w-xs">Desa Sukamaju, Kecamatan Beringin, Kabupaten Bengkulu Selatan</p>
        </div>

        <div className="relative right-3">
        <h1>Dosen Pembimbing Lapangan:</h1>
        <p className="font-semibold max-w-xs">Dr. Ir. H. Syarifuddin, M.Si</p>
        </div>
        
        </div>
        
   
    </div>

{/* cols */}

<div className="py-6">

      <div className="overflow-x-auto rounded-lg shadow ">

        <table className="w-full  text-sm text-left border border-gray-300">

          
          <thead className="bg-gray-700 text-white">
            <tr>
              <th className="px-4 py-2 border">No</th>
              <th className="px-4 py-2 border">NIM</th>
              <th className="px-4 py-2 border">Nama</th>
              <th className="px-4 py-2 border">Jabatan</th>
              <th className="px-4 py-2 border">Program Studi</th>
              <th className="px-4 py-2 border">WhatsApp</th>
              <th className="px-4 py-2 border">Agama</th>
              <th className="px-4 py-2 border">Jenis Kelamin</th>
            </tr>
          </thead>

          
          <tbody className="bg-white">
            {mahasiswa.map((item, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="px-4 py-2 border">{index + 1}</td>
                <td className="px-4 py-2 border">{item.nim}</td>
                <td className="px-4 py-2 border">{item.nama}</td>
                <td className="px-4 py-2 border">{item.jabatan}</td>
                <td className="px-4 py-2 border">{item.prodi}</td>
                <td className="px-4 py-2 border">{item.wa}</td>
                <td className="px-4 py-2 border">{item.agama}</td>
                <td className="px-4 py-2 border">{item.gender}</td>
              </tr>
            ))}
          </tbody>

        </table>

    </div>

    </div>

</div>




  );
}

export default Desa;
