import backgroundImg from "@/src/assets/backgroundImage.jpg";
import Image from "next/image";
import { IoCalendarClearOutline } from "react-icons/io5";
import Button from "../Button";
import { LuEye } from "react-icons/lu";
import { IoIosGitBranch } from "react-icons/io";

export default function ProjectCard() {
  return (
    <li className="bg-background-light rounded-custom">
      <div className="relative overflow-hidden rounded-t-custom">
        <Image
          src={backgroundImg}
          alt="imagem do projeto"
          width={500}
          height={500}
          className="aspect-video object-cover w-full h-full"
        />

        <span
          className="
                absolute top-5 right-5 border border-border-custom text-sm py-.25 px-2.5
                bg-background-light rounded-full
            "
        >
          Fullstack
        </span>
      </div>

      <div className="p-5">
        <div className="flex justify-between mb-2.5">
          <h3 className="font-medium text-lg">Default</h3>

          <span className="flex items-center justify-between gap-1.5 text-sm text-text-muted">
            <IoCalendarClearOutline />
            Fevereiro 2026
          </span>
        </div>

        <p className="text-sm text-text-muted">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora
          veritatis magnam sed in incidunt?
        </p>

        <ul className="mt-5 flex flex-wrap gap-2.5">
          <li className="w-fit text-sm py-.25 px-2.5 bg-neutral-200 text-background rounded-md">
            JavaScript
          </li>
        </ul>

        <div className="mt-5 flex gap-5">
          <Button
            text="Repositório"
            style="bordered"
            icon={<IoIosGitBranch />}
          />

          <Button text="Ver detalhes" style="primary" icon={<LuEye />} link={`/projetos/id`}/>
        </div>
      </div>
    </li>
  );
}
