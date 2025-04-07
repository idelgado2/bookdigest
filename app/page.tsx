"use client";

import Image from "next/image";
import Link from "next/link";
import ButtonNormal from "./ui/button-normal";

const link = [{ name: "StartNotes", href: "/notebook" }];
export default function Home() {
  return (
    <>
      <div className="grid grid-rows-[20px_1fr_20px] gap-16 min-h-screen sm:p-20 p-8 pb-20 items-center justify-items-center font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <div className="flex gap-4 items-center flex-col sm:flex-row">
            <Link key={link[0].name} href={link[0].href}>
              <ButtonNormal>Start Book Notes!</ButtonNormal>
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
