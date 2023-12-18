import { FormLogin } from "@/components/form-login";
import Link from "next/link";

export default function Home() {

  return (
    <main className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
      <figure className="hidden bg-[#F3FFF2] lg:grid lg:place-items-center">
        <img src="illustration.svg" alt="" />
      </figure>
      <div className="grid place-items-center">
        <div>
          <header>
            <h2 className="text-base font-medium opacity-95 lg:text-xl">
              Bem-vindo de volta
            </h2>
            <h3 className="text-2xl font-bold lg:text-3xl">
              Faça login na sua conta
            </h3>
          </header>

          <FormLogin className="mt-10" />

          <footer className="mt-16 flex items-center justify-center font-medium">
            <span>Não tem uma conta?</span>
            <Link
              href={'/'}
              className="text-brand ml-1 hover:underline hover:underline-offset-2"
            >
              Cadastre-se
            </Link>
          </footer>
        </div>
      </div>
    </main>
  )
}
