import { Details } from "./Details"
import { Platform } from "./Platform"
export function Profile(){
    return <>
        <div className="w-full h-full flex gap-5">
            <div className="w-[25%] h-full bg-slate-800 rounded-xl">
                <div className="w-full h-[20%] flex justify-center p-8">
                    <div className="w-32 h-32 bg-slate-50 flex justify-center items-center font-bold text-slate-950 text-7xl rounded-full ">
                        H
                    </div>
                </div>
                <div className="w-full h-[26%]">
                        <Details/>
                </div>
                <div className="w-full h-[20%] flex justify-center items-center gap-3 text-slate-950 font-bold text-xl">
                    <Platform label={"Leetcode" }  rating={"600+"}/>
                    <Platform label={"Codechef"} rating={"1408"}/>
                    <Platform label={"Codeforce"} rating={"891"}/>
                </div>
                <div className="w-full h-[10%] flex flex-col pl-10 gap-5">
                    <div className="flex gap-2 font-bold">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
                    </svg>
                    <div>Technology</div>
                    </div>
                    <input className="w-[90%] h-10 rounded text-slate-950"/>
                </div>
                <div>
                    <div>

                    </div>
                    <div>
                        
                    </div>
                </div>
                <div>
                    Resume
                </div>
            </div>
            <div className="w-[75%] h-full bg-slate-800 rounded-xl">
                <div>
                        Rank List
                </div>
                <div>
                        Right Bottom
                </div>
            </div>
        </div>
    </>
}