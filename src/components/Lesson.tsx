import { CheckCircle, Lock } from "@phosphor-icons/react";
import classNames from "classnames";
import { format, isPast } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Link, useParams } from "react-router-dom";

interface LessonProps {
  title: string,
  slug: string,
  availableAt: Date,
  type: 'live' | 'class'


}
export function Lesson(props: LessonProps) {
  const { slug } = useParams<{ slug: string }>()
  const isLassonAvailable = isPast(props.availableAt);
  const availableFormatDate = format(props.availableAt, "EEE' • ' d ' de ' MMMM ' • ' k'h'mm", {
    locale: ptBR,
  })

  const isAvailable = slug == props.slug
  return (

    <Link to={`/event/lesson/${props.slug}`} className="group">
      <span className="text-gray-300">
        {availableFormatDate}
      </span>

      <div className={classNames(
        "rounded-2xl border border-gray-500 p-4 mt-2 group-hover:border-green-500",
        {
          'bg-green-500': isAvailable,
        }
      )}>

        <header className="flex items-center justify-between ">
          {isLassonAvailable ? (
            <span className={classNames('text-sm  font-medium flex items-center gap-2', {
              'text-blue-500': !isAvailable,
              'text-white': isAvailable
            })}>
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
              <Lock size={20} />
              Em breve
            </span>
          )}
          <span className={classNames('text-xs py-[0.125rem] px-2 rounded-2xl text-white border  font-bold', {
            'border-white': isAvailable,
            'border-green-300': !isAvailable
          })}>
            {props.type == 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
          </span>
        </header>


        <strong className={classNames('mt-5 block  ', {
          'text-gray-200': isAvailable,
          'text-white': !isAvailable
        })}>
          {props.title}
        </strong>
      </div>
    </Link >
  );
}