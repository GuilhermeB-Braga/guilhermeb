import {
  IoLogoNodejs,
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoJavascript,
} from "react-icons/io";
import { BiLogoMongodb } from "react-icons/bi";
import { GoDatabase } from "react-icons/go";
import { SiTypescript } from "react-icons/si";
import { IoLogoReact } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";

export default function Technologies() {
  const technologies = [
    {
      name: "Html",
      icon: <IoLogoHtml5 />,
    },
    {
      name: "Css",
      icon: <IoLogoCss3 />,
    },
    {
      name: "JavaScript",
      icon: <IoLogoJavascript />,
    },
    {
      name: "TypeScript",
      icon: <SiTypescript />,
    },
    {
      name: "Node.js",
      icon: <IoLogoNodejs />,
    },
    {
      name: "React",
      icon: <IoLogoReact />,
    },
    {
      name: "Next.js",
      icon: <RiNextjsFill />,
    },
    {
      name: "MongoDB",
      icon: <BiLogoMongodb />,
    },
    {
      name: "SQL",
      icon: <GoDatabase />,
    },
  ];

  return (
    <section className="bg-background-light w-full min-h-[45vh] py-10 px-15">
      <h2 className="text-center text-4xl font-medium mb-10">Tecnologias</h2>

      <ul className='grid grid-cols-3 p-2 flex-wrap gap-5 text-sm'>

        {technologies.map((technology, index) => (
          <li
          key={index}
          className="min-w-20 h-20 flex items-center justify-center flex-col gap-2.5 text-3xl"
          >
            {technology.icon}

            <p className="text-lg">{technology.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}