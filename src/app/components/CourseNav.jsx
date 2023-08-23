import Link from "next/link"
export default function CourseNav() {
  return (
    <aside>
        <ul>
            <Link href='/course/frontend'>
            <li>frontend</li>
            </Link>
            <Link href='/course/backend'>
            <li>backend</li>
            </Link>
            <Link href='/course/product'>
            <li>porduct design</li>
            </Link>
        </ul>
    </aside>
  )
}
