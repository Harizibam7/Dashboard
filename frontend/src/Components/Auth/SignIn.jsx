import { Heading } from "./Heading"
import { Subheading } from "./Subheading"
import { InputBox } from "./InputBox"
import { Button } from "./Button"
import { BottomWarning } from "./BottomWarning"
import { useNavigate } from "react-router-dom"
export const SignIn = () => {
    const navigate = useNavigate();
    return <div className="bg-slate-500 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
           <div className="rounded-lg bg-white w-100 text-center p-7 h-max px-10">
                <Heading label={"Sign In"}/>
                <Subheading label={"Enter your credential to access your account"}/>
                <InputBox label={"Email"} placeholder={"harizibamv@gmail.com"} />
                <InputBox label={"Password"} placeholder={"123456"}/>
                <div className="pt-4">
                    <Button  label={"Sign In"} onClick={()=>{
                        navigate("/");
                    }} />
                </div>
                <BottomWarning label={"Don't have an account?"} buttonText={"Sign Up"} to={"/signup"} onClick ={()=>{
                    navigate("signup");
                }} />
            </div>
        </div>
    </div>
}