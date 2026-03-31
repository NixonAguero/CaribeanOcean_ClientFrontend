import {Footer} from "./Footer/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main>{children}</main>
      <Footer />
    </>
  );
}