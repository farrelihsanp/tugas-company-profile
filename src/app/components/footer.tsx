import Link from "next/link";

export default function Footer() {
  return (
    <footer className="fixed-bottom mx-auto flex max-w-[1100px] flex-col items-center justify-between gap-3 px-5 py-8 text-sm sm:flex-row position-fixed">
      <div className="flex text-1xl font-raleway font-semibold text-black p-2 transition duration-300">
        <Link href="/">PURFA DESIGN</Link>
      </div>

      <nav className="order-1 sm:order-2">
        <ul className="flex gap-3">
          <li>
            <Link
              className="text-primary-grey text-sm hover:bg-black hover:text-white p-2 transition duration-300"
              href="/services"
            >
              SERVICE PAGE
            </Link>
          </li>
          <li>
            <Link
              className="text-primary-grey text-sm hover:bg-black hover:text-white p-2 transition duration-300"
              href="/teams"
            >
              TEAMS
            </Link>
          </li>
          <li>
            <Link
              className="text-primary-grey text-sm hover:bg-black hover:text-white p-2 transition duration-300"
              href="/about-us"
            >
              ABOUT US
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
