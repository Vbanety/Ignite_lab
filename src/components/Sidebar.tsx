import { Lesson } from "./Lesson";
import { List } from "phosphor-react"
import { useState } from "react";
import { useGetLessonsQuery } from "../graphql/generated";



export function Sidebar() {
  const [icon, setIcon] = useState(false)
  const { data } = useGetLessonsQuery()

  const handleOpenSideBar = () => {
    const aside = document.querySelector('#aside')
    aside?.classList.toggle('hidden')
    aside?.classList.toggle('translate-y-full')
    setIcon(!icon)
  }

  const lessons = document.querySelector('#lessons')
  lessons?.childNodes.forEach(e => {
    e.addEventListener('click', () => {
      const sidebar = document.querySelector('#aside')
      sidebar?.classList.add('hidden')
      sidebar?.classList.add('translate-y-full')
      setIcon(!icon)
    })
  })

  return (
    <div className="">
      <button
        onClick={() => handleOpenSideBar()}
        className="block md:hidden absolute top-4 right-6 flex items-center"
      >
        Aulas
        {
          !icon
            ? <List size={40} className=" text-blue-500 hover:text-blue-50 ml-2" />
            : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10  text-blue-500 hover:text-blue-50 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            )
        }

      </button>

      <aside id="aside" className="absolute transform translate-y-full transition duration-200 ease-out hidden top-18 right-0 z-50  md:translate-y-0 md:z-0 md:relative md:top-0 md:block w-full sm:w-[348px] bg-gray-700 p-6 border-l border-gray-600">
        <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
          Cronograma de aulas
        </span>

        <div id="lessons" className="flex flex-col gap-8">
          {data?.lessons.map(lesson => {
            return (
              <Lesson
                key={lesson.id}
                title={lesson.title}
                slug={lesson.slug}
                availableAt={new Date(lesson.availableAt)}
                type={lesson.lessonType}
              />
            )
          })}
        </div>
      </aside>
    </div>
  )
}