import Filters from "@/components/filters";
import ImgWrapper from "@/components/img-wrapper";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <main className="p-4 bg-slate-50 min-h-screen">
      <Navbar />
      <Filters />
      <ImgWrapper />
    </main>
  );
}
