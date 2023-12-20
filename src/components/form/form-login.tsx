"use client"
import { getCookie, setCookie } from 'cookies-next'
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { auth, cn, provider } from "@/lib"
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth"

import { Button, Checkbox, Form, FormControl, FormField, FormItem, FormLabel, FormMessage, Input, Label } from "@/components/ui"

const formSchema = z.object({
  email: z.string().min(1, {
    message: "Digite uma e-mail válido."
  }).email('Digite uma e-mail válido'),
  password: z.string().min(8, {
    message: "Sua senha precisar ter no mínimo 8 caracteres.",
  }),
})

type FormLoginProps = {
  className?: string
}

export function FormLogin({ className }: FormLoginProps) {

  const router = useRouter()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: ''
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        setCookie('token', userCredential.user.getIdToken())
        router.push('/profile')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(errorCode, errorMessage)
      });
  }

  function onLoginGoogle() {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);

        setCookie('token', credential?.idToken)
        getCookie('userName')
        setCookie('userName', result.user.displayName)

        router.push('/profile')
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;

        console.log(errorCode, errorMessage, email)
      });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={cn(className)}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>E-mail</FormLabel>
              <FormControl>
                <Input placeholder="exemplo@gmail.com" {...field} type="email" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <div className="mt-8 space-y-4">
              <FormItem>
                <FormLabel>Senha</FormLabel>
                <FormControl>
                  <Input placeholder="0123456789" {...field} type="password" />
                </FormControl>
                <FormMessage />
              </FormItem>

              <div className="flex items-center justify-between">
                <div className="inline-flex cursor-pointer items-center gap-2">
                  <Checkbox id='remind-me' className="rounded-full" />
                  <Label htmlFor="remind-me" className="cursor-pointer">Lembre de mim</Label>
                </div>


                <Link href={'/'} className="text-brand text-sm hover:underline hover:underline-offset-2">
                  Esqueceu sua senha?
                </Link>

              </div>
            </div>
          )}
        />

        <div className="mt-14 space-y-6">
          <Button type="submit">Entrar na conta</Button>
        </div>
      </form>

      <Button className='mt-4' onClick={onLoginGoogle} variant={'secondary'}>
        <Image src='icon-login-google.svg' alt='Ícone de login google' width={24} height={24} />
        Ou faça login com o Google

      </Button>
    </Form>
  )
}
