import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
//import { Lasson } from "../components/Lasson";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";


export function Events() {
  const { slug } = useParams<{ slug: string }>();

  return (
    <div className="flex flex-col min-h-screen">

      <Header />
      <main className="flex w-full min-h-screen justify-between">
        {slug ? <Video lessonSlug={slug} /> : <div className="flex-1"></div>}
        <Sidebar />
      </main>
    </div>
  );
}