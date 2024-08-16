import { Sidebar } from "./Sidebar/Sidebar"
import { Topbar } from "./Topbar/Topbar"
import { Banner } from "./Banner/Banner"
import { Status } from "./Status/Status"
import { News } from "./News/News" 
import { Notice } from "./Notice/Notice"
import { Offers } from "./Offers/Offers"

export function Main() {
    return <div className="bg-slate-500 h-screen w-screen flex">
        <div className="bg-slate-800 h-full w-[15%]">
            <Sidebar />
        </div>
        <div  className="bg-slate-900 flex flex-col h-full w-[85%] text-white p-12">
            <div className="w-full h-[10%]">
                <Topbar/>
            </div>
            <div className="w-full h-[40%]">
                <Banner/>
            </div>
            <div className="w-full h-[70%] flex">
                <div className="w-[70%] h-full flex flex-col justify-center">
                    <div className="w-full h-[50%]">
                        <Notice  />
                    </div>
                    <div className="w-full h-[50%]">
                        <Status/>
                    </div>
                </div>
                <div className="w-[20%] h-full">
                        <div className="h-[30%] w-full">
                            <Offers/>
                        </div>
                        <div className="h-[70%] w-full">
                            <News/>
                        </div>
                </div>
            </div>
        </div>
    </div>
}