import { DialogDescription, DialogTitle } from '@radix-ui/react-dialog'

import { DialogContent, DialogHeader } from '../../../../components/ui/dialog'
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from '../../../../components/ui/table'

export function GuestDetails() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Vinculo do convidado: Cicada</DialogTitle>
        <DialogDescription>Detalhes dos vinculos</DialogDescription>
      </DialogHeader>

      <div className="space-y-6">
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className="text-muted-foreground">Bianca</TableCell>
              <TableCell className="flex justify-end">amiga</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </DialogContent>
  )
}
