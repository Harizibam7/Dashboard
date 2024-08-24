import { NoticeTag } from "./NoticeTag"
export function Notice(){
    return <div className="w-[100%] h-full flex flex-col px-7 gap-4"> 
        <div className="text-xl font-bold w-full h-[10%]">
            Notice
        </div>
        <div className="w-full h-[90%] gap-1 grid grid-cols-4 rounded-lg cursor-pointer">
            <NoticeTag label={"1"} head = {"Full-Stack Rank"}/>
            <NoticeTag label={"58.4"} head={"Placement Cumulative %"} />
            <NoticeTag label={"83.8"} head ={"Current Placement FA %"}/>
            <NoticeTag label={"1450"} head={"Full-Stack Top Rank Points"}/>
        </div>
    </div>

}