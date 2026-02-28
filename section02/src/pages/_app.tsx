import GlobalLayout from "@/components/global-layout";
import "@/styles/globals.css";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactNode } from "react";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactNode) => ReactNode;
};

export default function App({
  Component,
  pageProps,
}: AppProps & {
  Component: NextPageWithLayout;
}) {
  const getLayout = Component.getLayout ?? ((page: ReactNode) => page);
  // Component.getLayout ?? ((page: ReactNode) => page);
  // 이게 있으면 이걸 반환    없으면 이걸 반환

  return <GlobalLayout>{getLayout(<Component {...pageProps} />)}</GlobalLayout>;
}
