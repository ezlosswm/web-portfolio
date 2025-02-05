import baysideBuzzProfile from "@images/projects/baysidebuzz.png";
import type { ProjectPreview } from "src/types";

export const projects: ProjectPreview[] = [
  {
    title: "Bayside Buzz",
    description:
      "A social media platform for students to connect and share their experiences in the Bay Area.",
    image: baysideBuzzProfile,
    tools: ["HTMX", "Go", "Templ", "TailwindCSS", "PostgreSQL", "Appwrite"],
    preview: "https://bayside-buzz-production.up.railway.app/",
    github: "https://github.com/ezlosswm/bayside-buzz",
  },
];
