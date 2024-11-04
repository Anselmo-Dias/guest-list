import { zodResolver } from '@hookform/resolvers/zod'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '../../components/ui/button'
import { Input } from '../../components/ui/input'
import { Label } from '../../components/ui/label'

const signInFormSchema = z.object({
  word: z.string().min(1, { message: 'Esse campo é obrigatório' }),
})

type ISignInForm = z.infer<typeof signInFormSchema>

export function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<ISignInForm>({
    resolver: zodResolver(signInFormSchema),
  })

  function handleSignIn(data: ISignInForm) {
    console.log(data)
  }

  return (
    <>
      <Helmet title="Login" />

      <div className="flex w-full items-center justify-center overflow-x-hidden p-8">
        <div className="flex w-full max-w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Acessar lista de convidados
            </h1>

            <p className="text-sm text-muted-foreground">
              Acompanhe e se cadastre na lista de convidados
            </p>
          </div>

          <form onSubmit={handleSubmit(handleSignIn)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="word">Palavra chave</Label>
              <Input
                id="word"
                type="text"
                className="w-full"
                {...register('word')}
              />
              {errors.word?.message && (
                <p className="text-red-700">{errors.word?.message}</p>
              )}
            </div>

            <Button disabled={isSubmitting} className="w-full" type="submit">
              Acessar
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}
