export default function isExternalLink(url: string) {
  return (
    url.startsWith("http") ||
    url.startsWith("https") ||
    url.startsWith("//") ||
    url.startsWith("mailto:")
  );
}
