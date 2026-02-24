import { LogOut } from "lucide-react";

function Navbar() {
    return (
        <div className="px-2 py-2 pt-2 ">
            <nav className=" flex py-3 px-3 items-center justify-between bg-white shadow-md rounded-xl ">
                <img src="https://ui-avatars.com/api/?name=Mazanov&background=0D8ABC&color=fff" alt="Profile" className="w-10 h-10 rounded-full " />

                <div className="flex items-center gap-4">
                    <div className="flex flex-col items-end">
                        <h1 className="text-md">Max Mazanov</h1>
                        <p className="text-sm text-gray-500">Mahasiswa</p>
                    </div>

                    <button className="flex items-center gap-2 text-red-500">
                        <LogOut size={18} />
                    </button>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
