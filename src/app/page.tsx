import { type Metadata } from "next";
import MainLayout from "~/components/MainLayout";

export const metadata: Metadata = {
  title: "Rakib Khan",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function HomePage() {
  return (
    <main>
      <MainLayout />
    </main>
  );
}
