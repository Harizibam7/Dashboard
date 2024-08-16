import { NoticeTag } from "./NoticeTag"
export function Notice(){
    return <div className="w-full h-full flex p-10">
        <div className="">
            <NoticeTag label={"Hi There"}/>
        </div>
    </div>
}