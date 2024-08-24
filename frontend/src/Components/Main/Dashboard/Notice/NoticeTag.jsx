export function NoticeTag({label,head}){
    return <div className="h-[90%] w-[90%] bg-slate-800 p-6 rounded-xl">
        <div className="w-full h-30% font-bold text-sm">
            {head}
        </div>
        <div className="w-full h-[70%] font-bold text-6xl flex justify-center cursor-pointer pt-10">
        {label}
        </div>
        
    </div>
}