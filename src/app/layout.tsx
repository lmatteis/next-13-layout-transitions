import "./global.css";

import { PropsWithChildren } from "react";
import Link from "next/link";
import ContextClickPlayer, { PlayerProvider } from "./context-player";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <html>
      <body>
        <PlayerProvider>
          <nav
            className="w-full border-b bg-white"
            id="page-header"
            data-astro-transition-persist="header"
          >
            <div className="w-full container mx-auto max-w-screen-lg px-6 lg:px-0 flex flex-wrap items-center mt-0 py-6">
              <div>
                <Link
                  className="flex items-center tracking-tight no-underline hover:no-underline font-bold text-black text-xl"
                  href="/"
                >
                  Home
                </Link>
              </div>
            </div>
          </nav>

          {children}
          <ContextClickPlayer />
        </PlayerProvider>
      </body>
    </html>
  );
}
