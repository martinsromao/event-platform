import { useState, type FormEvent } from "react";
import { Footer } from "../components/Footer";
import { Logo } from "../components/Logo"
import { useNavigate } from "react-router-dom";
import { useCreateSubcribeMutation } from "../graphql/generated";



export function Subscribe() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [createSubcribe, { loading }] = useCreateSubcribeMutation();
  const navigate = useNavigate()

  async function handleSubcribe(event: FormEvent) {
    event.preventDefault();
    await createSubcribe({
      variables: {
        name,
        email
      }
    })

    navigate('/event')

  }
  return (
    <div className="flex flex-col min-h-screen bg-[url(src/assets/blur.png)] bg-cover bg-no-repeat ">
      <div className="flex gap-24 w-full ml-[50px] mr-[50px] items-center mt-[121px] ">
        <div className="w-[624px] relative">
          <Logo />
          <h1 className="text-[2.5rem] mt-8 leading-tight">
            Construa uma <strong className="text-blue-500">aplicação completa</strong>, <br />do zero,com <strong className="text-blue-500">React</strong>  </h1>
          <p className="text-[1rem] leading-relaxed text-gray-200 mt-4">Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.</p>
        </div>
        <img src="src\assets\ReactJS icon.svg" alt=""
          className="absolute left-60 top-10"
        />
        <div className="w-[391px] border-2 border-gray-500 rounded p-8 relative">
          <strong className="text-2xl mb-6 block font-bold">Inscreva-se gratuitamente</strong>
          <form className="flex flex-col gap-2
           w-full " onSubmit={handleSubcribe}>
            <input
              required
              onChange={event => setName(event.target.value)}
              className="bg-gray-900 p-4"
              type="text" placeholder="Seu nome completo"
            />
            <input
              required
              onChange={event => setEmail(event.target.value)}
              className="bg-gray-900 p-4"
              type="text" placeholder="Digite seu email" />

            <button type="submit"
              disabled={loading}
              className="p-4  bg-green-500 rounded mt-6 uppercase leading-8 text-sm cursor-pointer disabled:opacity-50"
            >
              garantir minha vaga
            </button>
          </form>
        </div>

      </div>


      <img src="\src\assets\Group 7735.png" alt="" />

      <Footer />
    </div>
  );
}