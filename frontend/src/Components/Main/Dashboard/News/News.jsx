export function News(){
    return <div className="w-full h-full flex ">
        <div className=" w-[94%] h-full bg-slate-50 rounded-xl p-5  text-slate-950 ">
            <div className="h-[50%] w-full flex flex-col gap-2">
                    <h1 className="font-bold text-xl">Placement News</h1>
                    <div className="text-lg	">Byts Java Batch 1 - SF 1 and PS - SF-2 student should maintain silience in the training session</div>
                    <div className="text-blue-500 font-bold cursor-pointer">See more</div>
            </div>
            <div className="h-[50%] w-full flex flex-col gap-2">
                    <h1 className="font-bold text-xl">Upcoming Plans</h1>
                    <div className="text-lg	">Night class Cancel due to heavy rain in BIT Campus. 
                        Main the 
                    </div>
                    <div className="text-blue-500 font-bold cursor-pointer">See more</div>
            </div>
        </div>
    </div>
}