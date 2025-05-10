import { CheckCircle, Lock } from "@phosphor-icons/react";
import { format, isPast } from "date-fns";
import { ptBR } from "date-fns/locale";

interface LessonProps {
  title: string,
  slug: string,
  availableAt: Date,
  type: 'live' | 'class'


}
export function Lesson(props: LessonProps) {
  const isLassonAvailable = isPast(props.availableAt);
  const availableFormatDate = format(props.availableAt, "EEE' • ' d ' de ' MMMM ' • ' k'h'mm", {
    locale: ptBR,
  })
  return (

    <a href="#">
      <span className="text-gray-300">
        {availableFormatDate}
      </span>
      <div className="rounded-2xl  border border-gray-500 p-4 mt-2">
        <header className="flex items-center justify-between ">
          {isLassonAvailable ? (
            <span className="text-sm text-blue-500 font-medium flex items-center gap-2">
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
              <Lock size={20} />
              Em breve
            </span>
          )}
          <span className="text-xs py-[0.125rem] px-2 rounded-2xl text-white border border-green-300 font-bold">
            {props.type == 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
          </span>
        </header>


        <strong className="mt-5 block text-gray-200 ">
          {props.title}
        </strong>
      </div>
    </a>
  );
}