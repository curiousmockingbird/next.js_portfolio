import Image from "next/image";

interface HeaderProps {
  imageSrc: string;
}

export default function Header({ imageSrc }: HeaderProps) {
  return (
    <div className="pt-12 pb-6 lg:pb-0 lg:fixed lg:inset-x-0 lg:top-0 lg:z-30">
      <div className="flex flex-col items-center justify-center">
        <Image
          src={imageSrc}
          alt="Your SVG"
          width={337}
          height={89}
          priority
          style={{ width: "180px", height: "auto" }}
        />
        <h1 className="text-base md:text-lg lg:text-base mt-1">Full-Stack & Application Security Analyst</h1>
      </div>
    </div>
  );
}
