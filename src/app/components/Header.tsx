import Image from "next/image"
export default function Header () {
    return(
        <div className='flex flex-col items-center justify-center' style={{ height: '25vh' }}>
            <div>
            <Image src="/hm.svg" alt="Your SVG" width={200} height={200} />
            </div>
            <h1 className={'text-#ef4444'}>Harold Mesa — Full-Stack</h1>
        </div>
    )
}