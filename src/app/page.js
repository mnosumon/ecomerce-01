import Header from "../components/layout/header/Index";
import Banner from "../components/home/banner/Index";
import Navbar from "../components/layout/navbar/Index";
import NavForMobile from "../components/layout/navbar/navForMobile/NavForMobile";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <Header />
        <div className="hidden lg:block">
          <Navbar />
        </div>
        <Banner />
      </main>
    </div>
  );
}
