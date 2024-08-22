import { Sidebar } from "./Sidebar/Sidebar"
import { Topbar } from "./Topbar/Topbar"
import { Profile } from "../Profile/Profile"
import { Dashboard } from "./Dashborad"
import { Ranklist } from "./Ranklist/Ranklist"
import {AdminDash} from "../Admin/AdminDash"
import { Leave } from "./Leave/Leave"
import { News } from "./Dashboard/News/News"
export function Main() {
    return <div className="bg-slate-500 h-screen w-screen flex">
        <div className="bg-slate-800 h-full w-[15%]">
            <Sidebar />
        </div>
        <div  className="bg-slate-900 flex flex-col h-full w-[85%] text-white p-12">
            <div className="w-full h-[10%]">
                <Topbar/>
            </div>
            {/* <Leave/> */}
            {/* <Ranklist/> */}
            {/* <AdminDash/> */}
            {/* <Dashboard/> */}
            {/* <Profile/> */}
            
        </div>
    </div>
}