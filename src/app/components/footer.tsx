import Link from "next/link";
import Image from "next/image";
import { getEntries } from "@/utils/get-contentful-data";
import { ContentfulPost } from "../types/contentful";

export default async function Footer() {
  const logoFooter = (await getEntries({
    content_type: "companyLogo",
  })) as unknown as ContentfulPost[];

  return (
    <footer className="fixed-bottom mx-auto flex max-w-[1100px] flex-col items-center justify-between gap-3 px-5 py-8 text-sm sm:flex-row position-fixed">
      <div className="flex text-1xl font-raleway font-semibold text-black p-2 transition duration-300">
        <Link href="/">
          <div>
            <Image
              src={`https:${logoFooter[0]?.fields.logo.fields.file.url}`}
              alt="Company Logo"
              width={200}
              height={200}
            />
          </div>
        </Link>
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
