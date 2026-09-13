const GITHUB_IMAGE_ROOT = "https://raw.githubusercontent.com/qamarfrikha-a11y/imagesitecs/main";

export function githubImage(imagePath) {
  if (!imagePath || !imagePath.startsWith("/images/")) return imagePath;

  const encodedPath = imagePath
    .slice(1)
    .split("/")
    .map((segment) => encodeURIComponent(segment))
    .join("/");

  return `${GITHUB_IMAGE_ROOT}/${encodedPath}`;
}
