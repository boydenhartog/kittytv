import Navbar from "@/components/Navbar";
import Menu from "@/components/Menu";
import { ReactElement } from "react";
import styles from "@/styles/Layout.module.css";

export default function Layout({ children }: { children: ReactElement }) {
  return (
    <main
      className={
        styles.svgBackground +
        " flex flex-col min-h-screen text-slate-100 w-screen"
      }
    >
      <div className="flex flex-1">
        <Menu />
        <div className="flex flex-col w-full">
          <Navbar />
          <main className="flex-1 bg-transparent w-full">{children}</main>
        </div>
      </div>
    </main>
  );
}
