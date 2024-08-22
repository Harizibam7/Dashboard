export function Platform({label , rating}){
    return <div className="w-[28%] h-[65%] bg-slate-50 rounded-lg flex flex-col justify-center cursor-pointer" >
        <div className="w-full h-[30%] flex justify-center items-start">
            {label}
        </div>
        <div className="w-full h-[10%] flex justify-center ">
            {rating}
        </div>
    </div>
}