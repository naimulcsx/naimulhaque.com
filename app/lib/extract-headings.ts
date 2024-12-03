import GithubSlugger from "github-slugger";

export function extractHeadings(markdown: string) {
  const regXHeader = /\n(?<flag>#{1,6})\s+(?<content>.+)/g;
  const slugger = new GithubSlugger();
  const headings = Array.from(markdown.matchAll(regXHeader)).map(
    ({ groups }) => {
      const flag = groups?.flag;
      const content = groups?.content;
      return {
        level: flag!.length,
        text: content!,
        slug: slugger.slug(content!)
      };
    }
  );
  return headings;
}
