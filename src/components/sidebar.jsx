import { useState } from "react";
import { NavLink } from "react-router-dom";
import { LayoutDashboard, User, Home, Users, BookOpen, Package, Phone, Headphones, Menu } from "lucide-react";

function Sidebar() {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <div className="px-2 py-2 ">
            <aside
                className={`h-full bg-gray-800 text-white p-4 flex flex-col rounded-2xl
          transition-all duration-300
          ${collapsed ? "w-22" : "w-64"}
        `}
            >
                <div className="bg-gray-900 rounded-xl px-3 py-2 mb-6 flex items-center gap-3">
                    <button onClick={() => setCollapsed(!collapsed)} className="p-2 rounded-md hover:bg-gray-700 transition relative right-2">
                        <Menu size={24} className="relative " />
                    </button>

                    {!collapsed && <span className="font-semibold text-sm whitespace-nowrap">SIM KKN Kampus</span>}
                </div>

                <nav className="flex flex-col gap-2">
                    <SidebarItem collapsed={collapsed} icon={<LayoutDashboard size={22} />} text="Dashboard" active to="/" />
                    <SidebarItem collapsed={collapsed} icon={<User size={22} />} text="Profile" to="/profile" />
                    <SidebarItem collapsed={collapsed} icon={<Home size={22} />} text="Desa" to="/desa" />
                    <SidebarItem collapsed={collapsed} icon={<Users size={22} />} text="Kelompok" to="/kelompok" />
                    <SidebarItem collapsed={collapsed} icon={<BookOpen size={22} />} text="Logbook" to="/logbook" />
                    <SidebarItem collapsed={collapsed} icon={<Package size={22} />} text="Peminjaman Alat" to="/alat" />
                    <SidebarItem collapsed={collapsed} icon={<Phone size={22} />} text="Kontak Panitia" to="/panitia" />
                    <SidebarItem collapsed={collapsed} icon={<Headphones size={22} />} text="Helpdesk" to="/cs" />
                </nav>
            </aside>
        </div>
    );
}

function SidebarItem({ icon, text, collapsed, to }) {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                `
        flex items-center ${collapsed ? "justify-center" : "gap-3"}
        px-4 py-2 rounded-lg transition-all duration-300
        ${isActive ? "bg-gray-800" : "hover:bg-gray-700 transition"}
        `
            }
        >
            {icon}
            {!collapsed && <span className="text-sm">{text}</span>}
        </NavLink>
    );
}

export default Sidebar;
