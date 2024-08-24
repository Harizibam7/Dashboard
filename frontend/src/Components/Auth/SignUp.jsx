import { Heading } from "./Heading"
import { Subheading } from "./Subheading"
import { InputBox } from "./InputBox"
import { Button } from "./Button"
import { BottomWarning } from "./BottomWarning"
import { useNavigate } from "react-router-dom"
export const SignUp = () => {
    const navigate = useNavigate();
    return <div className="bg-slate-500 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            <div className="rounded-lg bg-white w-100 text-center p-7 h-max px-10">
                <Heading label={"Sign up"}/>
                <Subheading label={"Enter your information to create an account"}/>
                <InputBox placeholder={"Hari"} label={"First Name"}/>
                <InputBox placeholder={"zibam"} label={"Last Name"}/>
                <InputBox placeholder={"harizibamv@gmail.com"}  label={"Email"}/>
                <InputBox placeholder={"123456"}  label={"Password"}/>                
                <div className="pt-4">
                    <Button label={"Sign up"} onClick={()=>{
                        navigate("/login");
                    }}/>
                </div>
                    
                <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"} />
            </div>
        </div>
    </div>
}