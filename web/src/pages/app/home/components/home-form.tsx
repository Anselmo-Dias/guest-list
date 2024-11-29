import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { PlusCircle, Trash } from 'lucide-react'
import { useState } from 'react'
import { Controller, useFieldArray, useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '../../../../components/ui/button'
import { Checkbox } from '../../../../components/ui/checkbox'
import { Input } from '../../../../components/ui/input'
import { Separator } from '../../../../components/ui/separator'
import { Textarea } from '../../../../components/ui/textarea'
import { homeStore } from '../../../../store/home-store'

const dynamicFieldSchema = z.object({
  companionName: z
    .string()
    .min(1, 'Campo obrigatório')
    .max(50, { message: 'Este campo deve conter no mínimo 50 caracteres' }),
  companionAge: z.coerce.number().optional(),
  companionBond: z
    .string()
    .min(1, 'Campo obrigatório')
    .max(50, 'Este campo deve conter no mínimo 50 caracteres'),
})

const formSchema = z.object({
  guestName: z
    .string()
    .min(1, 'Campo obrigatório')
    .max(50, { message: 'Este campo deve conter no mínimo 50 caracteres' }),
  guestAge: z.coerce.number().max(255).optional(),
  guestInformation: z
    .string()
    .max(250, { message: 'Este campo deve conter no maximo 250 caracteres' }),
  hasCompanion: z.coerce.boolean().default(false),
  dynamicFields: z.array(dynamicFieldSchema).optional(),
})

export type IGuestForm = z.infer<typeof formSchema>

export function HomeForm() {
  const { createGuest } = homeStore()
  const [hasCompanion, setHasCompanion] = useState(false)

  const {
    reset,
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IGuestForm>({
    resolver: zodResolver(formSchema),
  })

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'dynamicFields',
  })

  const { mutateAsync: registerGuest } = useMutation({
    mutationFn: createGuest,
  })

  async function handleRegister(data: IGuestForm) {
    try {
      const guestBond = data.dynamicFields?.map((item) => {
        return {
          name: item.companionName,
          age: item.companionAge || 0,
          bond: item.companionBond,
        }
      })

      await registerGuest({
        name: data.guestName,
        age: data.guestAge || 0,
        message: data.guestInformation,
        bond: guestBond || [],
      })
      reset()
      toast.success('Cadastro realizado com sucesso')
    } catch {
      toast.error('Error ao realizar cadastro ')
    }
  }

  return (
    <section className="wrapper w-full max-w-5xl pb-8 font-mono antialiased">
      <h4 className="text-foreground4 mb-1 text-3xl font-semibold">
        Formulario
      </h4>
      <p className="mb-6 w-[686px] font-normal text-muted-foreground">
        Confirme sua participação preenchendo o formulário para que o
        responsável seja informado.
      </p>

      <form
        onSubmit={handleSubmit(handleRegister)}
        className="w-ful max-2-3xl font-mono"
      >
        <div className="flex w-full flex-col gap-2">
          <Input
            type="text"
            placeholder="Nome"
            className="max-w-2xl"
            {...register('guestName')}
          />
          {errors?.guestName?.message && (
            <p className="text-red-600">{errors?.guestName?.message}</p>
          )}
          {}
          <Input
            type="number"
            placeholder="Idade"
            className="max-w-2xl"
            {...register('guestAge')}
          />
          <Textarea
            className="max-w-2xl"
            placeholder="Infomrações adicionais - opicional"
            {...register('guestInformation')}
          />
          <div className="flex items-center gap-2">
            <Checkbox
              id="terms"
              {...register('hasCompanion')}
              onCheckedChange={(checked: boolean) => setHasCompanion(checked)}
            />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Possuo acompanhate{'(s)'}
            </label>
          </div>

          {hasCompanion && (
            <div className="mt-6 flex max-w-2xl flex-col justify-start gap-4">
              <div className="flex items-center justify-between">
                <h5 className="text-xl font-semibold">
                  Adicionar acompanhante
                </h5>
                <Button
                  type="button"
                  className="bg-green-600 hover:bg-green-700"
                  onClick={() =>
                    append({
                      companionName: '',
                      companionAge: 0,
                      companionBond: '',
                    })
                  }
                >
                  <PlusCircle className="h-5 w-5" />
                </Button>
              </div>

              <div className="flex w-full flex-col gap-2">
                {fields.map((field, index) => (
                  <div className="gap-2s flex w-full gap-2" key={field.id}>
                    <Controller
                      control={control}
                      name={`dynamicFields.${index}.companionName`}
                      render={({ field }) => (
                        <Input
                          {...field}
                          data-error={
                            !!errors.dynamicFields?.[index]?.companionName
                          }
                          placeholder="Nome"
                          className="w-1/4 data-[error=true]:border data-[error=true]:border-solid data-[error=true]:border-red-600"
                        />
                      )}
                    />
                    <Controller
                      control={control}
                      name={`dynamicFields.${index}.companionAge`}
                      render={({ field }) => (
                        <Input
                          {...field}
                          data-error={
                            !!errors.dynamicFields?.[index]?.companionAge
                          }
                          placeholder="Idade"
                          className="w-1/4 data-[error=true]:border data-[error=true]:border-solid data-[error=true]:border-red-600"
                        />
                      )}
                    />
                    <Controller
                      control={control}
                      name={`dynamicFields.${index}.companionBond`}
                      render={({ field }) => (
                        <Input
                          {...field}
                          data-error={
                            !!errors.dynamicFields?.[index]?.companionBond
                          }
                          placeholder="Vinculo Ex.: Esposo(a), filho, neto"
                          className="w-1/2 data-[error=true]:border data-[error=true]:border-solid data-[error=true]:border-red-600"
                        />
                      )}
                    />
                    <Button
                      type="button"
                      className="bg-red-600 hover:bg-red-700"
                      onClick={() => remove(index)}
                    >
                      <Trash className="h-5 w-5" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          )}

          <Separator className="my-4 max-w-2xl" />

          <Button
            type="submit"
            className="max-w-2xl bg-gray-600 hover:bg-gray-700"
          >
            Cadastrar
          </Button>
        </div>
      </form>
    </section>
  )
}
