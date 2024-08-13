import { Heading } from "./Heading"
import { Subheading } from "./Subheading"
import { InputBox } from "./InputBox"
import { Button } from "./Button"
import { BottomWarning } from "./BottomWarning"
export const SignIn = () => {
    return <div className="bg-slate-500 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
           <div className="rounded-lg bg-white w-100 text-center p-7 h-max px-10">
                <Heading label={"Sign In"}/>
                <Subheading label={"Enter your credential to access your account"}/>
                <InputBox label={"Email"} placeholder={"harizibamv@gmail.com"} />
                <InputBox label={"Password"} placeholder={"123456"}/>
                <div className="pt-4">
                    <Button  label={"Sign In"}  />
                </div>
                <BottomWarning label={"Don't have an account?"} buttonText={"Sign Up"} to={"/signup"} />
            </div>
        </div>
    </div>
}