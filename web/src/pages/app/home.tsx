import 'swiper/css'
import 'swiper/css/pagination'

import { zodResolver } from '@hookform/resolvers/zod'
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  PlusCircle,
  Trash,
} from 'lucide-react'
import { useState } from 'react'
import { Controller, useFieldArray, useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

import aboutImg from '@/assets/about.png'
import guestImg from '@/assets/guest.png'
import locationImg from '@/assets/location.png'

import { Button } from '../../components/ui/button'
import { Checkbox } from '../../components/ui/checkbox'
import { Input } from '../../components/ui/input'
import { Separator } from '../../components/ui/separator'
import { Textarea } from '../../components/ui/textarea'

const dynamicFieldSchema = z.object({
  companionName: z
    .string()
    .max(50, { message: 'Nome do acompanhante muito grande' }),
  companionAge: z.coerce.number(),
  companionBond: z.string(),
})

const formSchema = z.object({
  guestName: z.string().max(50, { message: 'Nome muito grande' }),
  guestAge: z.coerce.number(),
  guestInformation: z.string().max(250, { message: 'Mensagem muito grande' }),
  hasCompanion: z.coerce.boolean().default(false),
  dynamicFields: z.array(dynamicFieldSchema),
})

type IGuestForm = z.infer<typeof formSchema>

export function Home() {
  const [hasCompanion, setHasCompanion] = useState(false)
  const { control, register, handleSubmit } = useForm<IGuestForm>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      guestName: '',
      guestInformation: '',
      hasCompanion: false,
      dynamicFields: [{ companionName: '', companionBond: '' }],
    },
  })

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'dynamicFields',
  })

  async function handleRegister(data: IGuestForm) {
    console.log(data)
    toast.success('Cadastro realizado com sucesso!')
  }

  return (
    <>
      <div className="flex h-screen w-full items-center justify-center bg-secondary-image bg-cover bg-center bg-no-repeat">
        <header className="wrapper fixed top-0 flex w-full items-center justify-between bg-transparent py-6 max-sm:flex-col">
          <p className="text-2xl font-semibold text-white max-sm:mb-2">G&T</p>
          <nav className="w-full max-w-xs">
            <ul className="flex items-center justify-end gap-4 max-sm:justify-center">
              <li className="text-white">
                <Link to={'/sign-in'}>Lista de convidados</Link>
              </li>
              <li className="text-white">
                <Link to={'/sign-in'}>Contato</Link>
              </li>
            </ul>
          </nav>
        </header>

        <div className="flex w-full max-w-3xl flex-col items-center justify-center px-2">
          <h1 className="mb-4 w-full text-center text-5xl font-bold max-sm:text-3xl">
            Discover your perfect Italian wedding venue
          </h1>
          <p className="mb-6 w-full max-w-lg text-center">
            Sagittis adipiscing posuere id adipiscing aliquam posuere. Aliquet
            faucibus duis accumsan aliquet tempor diam dignissim suscipit. Nibh
            urna ut diam fames.
          </p>

          <div className="flex flex-col items-center justify-center">
            <ArrowDown className="h-6 w-6 animate-bounce" />
            <p>Continue descendo</p>
          </div>
        </div>
      </div>

      <main className="flex w-full flex-col items-center justify-center">
        <section className="wrapper mt-8 flex w-full flex-col items-center justify-center">
          <h2 className="text-3xl font-semibold">Momentos</h2>
          <p className="text-muted-foreground">Alguns dos nossos momentos</p>

          <div className="mt-6 flex max-w-5xl flex-wrap items-center justify-center gap-4">
            <div className="relative max-h-[153px] w-full max-w-60">
              <img className="w-full" src={guestImg} alt="Florida" />
              <p className="absolute bottom-2 left-4 text-lg text-white">
                Florida
              </p>
            </div>

            <div className="relative max-h-[153px] w-full max-w-60">
              <img className="w-full" src={guestImg} alt="Florida" />
              <p className="absolute bottom-2 left-4 text-lg text-white">
                Florida
              </p>
            </div>

            <div className="relative max-h-[153px] w-full max-w-60">
              <img className="w-full" src={guestImg} alt="Florida" />
              <p className="absolute bottom-2 left-4 text-lg text-white">
                Florida
              </p>
            </div>

            <div className="relative max-h-[153px] w-full max-w-60">
              <img className="w-full" src={guestImg} alt="Florida" />
              <p className="absolute bottom-2 left-4 text-lg text-white">
                Florida
              </p>
            </div>

            <div className="relative max-h-[153px] w-full max-w-60">
              <img className="w-full" src={guestImg} alt="Florida" />
              <p className="absolute bottom-2 left-4 text-lg text-white">
                Florida
              </p>
            </div>

            <div className="relative max-h-[153px] w-full max-w-60">
              <img className="w-full" src={guestImg} alt="Florida" />
              <p className="absolute bottom-2 left-4 text-lg text-white">
                Florida
              </p>
            </div>

            <div className="relative max-h-[153px] w-full max-w-60">
              <img className="w-full" src={guestImg} alt="Florida" />
              <p className="absolute bottom-2 left-4 text-lg text-white">
                Florida
              </p>
            </div>

            <div className="relative max-h-[153px] w-full max-w-60">
              <img className="w-full" src={guestImg} alt="Florida" />
              <p className="absolute bottom-2 left-4 text-lg text-white">
                Florida
              </p>
            </div>
          </div>
        </section>

        <section className="wrapper mb-8 mt-12 w-full max-w-5xl">
          <p className="mb-4 text-xl font-semibold text-muted-foreground">
            Featured venues
          </p>
          <div className="flex items-start gap-12 rounded-r-lg shadow-lg">
            <img
              src={aboutImg}
              alt=""
              className="min-h-[467px] w-full max-w-[361px]"
            />

            <div className="flex min-h-[450px] flex-col justify-between pr-4 font-mono antialiased">
              <div>
                <h3 className="text-gra mb-1 text-3xl font-bold">
                  Villa Balbianello
                </h3>
                <p className="mb-4 font-normal text-muted-foreground">
                  Lake Como
                </p>
                <p className="mb-8">
                  The whole complex consists of two residential buildings, a
                  church, and a portico (known as Loggia Durini) that can host
                  weddings and events in a truly unique setting. But the special
                  feature of Villa Balbianello is above all the vast garden that
                  surrounds the dwellings, with magnificent holm oaks pruned
                  into an umbrella shape so as to offer a splendid view of Lake
                  Como from inside the The whole complex consists of two
                  residential buildings, a church, and a portico known as Loggia
                  Durini that
                </p>
              </div>

              <div className="flex h-full w-full items-center justify-between">
                <ArrowLeft className="h-5 w-5 cursor-pointer text-muted-foreground" />
                <ArrowRight className="h-5 w-5 cursor-pointer text-muted-foreground" />
              </div>
            </div>
          </div>
        </section>

        <section className="wrapper w-full max-w-5xl pb-8 font-mono antialiased">
          <h4 className="text-foreground4 mb-1 text-3xl font-semibold">
            Formulario
          </h4>
          <p className="mb-6 font-normal text-muted-foreground">
            Você ira participar? Preencha o formulario para que o responsável
            saiba disso
          </p>

          <form
            onSubmit={handleSubmit(handleRegister)}
            className="grid w-full grid-cols-2 gap-2 font-mono"
          >
            <div className="flex w-full flex-col gap-2">
              <Input
                type="text"
                placeholder="Nome"
                className="max-w-2xl"
                {...register('guestName')}
              />
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
                  onCheckedChange={(checked: boolean) =>
                    setHasCompanion(checked)
                  }
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
                              placeholder="Nome"
                              className="w-1/4"
                            />
                          )}
                        />
                        <Controller
                          control={control}
                          name={`dynamicFields.${index}.companionAge`}
                          render={({ field }) => (
                            <Input
                              {...field}
                              placeholder="Idade"
                              className="w-1/4"
                            />
                          )}
                        />
                        <Controller
                          control={control}
                          name={`dynamicFields.${index}.companionBond`}
                          render={({ field }) => (
                            <Input
                              {...field}
                              placeholder="Vinculo Ex.: Esposo(a), filho, neto"
                              className="w-1/2"
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
            <div className="col flex w-full flex-col items-center">
              <img src={locationImg} alt="" className="w-[250px]" />

              <div className="mt-6 text-left text-muted-foreground">
                <p className="mb-2 font-semibold text-foreground">
                  Head office
                </p>
                <p>Via Roma, Milano Italy</p>

                <p>Phone: +39 322 221211</p>
              </div>
            </div>
          </form>
        </section>
      </main>
    </>
  )
}
