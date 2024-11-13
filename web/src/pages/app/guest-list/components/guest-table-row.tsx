import { Eye } from 'lucide-react'

import { Button } from '../../../../components/ui/button'
import { Dialog, DialogTrigger } from '../../../../components/ui/dialog'
import { TableCell, TableRow } from '../../../../components/ui/table'
import { GuestDetails } from './guest-details'

export function GuestTableRow() {
  return (
    <TableRow>
      <TableCell>Cicada</TableCell>
      <TableCell>20</TableCell>
      <TableCell>2</TableCell>
      <TableCell>Vou comer mt</TableCell>
      <TableCell>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="xs">
              <Eye className="h-3 w-3" />
              <span className="sr-only">ver detalhes</span>
            </Button>
          </DialogTrigger>

          <GuestDetails />
        </Dialog>
      </TableCell>
    </TableRow>
  )
}
