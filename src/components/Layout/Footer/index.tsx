export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center w-full min-h-20 py-15">
      <p>&copy; 2025 Guilherme Braga</p>

      <p className="text-sm">
        Foto de{" "}
        <a
          className="text-primary"
          target="_blank"
          href="https://unsplash.com/pt-br/@gonzalezgonzalezdiego?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        >
          Diego González{" "}
        </a>
        na
        <a
          target="_blank"
          className="text-primary"
          href="https://unsplash.com/pt-br/fotografias/arte-de-grafite-multicolorida-sThsgxDtfF4?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        >
          {" "}
          Unsplash
        </a>
      </p>
    </footer>
  );
}