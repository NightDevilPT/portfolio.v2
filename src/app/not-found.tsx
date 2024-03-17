import Image from 'next/image'
import Link from 'next/link'
import gif from "../assets/404.png"
export default function NotFound() {
  return (
    <div className={`w-full h-full bg-base-100 flex justify-center items-center flex-col`}>
		<Image className='w-[80%] object-contain' src={gif} alt='404' />
		<h1 className={`font-mandali text-6xl font-bold`}>OOPS!</h1>
		<span className={`font-mandali text-2xl`}>We can't seem to find the page you are looking for.</span>
    </div>
  )
}