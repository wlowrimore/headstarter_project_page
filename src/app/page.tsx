import Image from "next/image";
import SideBar from "./components/SideBar";
import Main from "./components/Main";

export default function Home() {
  return (
    <main className="flex max-w-8xl mx-auto">
      <div className="hidden sm:inline border-r h-screen sticky bottom-0 top-0">
        <SideBar />
      </div>
      <div className="border border-r h-screen w-full overflow-y-scroll mx-10">
        <Main />
      </div>
    </main>
  );
}
