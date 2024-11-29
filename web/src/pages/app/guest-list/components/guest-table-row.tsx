import { Eye } from 'lucide-react'

import { Button } from '../../../../components/ui/button'
import { Dialog, DialogTrigger } from '../../../../components/ui/dialog'
import { TableCell, TableRow } from '../../../../components/ui/table'
import { IGuestList } from '../../../../interfaces/guest-list-interface'
import { GuestDetails } from './guest-details'

interface IGuestTableRowProps {
  item: IGuestList
}
export function GuestTableRow({ item }: IGuestTableRowProps) {
  return (
    <TableRow>
      <TableCell>{item.name}</TableCell>
      <TableCell>{item.age}</TableCell>
      <TableCell>{item.bond?.length ?? ''}</TableCell>
      <TableCell>
        {item.message ? item.message.slice(0, 20).concat('...') : ''}
      </TableCell>
      <TableCell>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="xs">
              <Eye className="h-3 w-3" />
              <span className="sr-only">ver detalhes</span>
            </Button>
          </DialogTrigger>

          <GuestDetails
            guestName={item.name}
            guestMessage={item?.message}
            guestBond={item.bond}
          />
        </Dialog>
      </TableCell>
    </TableRow>
  )
}
