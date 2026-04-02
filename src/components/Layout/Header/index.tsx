export default function Header() {
  const options = [
    { text: "Início", link: "home" },
    { text: "Sobre", link: "about" },
    { text: "Projetos", link: "projects" },
    { text: "Tecnologias", link: "technologies" },
    { text: "Contato", link: "contact" },
  ];

  return (
    <header className="absolute z-999 w-full h-20 grid place-items-center">
      <ul className="flex gap-6">
        {options.map((option) => (
          <li
            key={option.link}
            className="p-1 px-5 rounded-full hover:bg-primary hover:text-background cursor-pointer"
          >
            {option.text}
          </li>
        ))}
      </ul>
    </header>
  );
}
