export function Offers(){
    return <div className="h-full w-full flex flex-col">
        <div className="w-full h-[10%]">
            Offers
        </div>
        <div className="w-full h-[70%] flex justify-center gap-4 bg-red-500 p-4">
            <div className="h-[100%] w-[100%] bg-blue-500 rounded-full"></div>
            <div className="h-[100%]  w-[100%] bg-blue-500 rounded-full"></div>
            <div className="h-[100%] w-[100%] bg-blue-500 rounded-full"></div>
        </div>
        <div className="w-full h-[10%]">
            See all
        </div>
    </div>
}