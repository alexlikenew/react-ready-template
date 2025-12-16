import { Outlet, NavLink } from 'react-router-dom';
import { FolderOpen, Home, Settings } from 'lucide-react';
import {cn} from "../../shared/lib/cn.ts";


export const AppLayout = () => {
    return (
        <div className="flex h-screen bg-slate-50 text-slate-900">
            {/* Sidebar */}
            <aside className="w-64 border-r bg-white p-4 flex flex-col">
                <div className="mb-8 flex items-center gap-2 px-2 text-xl font-bold text-blue-600">
                    <FolderOpen /> CloudCommander
                </div>

                <nav className="space-y-1">
                    <NavItem to="/" icon={<Home size={20} />}>Home</NavItem>
                    <NavItem to="/files" icon={<FolderOpen size={20} />}>Files</NavItem>
                    <NavItem to="/settings" icon={<Settings size={20} />}>Settings</NavItem>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-auto p-8">
                <Outlet />
            </main>
        </div>
    );
};

// Pomocniczy komponent do linków (lokalny dla tego pliku)
const NavItem = ({ to, icon, children }: { to: string; icon: React.ReactNode; children: React.ReactNode }) => (
    <NavLink
        to={to}
        className={({ isActive }) => cn(
            "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
            isActive ? "bg-blue-50 text-blue-600" : "text-slate-600 hover:bg-slate-100"
        )}
    >
        {icon} {children}
    </NavLink>
);