import ProjectCard from "../ProjectCard";

export default function Projects() {
  return (
    <section className="py-10 px-15">
      <h1 className="text-3xl font-medium mb-10">Meus Projetos</h1>

      <ul className="grid grid-cols-3 gap-10">
        {Array.from({ length: 6 }).map((a, i) => (
          <ProjectCard key={i} />
        ))}
      </ul>
    </section>
  );
}
