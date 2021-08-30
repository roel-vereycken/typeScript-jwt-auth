import Link from "next/link"

export default function HomePage() {
  return <div>
        <h1>Hello</h1>
        <Link href="/people">
          <a href="">People</a> 
        </Link>
    </div>;
}
