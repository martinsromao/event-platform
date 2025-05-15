import { useRef, useEffect } from "react";
import { CaretRight, DiscordLogo, FileArrowDown, Image, Lightning } from "@phosphor-icons/react";
import '@vime/core/themes/default.css';
import { DefaultUi, Player, Youtube } from "@vime/react";
import { gql, useQuery } from "@apollo/client";
import { Footer } from "./footer";

const GET_LESSON_BY_SLUG_QUERY = gql`
query GetLessonBySlug ($slug: String = "slug"){
  lesson(where: {slug: $slug}) {
    title
    videoId
    description
   teacher {
    avatarURL
    bio
    name
  }
  }
 
}
`;
interface GetLessonBySlugResponse {
  lesson: {
    title: string,
    videoId: string,
    description: string,
    teacher: {
      avatarURL: string,
      name: string,
      bio: string
    }
  }
}





interface videoProps {
  lessonSlug: string
}
export function Video(props: videoProps) {
  const { data } = useQuery<GetLessonBySlugResponse>(GET_LESSON_BY_SLUG_QUERY, {
    variables: {
      slug: props.lessonSlug
    }
  })




  const playerRef = useRef<HTMLVmPlayerElement>(null);

  useEffect(() => {
    const player = playerRef.current;
    if (player) {
      player.extendLanguage?.('pt-BR', {
        play: 'Reproduzir',
        Pause: 'Pausar',
        mute: 'Silenciar',
        unmute: 'Ativar som',
        enterFullscreen: 'Tela cheia',
        exitFullscreen: 'Sair da tela cheia',
        settings: 'configuração'


      });
    }
  }, []);
  if (!data) {
    return (
      <div className="flex-1"></div>
    );
  }


  return (
    <div className="w-[calc(100%-348px)] h-full ">
      <div className="bg-black flex justify-center">
        <div className="w-full h-full max-h-[60vh] max-w-[1100px] aspect-video">
          <Player ref={playerRef} language="pt-BR" isSettingsActive={true}>
            <Youtube videoId="Lgobx1hqkrA" lang="pt-BR" />
            <DefaultUi lang="pt-BR" />
          </Player>
        </div>
      </div>

      <div className="w-full p-8 mx-auto mt-30">
        <div className="flex items-start gap-16">
          <div className="flex-1 ">
            <h1 className="text-2xl font-bold">
              {data.lesson.title}
            </h1>
            <p className="mt-4 text-gray-200 leading-relaxed ">
              {data.lesson.description}
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <a href="#" className="gap-1 p-4 bg-green-500 flex items-center text-sm rounded font-bold uppercase hover:bg-green-700 transition-colors ">
              <DiscordLogo size={24} />
              Comunidade no discord
            </a>
            <a href="#" className="flex items-center p-4 text-lg font-bold rounded border border-blue-500 text-blue-500 gap-1 transition-colors hover:bg-blue-500 hover:text-gray-900">
              <Lightning size={24} />
              Acesse o desafio
            </a>
          </div>
        </div>

        <div className="flex gap-4 mt-6 items-center">
          <img
            className="h-16 w-16 rounded-full border-4 border-blue-500"
            src={data.lesson.teacher.avatarURL}
            alt=""
          />
          <div className="leading-relaxed">
            <strong className="font-bold text-2xl block">{data.lesson.teacher.name}</strong>
            <span className="block text-sm text-gray-200">{data.lesson.teacher.bio}</span>
          </div>
        </div>
      </div>

      <div className="flex justify-between gap-8 mx-2 mt-20 mb-20">
        <a href="#" className="flex w-[502px] h-[134px] rounded items-center gap-3 bg-gray-700 hover:bg-gray-400 transition-colors">
          <div className="w-[89px] h-full rounded bg-green-700 flex items-center justify-center mr-1.5 ">
            <FileArrowDown size={39} />
          </div>
          <div className="w-[252px]">
            <strong className="font-bold text-2xl">Material complementar</strong>
            <p className="mt-2 text-sm text-gray-200">Acesse o material complementar para acelerar o seu desenvolvimento</p>
          </div>
          <CaretRight size={24} />
        </a>

        <a href="#" className="flex w-[502px] h-[134px] items-center gap-3 rounded bg-gray-700 hover:bg-gray-400 transition-colors">
          <div className="w-[89px] h-full bg-green-700 flex items-center rounded justify-center mr-1.5">
            <Image size={39} />
          </div>
          <div className="w-[252px]">
            <strong className="font-bold text-2xl">Wallpapers exclusivos</strong>
            <p className="mt-2 text-sm text-gray-200">Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina</p>
          </div>
          <CaretRight size={24} />
        </a>
      </div>

      <Footer />
    </div>
  );
}
