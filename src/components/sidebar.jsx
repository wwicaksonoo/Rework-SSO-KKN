import { useState } from "react"
import { LayoutDashboard, User, Home, Users,
  BookOpen, Package, Phone, Headphones, Menu
} from "lucide-react"

function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div className="px-2 py-2 ">
      <aside
        className={`h-full bg-gray-800 text-white p-4 flex flex-col rounded-2xl
          transition-all duration-300
          ${collapsed ? "w-22" : "w-64"}
        `}
      >

       
        <div className="bg-gray-900 rounded-xl px-3 py-2 mb-6 flex items-center gap-3">
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-2 rounded-md hover:bg-gray-700 transition relative right-2"
          >
            <Menu size={24} className="relative "/>
          </button>

          {!collapsed && (
            <span className="font-semibold text-sm whitespace-nowrap">
              SIM KKN Kampus
            </span>
          )}
        </div>

        
        <nav className="flex flex-col gap-2">
          <SidebarItem collapsed={collapsed} icon={<LayoutDashboard size={22} />} text="Dashboard" active />
          <SidebarItem collapsed={collapsed} icon={<User size={22} />} text="Profile" />
          <SidebarItem collapsed={collapsed} icon={<Home size={22} />} text="Desa" />
          <SidebarItem collapsed={collapsed} icon={<Users size={22} />} text="Kelompok" />
          <SidebarItem collapsed={collapsed} icon={<BookOpen size={22} />} text="Logbook" />
          <SidebarItem collapsed={collapsed} icon={<Package size={22} />} text="Peminjaman Alat" />
          <SidebarItem collapsed={collapsed} icon={<Phone size={22} />} text="Kontak Panitia" />
          <SidebarItem collapsed={collapsed} icon={<Headphones size={22} />} text="Helpdesk" />
        </nav>

      </aside>
    </div>
  )
}

function SidebarItem({ icon, text, active, collapsed }) {
  return (
    <div
      className={`
        flex items-center ${collapsed ? "justify-center" : "gap-3" }
        px-4 py-2 rounded-lg cursor-pointer transition-all duration-300
        ${active ? "bg-slate-600" : "hover:bg-gray-600/70"}
      `}
    >
      {icon}
      {!collapsed && <span className="text-sm">{text}</span>}
    </div>
  )
}

export default Sidebar