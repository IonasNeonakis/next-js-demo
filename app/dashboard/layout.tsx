import SideNav from '@/app/ui/dashboard/sidenav';
import {ReactNode} from "react";

export const experimental_ppr = true;

interface DashBoardLayoutProps {
    children: ReactNode
}


export default function Layout({children}: DashBoardLayoutProps) {
    return (
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
            <div className="w-full flex-none md:w-64">
                <SideNav/>
            </div>
            <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
        </div>
    );
}