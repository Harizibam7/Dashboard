import { NoticeTag } from "./NoticeTag"
export function Notice(){
    return <div className="w-[100%] h-full flex flex-col px-7 gap-4"> 
        <div className="text-xl font-bold w-full h-[10%]">
            Notice
        </div>
        <div className="w-full h-[90%] gap-1 grid grid-cols-4 shadow-lg  rounded-lg cursor-pointer">
            <NoticeTag label={"Hi there"}/>
            <NoticeTag label={"Hi there"}/>
            <NoticeTag label={"Hi there"}/>
            <NoticeTag label={"Hi there"}/>
        </div>
    </div>

}