import { Sidebar } from "./Sidebar/Sidebar"
import { Topbar } from "./Topbar/Topbar"
import { Banner } from "./Banner/Banner"
import { Status } from "./Status/Status"
import { News } from "./News/News" 
import { Notice } from "./Notice/Notice"
import { Offers } from "./Offers/Offers"

export function Main() {
    return <div className="bg-slate-500 h-screen w-screen flex">
        <div className="bg-sky-900 h-full w-[15%]">
            <Sidebar />
        </div>
        <div  className="bg-sky-950 flex flex-col h-full w-[85%] text-white p-12">
            <div className="w-full h-[10%]">
                <Topbar/>
            </div>
            <div className="w-full h-[30%]">
                <Banner/>
            </div>
            <div className="w-full h-[70%] flex">
                <div className="w-[70%] h-full">
                    <div className="w-full h-[50%]">
                        <Notice />
                    </div>
                    <div className="w-full h-[50%]">
                        <Status/>
                    </div>
                </div>
                <div className="w-[20%] h-full">
                        <div className="h-[25%] w-full">
                            <Offers/>
                        </div>
                        <div className="h-[75%] w-full">
                            <News/>
                        </div>
                </div>
            </div>
        </div>
    </div>
}