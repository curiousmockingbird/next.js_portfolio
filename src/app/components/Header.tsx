import Image from "next/image";
import Link from "next/link";

interface HeaderProps {
  imageSrc: string;
}

export default function Header({ imageSrc }: HeaderProps) {
  return (
    <Link href="/" className="flex flex-col items-center justify-center" style={{ height: "25vh" }}>
      <div>
        <Image src={imageSrc} alt="Your SVG" width={200} height={200} />
      </div>
      <h1>harolDeveloper — Full-Stack</h1>
    </Link>
  );
}