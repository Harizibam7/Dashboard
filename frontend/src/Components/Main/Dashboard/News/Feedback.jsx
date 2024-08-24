import { NewsTab } from "./NewsTab"
export  function Feedback(){
    
    return<>
    <div className="py-6 font-bold text-xl">
        Interview Experience
    </div>
    <div className="w-full h-full flex flex-col gap-10 overflow-scroll ">
        <style>
         {`
            .w-full::-webkit-scrollbar {
                display: none;
            }
        `}
        </style>
       
        <NewsTab/>
        <NewsTab/>
        <NewsTab/>
        <NewsTab/>
        <NewsTab/>
    </div>
    </> 
}