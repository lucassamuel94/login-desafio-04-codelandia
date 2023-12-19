'use client'

import { Button } from "@/components/ui";
import { deleteCookie } from "cookies-next";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const router = useRouter()

  function LogOutUser() {
    deleteCookie('token')
    router.push('/')
  }

  return (
    <main className="container grid min-h-screen place-items-center">
      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-bold lg:text-4xl">Olá, seja bem vindo(a)! </h2>
        <p className="text-gray-20 mt-3 text-sm lg:text-lg">O seu login foi realizado com sucesso</p>

        <Button
          onClick={LogOutUser}
          className="mt-8 w-max">
          Sair
        </Button>
      </div>
    </main>
  )
}