import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useUserStore } from "@laundry-app/shared";
import { useEffect, useRef } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const isAuthed = useUserStore((state) => state.isAuthed);
  const router = useRouter();
  const routerPush = useRef(router.push);

  useEffect(() => {
    isAuthed ? routerPush.current("/dashboard") : routerPush.current("/");
  }, [isAuthed]);

  return <Component {...pageProps} />;
}
