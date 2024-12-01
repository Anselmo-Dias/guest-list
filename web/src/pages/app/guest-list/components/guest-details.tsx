import { DialogDescription, DialogTitle } from '@radix-ui/react-dialog'
import { ArrowDown } from 'lucide-react'

import { DialogContent, DialogHeader } from '../../../../components/ui/dialog'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../../../../components/ui/table'
import { IBond } from '../../../../interfaces/guest-list-interface'

interface IGuestDetailsProps {
  guestName: string
  guestMessage: string
  guestBond: IBond[]
}

export function GuestDetails({
  guestName,
  guestBond,
  guestMessage,
}: IGuestDetailsProps) {
  if (!guestBond?.length) {
    return (
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Este convidado não possui vinculos</DialogTitle>
          <DialogDescription>Comentário: {guestMessage}</DialogDescription>
        </DialogHeader>
      </DialogContent>
    )
  }
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Vinculo(s) do convidado: {guestName}</DialogTitle>
        <DialogDescription>Comentário: {guestMessage}</DialogDescription>
        <DialogDescription className="flex items-center gap-1">
          Todos vínculos <ArrowDown />
        </DialogDescription>
      </DialogHeader>

      <div className="space-y-6">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Nome</TableHead>
              <TableHead className="flex-1">Idade</TableHead>
              <TableHead className="flex items-center justify-end">
                Vínculo
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {guestBond?.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item?.age}</TableCell>
                <TableCell className="flex justify-end">{item.bond}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </DialogContent>
  )
}
