"use client";
import { useRouter } from "next/navigation";
import { IoIosArrowBack } from "react-icons/io";

interface NavHeaderProps {
  otherStyles?: string;
}

export default function NavHeader({ otherStyles }: NavHeaderProps) {
  const router = useRouter();

  return (
    <nav
      className={`flex items-center justify-between w-fit mb-5 text-2xl ${otherStyles}`}
    >
      <div
        onClick={() => router.back()}
        className="grid place-items-center rounded-xl cursor-pointer hover:text-text-muted w-10 h-10 bg-background-light hover:bg-background-dark"
      >
        <IoIosArrowBack />
      </div>
    </nav>
  );
}
