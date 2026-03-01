export function slugify(input: string) {
  return input
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // bỏ dấu
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

export function stripMarkdownFence(text: string) {
    return text
      .replace(/^```(?:markdown)?\s*/i, "")
      .replace(/```$/, "")
      .trim();
}
