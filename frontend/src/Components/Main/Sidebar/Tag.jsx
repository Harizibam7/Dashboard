export function Tag({label, icon ,setPage}){
    return <div className="flex justify-center gap-2 w-full cursor-pointer ">
            <div className="flex px-16 gap-2 w-full hover:text-gray-800" onClick={()=>{
                setPage(label);
            }}>
                {icon}{" "}{label}
            </div>
    </div>
}   