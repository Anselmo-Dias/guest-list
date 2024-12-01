import 'swiper/css'
import 'swiper/css/pagination'

import { ArrowDown, ArrowLeft, ArrowRight } from 'lucide-react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import foto1Img from '@/assets/foto_1.jpg'
import foto2Img from '@/assets/foto_2.jpg'
import foto3Img from '@/assets/foto_3.jpg'
import foto4Img from '@/assets/foto_4.jpg'
import foto5Img from '@/assets/foto_5.jpg'
import foto6Img from '@/assets/foto_6.jpg'
import foto7Img from '@/assets/foto_7.jpg'
import foto8Img from '@/assets/foto_8.jpg'

import { useTheme } from '../../../components/theme/theme-provider'
import { HomeForm } from './components/home-form'
import { homeStore } from '../../../store/home-store'

export function Home() {
  const { logout } = homeStore()
  const { setTheme } = useTheme()

  useEffect(() => {
    setTheme('light')
  }, [setTheme])


  return (
    <>
      <div className="flex h-screen w-full items-center justify-center bg-secondary-image bg-cover bg-center bg-no-repeat">
        <header className="wrapper fixed top-0 flex w-full items-center justify-between bg-transparent py-6 max-sm:flex-col">
          <p className="text-2xl font-semibold text-white max-sm:mb-2">G&T</p>
          <nav className="w-full max-w-xs">
            <ul className="flex items-center justify-end gap-4 max-sm:justify-center">
              <li className="text-white">
                <Link to={'/guest-list'}>Lista de convidados</Link>
              </li>
              <li className="text-white">
                <Link to={'/contact'}>Contato</Link>
              </li>
              <li className="text-white">
                <button onClick={logout}>sair</button>
              </li>
            </ul>
          </nav>
        </header>
        <div className="flex w-full max-w-3xl flex-col items-center justify-center px-2">
          <h1 className="mb-4 w-full text-center text-5xl font-bold text-muted max-sm:text-3xl">
            Juntos até a eternidade
          </h1>
          <p className="mb-6 w-full max-w-lg text-center font-medium text-muted">
            “Para que todos vejam e saibam e, juntamente, entendam que a mão do
            Senhor fez isso’’. - Isaías 41:20
          </p>

          <div className="flex flex-col items-center justify-center">
            <ArrowDown className="h-6 w-6 animate-bounce text-white" />
            <p className="text-muted">Continue descendo</p>
          </div>
        </div>
      </div>

      <main className="flex w-full flex-col items-center justify-center">
        <section className="wrapper mt-8 flex w-full flex-col items-center justify-center">
          <h2 className="text-3xl font-semibold">Momentos</h2>
          <p className="text-muted-foreground">Alguns dos nossos momentos</p>

          <div className="mt-6 flex max-w-5xl flex-wrap items-center justify-center gap-4">
            <div className="relative max-h-[153px] w-full max-w-60">
              <img
                className="h-[153px] w-[248px] rounded-lg"
                src={foto1Img}
                alt="foto do casal"
              />
              <p className="absolute bottom-2 left-4 text-lg text-white">
                10/11/2024
              </p>
            </div>

            <div className="relative max-h-[153px] w-full max-w-60">
              <img
                className="h-[153px] w-[248px] rounded-lg"
                src={foto2Img}
                alt="foto do casal"
              />
              <p className="absolute bottom-2 left-4 text-lg text-white">
                05/05/2024
              </p>
            </div>

            <div className="relative max-h-[153px] w-full max-w-60">
              <img
                className="h-[153px] w-[248px] rounded-lg"
                src={foto3Img}
                alt="foto do casal"
              />
              <p className="absolute bottom-2 left-4 text-lg text-white">
                12/06/2023
              </p>
            </div>

            <div className="relative max-h-[153px] w-full max-w-60">
              <img
                className="h-[153px] w-[248px] rounded-lg"
                src={foto4Img}
                alt="foto do casal"
              />
              <p className="absolute bottom-2 left-4 text-lg text-white">
                09/01/2024
              </p>
            </div>

            <div className="relative max-h-[153px] w-full max-w-60">
              <img
                className="h-[153px] w-[248px] rounded-lg"
                src={foto5Img}
                alt="foto do casal"
              />
              <p className="absolute bottom-2 left-4 text-lg text-white">
                07/03/2024
              </p>
            </div>

            <div className="relative max-h-[153px] w-full max-w-60">
              <img
                className="h-[153px] w-[248px] rounded-lg"
                src={foto6Img}
                alt="foto do casal"
              />
              <p className="absolute bottom-2 left-4 text-lg text-white">
                24/04/2020
              </p>
            </div>

            <div className="relative max-h-[153px] w-full max-w-60">
              <img
                className="h-[153px] w-[248px] rounded-lg"
                src={foto7Img}
                alt="foto do casal"
              />
              <p className="absolute bottom-2 left-4 text-lg text-white">
                24/11/2022
              </p>
            </div>

            <div className="relative max-h-[153px] w-full max-w-60">
              <img
                className="h-[153px] w-[248px] rounded-lg"
                src={foto8Img}
                alt="foto do casal"
              />
              <p className="absolute bottom-2 left-4 text-lg text-white">
                20/10/2023
              </p>
            </div>
          </div>
        </section>

        <section className="wrapper mb-8 mt-12 w-full max-w-5xl">
          <p className="mb-4 text-xl font-semibold text-muted-foreground">
            Eclesiastes 4:12
          </p>
          <div className="flex items-start gap-12 rounded-r-lg shadow-lg max-md:flex-col">
            <img
              src={foto2Img}
              alt=""
              className="min-h-[467px] w-full max-w-[361px] max-md:h-[300px] max-md:w-full max-md:max-w-[700px] max-md:rounded-lg"
            />

            <div className="flex min-h-[450px] flex-col justify-between pr-4 font-mono antialiased">
              <div>
                <h3 className="text-gra mb-1 text-3xl font-bold">
                  O amor não é apenas uma emoção
                </h3>
                <p className="mb-4 font-normal text-muted-foreground">G&T</p>
                <p className="mb-8">
                  {` O amor não é apenas uma emoção terrena, mas sim um presente
                  divino. Somos lembrados em Eclesiastes 4:12 "O cordão de três
                  dobras não se rompe com facilidade". Assim, essa união está
                  entregue aos cuidados do Senhor, confiando que Ele é a
                  terceira dobra que fortalece e sustenta.`}
                </p>
              </div>

              <div className="flex h-full w-full items-center justify-between max-md:pb-4">
                <ArrowLeft className="h-5 w-5 cursor-pointer text-muted-foreground" />
                <ArrowRight className="h-5 w-5 cursor-pointer text-muted-foreground" />
              </div>
            </div>
          </div>
        </section>

        <HomeForm />
      </main>
    </>
  )
}
