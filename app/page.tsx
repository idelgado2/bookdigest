"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

const link = [{ name: "StartNotes", href: "/notebook" }];

export default function Home() {
  const pathname = usePathname();
  return (
    <>
      <div className="grid grid-rows-[20px_1fr_20px] gap-16 min-h-screen sm:p-20 p-8 pb-20 items-center justify-items-center font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <div className="flex gap-4 items-center flex-col sm:flex-row">
            <Link key={link[0].name} href={link[0].href}>
              <Button className="delay-150 ease-in-out hover:-translate-y-1 hover:scale-110">
                Start Book Notes!
              </Button>
            </Link>
          </div>
        </main>
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://www.workofisaac.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/file.svg"
              alt="File icon"
              width={16}
              height={16}
            />
            workofisaac.com
          </a>
        </footer>
      </div>
    </>
  );
}
