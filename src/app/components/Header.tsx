import Image from "next/image";
import Link from "next/link";

interface HeaderProps {
  imageSrc: string;
}

export default function Header({ imageSrc }: HeaderProps) {
  return (
    <Link href="/" className="h-[22vh] md:h-[22vh] lg:h-[18vh] p-12">
      <div className="flex items-center justify-center">
        <Image
          src={imageSrc}
          alt="Your SVG"
          width={180}
          height={180}
          priority
          
        />
      </div>
      <div className="flex items-center justify-center">
      <h1 className=" text-base md:text-lg lg:text-base">harolDeveloper — Full-Stack</h1>
      </div>
    </Link>
  );
}
