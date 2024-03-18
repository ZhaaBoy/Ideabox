import { Metadata } from "next";
import LandingPage from "./landingpage/page";
import Layout2 from "@/components/Layouts/Layout2";

export const metadata: Metadata = {
  title:
    "IDeabox | BNI",
  description: "This is Next.js Home for TailAdmin Dashboard Template",
};

export default function Home() {
  return (
    <>
      <Layout2>
        <LandingPage />
      </Layout2>
    </>
  );
}
