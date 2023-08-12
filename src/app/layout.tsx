"use client";
import "./global.css";

import { PropsWithChildren, useContext, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context";

export function useLayoutRouterContext() {
  return useContext(LayoutRouterContext);
}

function FrozenRouter(props: PropsWithChildren<{}>) {
  const context = useLayoutRouterContext();
  const frozen = useRef(context).current;

  return (
    <LayoutRouterContext.Provider value={frozen}>
      {props.children}
    </LayoutRouterContext.Provider>
  );
}

export default function Layout({ children }: PropsWithChildren) {
  const pathname = usePathname();

  const onTheRight = { x: "100%" };
  const inTheCenter = { x: 0 };
  const onTheLeft = { x: "-100%" };

  const transition = { duration: 0.6, ease: "easeInOut" };

  return (
    <html>
      <body>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "fixed",
            width: "100vw",
            gap: "20px",
            marginTop: "30px",
            fontSize: "20px",
            zIndex: "100",
          }}
        >
          <Link href="/">Home</Link>
          <Link href="/one">One</Link>
          <Link href="/two">Two</Link>
          <Link href="/three">Three</Link>
          <Link href="/four">Four</Link>
        </div>

        <AnimatePresence initial={false} mode="popLayout">
          <motion.div
            key={pathname}
            initial={onTheRight}
            animate={inTheCenter}
            exit={onTheLeft}
            transition={transition}
            style={{
              background: "#98FC99",
              height: "100%",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FrozenRouter>{children}</FrozenRouter>
          </motion.div>
        </AnimatePresence>
      </body>
    </html>
  );
}
