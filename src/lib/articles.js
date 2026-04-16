import fm from "front-matter";
import { marked } from "marked";

/* Vite glob: loads every .md in content/articles/ as raw text at build time */
const files = import.meta.glob("/content/articles/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

export function getAllArticles() {
  return Object.entries(files)
    .map(([path, raw]) => {
      const { attributes } = fm(raw);
      return {
        ...attributes,
        slug:
          attributes.slug ||
          path.replace("/content/articles/", "").replace(".md", ""),
      };
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getArticleBySlug(slug) {
  const entry = Object.entries(files).find(
    ([path]) => path.replace("/content/articles/", "").replace(".md", "") === slug,
  );
  if (!entry) return null;
  const { attributes, body } = fm(entry[1]);
  return {
    ...attributes,
    slug,
    html: marked(body),
  };
}
