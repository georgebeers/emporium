import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "George's Emporium" },
    { name: "description", content: "Collection of various things." },
  ];
}

export default function Home() {
  return <h1>George Beers</h1>;
}
