import "./global.css";

import { PropsWithChildren } from "react";
import Link from "next/link";
import { Animate } from "../components/Animate";

export default function Layout({ children }: PropsWithChildren) {
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

        <Animate>{children}</Animate>
      </body>
    </html>
  );
}
