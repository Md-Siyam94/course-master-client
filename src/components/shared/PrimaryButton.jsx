import { Link } from 'react-router-dom'

export default function PrimaryButton({btnText, to, style}) {
  return (
    <div  className={`grid ${style} ${style?.includes("justify-start") ? "justify-start" : "justify-center"} `}>
        <Link to={to} className={`grid  bg-teal-600 mt-10 hover:bg-teal-700 cursor-pointer text-white mx-auto font-bold py-3 px-10 rounded-full`}>
            {btnText}
        </Link>
    </div>
  )
}
