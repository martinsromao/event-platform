import { Header } from "../components/Header";
//import { Lasson } from "../components/Lasson";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";


export function Events() {
  return (
    <div className="flex flex-col min-h-screen">

      <Header />
      <main className="flex w-full min-h-screen justify-between">
        <Video />
        <Sidebar />
      </main>
    </div>
  );
}