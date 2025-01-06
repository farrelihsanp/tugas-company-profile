import Link from "next/link";

export default function Header() {
  return (
    <header className="flex max-w-[1100px] mx-auto items-center justify-between gap-3 px-5 py-8 text-sm">
      <div className="flex items-baseline gap-1">
        <div className="text-3xl font-raleway font-semibold text-black p-2 lg:text-4xl">
          <Link href="/">PURFA DESIGN</Link>
        </div>
      </div>

      <nav>
        <ul className="flex gap-3 lg:gap-5">
          <li>
            <Link
              className="text-primary-grey text-sm lg:text-base p-2 transition-colors duration-200 hover:bg-black hover:text-white"
              href="/services"
            >
              SERVICE PAGE
            </Link>
          </li>
          <li>
            <Link
              className="text-primary-grey text-sm lg:text-base p-2 transition-colors duration-200 hover:bg-black hover:text-white"
              href="/teams"
            >
              TEAMS PAGE
            </Link>
          </li>
          <li>
            <Link
              className="text-primary-grey text-sm lg:text-base p-2 transition-colors duration-200 hover:bg-black hover:text-white"
              href="/about-us"
            >
              ABOUT US
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
