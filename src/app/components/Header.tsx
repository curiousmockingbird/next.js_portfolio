import Image from "next/image"
export default function Header () {
    return(
        <div className='flex flex-col items-center justify-center' style={{ height: '25vh' }}>
            <Image src="/hm.svg" alt="Your SVG" width={200} height={200} />
        </div>
    )
}