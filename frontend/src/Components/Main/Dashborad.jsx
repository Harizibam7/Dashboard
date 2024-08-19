import {Banner} from './Dashboard/Banner/Banner' 
import { Status } from "./Dashboard/Status/Status"
import { News } from "./Dashboard/News/News" 
import { Notice } from "./Dashboard/Notice/Notice"
import { Offers } from "./Dashboard/Offers/Offers"
export function Dashboard(){
    return <>
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
                <div className="w-[30%] h-full">
                        <div className="h-[50%] w-full">
                            <Offers/>
                        </div>
                        <div className="h-[50%] w-full">
                            <News/>
                        </div>
                </div>
            </div>
    </>
}