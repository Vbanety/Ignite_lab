import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Logo } from "../components/Logo";
import { useCreateSubscriberMutation } from "../graphql/generated";

import Mockup from '../assets/code-mockup.png'

export function Subscribe() {

  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const [createSubscriber, { loading }] = useCreateSubscriberMutation()
  
  async function handleSubscribe(event: FormEvent) {
    event.preventDefault()
    
    await createSubscriber({
      variables: {
        name, 
        email
      }
    })

    navigate('/event')
  }

  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
      <div className="w-full max-w-[1100px] flex flex-col items-center justify-between mt-20 mx-auto md:flex-row">
        <div className="m-0 w-full md:max-w-[640px] md:m-auto">
          <div className="flex justify-center w-full m-auto md:mb-4 md:w-auto md:justify-start">
            <Logo />
          </div>
          <h1 className="m-auto p-2 text-center md:text-left text-[1.9rem] md:mt-8 md:text-[2.5rem] leading-tight md:p-0">
            Construa uma <strong className="text-blue-500">aplicação completa</strong>, do zero, com <strong className="text-blue-500">React</strong> JS
          </h1>
          <p className="m-auto p-2 mb-4 text-center md:text-left md:mt-4 text-gray-200 leading-tight md:p-0">
            Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
          </p>
        </div>

        <div className="w-full p-8 bg-gray-700 border border-gray-500 rounded md:w-auto">
          <strong className="text-2xl mb-6 block">Escreva-se gratuitamente</strong>

          <form onSubmit={handleSubscribe} action="" className="flex flex-col gap-2 w-full" method="post">
            <input
              className="bg-gray-900 rounded px-5 h-14"
              type="text"
              placeholder="Seu nome completo"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="bg-gray-900 rounded px-5 h-14"
              type="email"
              placeholder="Digite seu e-mail"
              onChange={(e) => setEmail(e.target.value)}
            />

            <button
              type="submit"
              disabled={loading}
              className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
            >
              Garantir minha vaga
            </button>
          </form>
        </div>
      </div>
      {/* <img src={Mockup} alt="mockup" className="mt-10" /> */}
      <img src="/assets/code-mockup.png" className="mt-10" alt="mockup" />
      <Footer />
    </div>
  )
}