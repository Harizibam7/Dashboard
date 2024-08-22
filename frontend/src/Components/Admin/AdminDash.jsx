import {BarChartComponent} from './BarChartComponent';
import { Box } from './Box';
export function AdminDash(){
    return <div className="w-full h-full flex flex-col gap-10">
        <div className="w-full h-[50%]">
            <div className=" w-full h-[10%] font-bold text-xl">
                Placement
            </div>
            <div className="w-full h-full grid grid-cols-4 gap-10">
                <Box value={"UI Review"}/>
                <Box value={"C Workshop"}/>
                <Box value={"Stage 2 Review"}/>
                <Box value={"Byts Training"}/>
            </div>
        </div>
        <div className='w-full h-full'>
            <div className=" w-full h-[10%] font-bold text-xl">
                Chart
            </div>
            <BarChartComponent/>
        </div>  
    </div>
}