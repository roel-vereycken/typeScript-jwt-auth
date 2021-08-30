import Link from "next/link";

const people = [
  { v: "car", name: "Bruno" },
  { v: "bike", name: "Claire" },
  { v: "plane", name: "Herwig" },
];

export default function Details() {
  return (
    <div>
      {people.map((e) => (
        <div>
          <Link as={`/${e.name}/${e.v}`} href="/[vehicle]/[person]">
            <a>
              Navigate to {e.name}'s {e.v}
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
}
