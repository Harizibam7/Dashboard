import { Link } from "react-router-dom"

export function BottomWarning({label, buttonText, to,onClick}) {
    return <div className="py-2 text-sm flex justify-center">
      <div onClick={onClick}>
        {label}
      </div>
      {/* <Link className="pointer underline pl-1 cursor-pointer" to={to}> */}
        {/* {buttonText} */}
      {/* </Link> */}
    </div>
}