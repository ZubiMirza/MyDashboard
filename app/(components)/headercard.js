import {BsGraphUp} from "react-icons/bs"
import {BsEmojiSmile} from "react-icons/bs"
import {BsEmojiFrown} from "react-icons/bs"
// import Barchart from "./Barchart/barchart"
export default function Headercard() {
  return (
    <>

    <p className="text-gray-700 text-3xl mb-16 font-bold ">Dashboard</p>

    <div className="grid lg:grid-cols-3 gap-5 mb-16">
      <div className="rounded bg-red-700 h-40 shadow-sm outline outline-offset-0 outline-black-400">
        <h1 className="text-4xl	text-center mt-5	"> zubair</h1>
        <h1 className="text-center mt-5 	 text-3xl">145.13k</h1>
        <BsGraphUp className=" text-3xl mt-2 ms-32"/>
      </div>
      <div className="rounded bg-orange-500 outline outline-offset-0 outline-black-400 h-40 shadow-sm">
      <h1 className="text-4xl	text-center mt-5	"> All courses </h1>
        <h1 className="text-center mt-5 	 text-3xl">44.4%</h1>
        <BsEmojiFrown className=" text-3xl mt-2 ms-32"/>
      </div>
      <div className="rounded bg-yellow-500 h-40 outline outline-offset-0 outline-black-400 shadow-sm">
      <h1 className="text-4xl	text-center mt-5	"> Present</h1>
        <h1 className="text-center mt-5 	 text-3xl">78.9%</h1>
        <BsEmojiSmile className="  text-3xl mt-2 ms-32"/>   
      </div>
    </div>
    <div className="grid col-1 bg-white h-96 shadow-sm">
    <picture>
          <img
            className=" w-49 h-full bg-white w-100 "
            src="/1.jpg"
            alt="company logo"
          />
        </picture>
    </div>
    
  </>
  )
}
