import { Helmet } from 'react-helmet-async'

import { Pagination } from '../../../components/pagination'
import { Input } from '../../../components/ui/input'
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '../../../components/ui/table'
import { GuestTableRow } from './components/guest-table-row'

export function GuestList() {
  return (
    <>
      <Helmet title="Convidados" />

      <div className="flex w-full flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Convidados</h1>

        <div className="space-y-2.5">
          <form className="flex items-center gap-2">
            <span className="text-sm font-semibold">Filtros</span>
            <Input placeholder="Nome do convidado" className="h-8 w-[320px]" />
          </form>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[240px]">Nome</TableHead>
                  <TableHead className="w-[240px]">Idade</TableHead>
                  <TableHead className="w-[370px]">
                    Quantidade de vinculos
                  </TableHead>
                  <TableHead>Comentário</TableHead>
                  <TableHead className="w-[100px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {Array.from({ length: 10 }).map((_, i) => {
                  return <GuestTableRow key={i} />
                })}
              </TableBody>
            </Table>
          </div>

          <Pagination pageIndex={0} totalCont={108} perPage={5} />
        </div>
      </div>
    </>
  )
}
