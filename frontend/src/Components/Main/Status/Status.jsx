export function Status(){
    return <div className="w-[100%] h-full flex flex-col px-7 gap-4"> 
        <div className=" flex  justify-between text-xl font-bold pr-5 w-full h-[10%]">
            <div>
                Status
            </div>
            <div>
                See all
            </div>
        </div>
        <div className="w-full h-[90%] flex  gap-10 pr-5   ">
            <div className="w-[50%] h-[80%] bg-slate-800 rounded shadow-2xl">
            </div>
            <div className="w-[50%] h-[80%] bg-slate-800 rounded shadow-2xl">
            </div>       
        </div>
    </div>
}