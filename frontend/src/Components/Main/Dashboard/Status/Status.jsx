import { Circle } from "./Circle"
export function Status(){
    return <div className="w-[100%] h-full flex flex-col px-7 gap-4"> 
        <div className=" flex  justify-between text-xl font-bold pr-5 w-full h-[10%]">
            <div>
                Status
            </div>
            <div className="cursor-pointer">
                See all
            </div>
        </div>
        <div className="w-full h-[90%] flex  gap-10 pr-5  overflow-hidden  ">
            <Circle/>
        </div>
    </div>
}