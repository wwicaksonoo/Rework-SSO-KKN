function Profile() {
    return (
        <div className="flex justify-center items-start py-10 min-h-screen">
            <div className="bg-white w-full  p-7 rounded-lg shadow-md mx-auto">
                <div className="flex flex-col ">
                    <h1 className="text-center font-semibold mb-8">Biodata Profil Mahasiswa</h1>

                    <form>
                        <div className="grid grid-cols-2 gap-6 items-start">
                            <div className="space-y-3">
                                <div>
                                    <label className="block mb-1 text-sm">NIM</label>
                                    <input type="text" className="w-full border border-gray-300 rounded-md p-2" />
                                </div>
                                <div>
                                    <label className="block mb-1 text-sm">Nama Lengkap</label>
                                    <input type="text" className="w-full border border-gray-300 rounded-md p-2" />
                                </div>
                                <div>
                                    <label className="block mb-1 text-sm">Jenis Kelamin</label>
                                    <input type="text" className="w-full border border-gray-300 rounded-md p-2" />
                                </div>
                                <div>
                                    <label className="block mb-1 text-sm">Fakultas</label>
                                    <input type="text" className="w-full border border-gray-300 rounded-md p-2" />
                                </div>
                                <div>
                                    <label className="block mb-1 text-sm">Program Studi</label>
                                    <input type="text" className="w-full border border-gray-300 rounded-md p-2" />
                                </div>
                                <div>
                                    <label className="block mb-1 text-sm">Kelas</label>
                                    <input type="text" className="w-full border border-gray-300 rounded-md p-2" />
                                </div>
                            </div>

                            <div className="space-y-3">
                                <div>
                                    <label className="block mb-1 text-sm">No Telepon</label>
                                    <input type="text" className="w-full border border-gray-300 rounded-md p-2" />
                                </div>

                                <div>
                                    <label className="block mb-1 text-sm">No WhatsApp</label>
                                    <input type="text" className="w-full border border-gray-300 rounded-md p-2" />
                                </div>

                                <div>
                                    <label className="block mb-1 text-sm">No. HP Orang Tua/Wali</label>
                                    <input type="text" className="w-full border border-gray-300 rounded-md p-2" />
                                </div>

                                <div>
                                    <label className="block mb-1 text-sm">Email</label>
                                    <input type="text" className="w-full border border-gray-300 rounded-md p-2" />
                                </div>

                                <div>
                                    <label className="block mb-1 text-sm">Riwayat Kesehatan</label>
                                    <textarea className="w-full h-30 border border-gray-300 rounded-md p-2" name="riwayat_kesehatan" id="riwayat_kesehatan"></textarea>
                                </div>
                            </div>
                        </div>

                        <div className="col-span-2 flex justify-center mt-6">
                            <button type="submit" className="bg-blue-600 text-white px-8 py-2 rounded-md hover:bg-blue-700 transition">
                                Simpan
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Profile;
