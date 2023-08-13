"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import albums from "../albums";

export default function Home() {
  return (
    <section className="py-8">
      <div className="container mx-auto max-w-screen-lg px-6 lg:px-0 flex items-center flex-wrap pt-4 pb-12">
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {albums.map((album) => (
            <div className="flex flex-col">
              <Link
                href={`/album/${album.id}`}
                className="text-black hover:text-pink-500"
              >
                <motion.div
                  layoutId={`album-${album.id}`}
                  className="shadow-md hover:shadow-lg relative"
                  data-astro-transition-scope="astro-65TVG7L3-1"
                >
                  <img
                    className="card-image rounded-md relative z-10"
                    src={album.coverLink}
                    alt={album.title}
                    width={400}
                    height={400}
                  />
                </motion.div>
                <p className="pt-4 font-semibold">{album.title}</p>
                <p className="pt-1 text-gray-700">{album.band}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
