export function DetailsTag({icon,  label, name}){
    return <div className="w-full h-10 flex pl-10 pb-2 gap-4">    
            <div className="flex justify-center">
                {icon}
            </div>
            <div className="flex flex-col justify-center">
                <label className="text-sm">{label}</label>
                <div className="text-lg">{name}</div>
            </div>
    </div>
}