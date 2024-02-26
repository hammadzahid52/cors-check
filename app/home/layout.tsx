import Navbar from "@/components/navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#1F201F] font-sans antialiased pt-8 ">
      <div className="max-w-[1200px] mx-auto">
        <div className="lg:mx-5 md:mx-5 xl:mx-0 mx-5">
          <Navbar />
        </div>
        {children}
      </div>
    </div>
  );
}
