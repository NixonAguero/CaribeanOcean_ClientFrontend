import {Footer} from "./Footer/Footer";
import MainNavBar from "./Navbar/MainNavBar";
import PromModal from "./Promotions/PubModal";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main>{children}</main>
      <Footer />
      <MainNavBar/>
      <PromModal/>
    </>
  );
}