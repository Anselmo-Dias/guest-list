import 'swiper/css'
import 'swiper/css/pagination'

import { ArrowDown, ArrowLeft, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

import aboutImg from '@/assets/about.png'
import guestImg from '@/assets/guest.png'

export function Home() {
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

        <section className="mt-12 w-full max-w-5xl pb-8">
          <p className="mb-4 text-xl font-semibold text-muted-foreground">
            Featured venues
          </p>
          <div className="flex items-start gap-12 rounded-r-lg shadow-lg">
            <img
              src={aboutImg}
              className="min-h-[467px] w-full max-w-[361px]"
            />

            <div className="flex min-h-[450px] flex-col justify-between pr-4 font-mono">
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
      </main>
    </>
  )
}
