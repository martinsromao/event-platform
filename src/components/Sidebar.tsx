import { useGetLessonsQuery } from "../graphql/generated";
import { Lesson } from "./Lesson";

export function Sidebar() {
  const { data } = useGetLessonsQuery()
  return (
    <aside className="w-[348px] border-l bg-gray-700 p-6 border-gray-600 h-screen overflow-y-auto scrollbar-thin scrollbar-track-gray-800 scrollbar-thumb-gray-500">
      <span className="font-bold border-b border-gray-600 text-2xl pb-6 mb-6 block">
        Cronograma das aulas
      </span>

      <div className="flex flex-col gap-8">
        {data?.lessons.map(lesson => {
          return (
            <Lesson
              key={lesson.id}
              title={lesson.title}
              slug={lesson.slug}
              availableAt={new Date(lesson.availableAt)}
              type={lesson.lessonType} />
          )
        })}
      </div>
    </aside>
  );
}