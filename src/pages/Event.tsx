import { useParams } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Spinner } from "../components/Spinner/Spinner";
import { Video } from "../components/Video";

export function Event() {


  const { slug } = useParams<{ slug: string }>()
  
  console.log(slug)

  return (
    <div className="flex flex-col min-h-screen relative">
      <Header />
      <main className="flex flex-1">
        {slug
          ? <Video lessonSlug={slug}/>
          : <div className="flex-1 text-center justify-items-center m-auto">
            <Spinner />
            <p className="text-2xl text-green-500 mt-2">Loading...</p>
          </div>
        }
        <Sidebar />
      </main>
      <Footer />
    </div>
  )
}