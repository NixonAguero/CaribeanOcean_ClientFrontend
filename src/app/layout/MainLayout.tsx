import Footer from "./Footer/components/Footer";
import MainNavBar from "./Navbar/MainNavBar";
import PromModal from "./Ads/PubModal";
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