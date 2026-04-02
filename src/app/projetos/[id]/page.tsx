import NavHeader from "@/src/components/Layout/NavHeader";
import Image from "next/image";
import graffitImage from "@/src/assets/backgroundImage.jpg";
import defaultImage from "@/src/assets/image.png";
import Button from "@/src/components/Button";
import { IoIosGitBranch } from "react-icons/io";
import { LuEye } from "react-icons/lu";

export default function Projeto() {
  return (
    <main className="flex flex-col">
      <div className="flex flex-col gap-7.5 flex-1 min-h-0">
        <section className="relative w-full h-[55vh] p-5">
          <NavHeader otherStyles="fixed z-999" />
          <ul className="absolute inset-0 overflow-x-auto flex gap-1.5 mt-1.5 h-full">
            {Array.from({ length: 3 }).map((_, index) => (
              <>
                <Image
                  key={index}
                  src={graffitImage}
                  alt="genérica"
                  className="w-auto h-full"
                />

                <Image
                  key={"a" + index}
                  src={defaultImage}
                  alt="genérica"
                  className="w-auto h-full"
                />
              </>
            ))}
          </ul>
        </section>

        <article className="flex gap-7.5 flex-col flex-1 px-55 py-5">
          {/* Cabeçalho da seção */}
          <div>
            <h1 className="text-3xl font-bold">Nome do projeto</h1>

            <div className="flex gap-10 text-sm text-text-muted my-2.5">
              <span>01 de Janeiro de 2026</span>

              <span className="px-2.5 rounded-md bg-pink-400 text-black">
                Stack
              </span>
            </div>

            <ul className="flex gap-2.5 flex-wrap">
              {Array.from({ length: 6 }).map((tag, index) => (
                <span
                  key={index}
                  className="px-2.5 text-sm rounded-md bg-green-400 text-black"
                >
                  {"Tag " + index}
                </span>
              ))}
            </ul>

            <div className="mt-5 flex gap-5">
              <Button
                text="Repositório"
                style="bordered"
                icon={<IoIosGitBranch />}
              />

              <Button
                text="Demo"
                style="primary"
                icon={<LuEye />}
                link={`/projetos/id`}
              />
            </div>
          </div>

          {/* Conteúdo de texo (Detalhes do projeto)*/}
          <div className="flex flex-col gap-5 overflow-y-auto">
            {Array.from({ length: 8 }).map((p, index) => (
              <p key={index}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                in dolore vel nemo quo. Sint quae nam aut eum minima officia
                veniam quam repellendus omnis, perspiciatis quasi est nostrum ab
                adipisci, nesciunt eveniet reprehenderit repellat repudiandae
                sapiente a quibusdam quas molestiae. Aut unde nesciunt assumenda
                molestias corrupti sequi, laudantium perspiciatis.
              </p>
            ))}
          </div>
        </article>
      </div>
    </main>
  );
}
