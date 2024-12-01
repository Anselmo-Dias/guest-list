import { Eye, Trash } from 'lucide-react'

import { Button } from '../../../../components/ui/button'
import { Dialog, DialogTrigger } from '../../../../components/ui/dialog'
import { TableCell, TableRow } from '../../../../components/ui/table'
import { IGuestList, IUsersList } from '../../../../interfaces/guest-list-interface'
import { GuestDetails } from './guest-details'
import { guestListStore } from '../../../../store/guest-list-store'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

interface IGuestTableRowProps {
  item: IGuestList
}
export function GuestTableRow({ item }: IGuestTableRowProps) {
  const { deleteGuest } = guestListStore()
  const queryClient = useQueryClient()

  const { mutateAsync: deleteItem} = useMutation({
    mutationFn: deleteGuest,
    onSuccess(_, id) {
      const cached = queryClient.getQueryData(['guestList']) as IUsersList

      if(cached?.users.length) {
        const newValue = cached?.users?.filter((item) => item.id !== id)
        queryClient.setQueryData(['guestList'], {
          users: newValue
        })
      }
    }
  })

  async function hadleDeleteGuest(id: string) {
    try {
      await deleteItem(id)
      toast.success('Convidado deletado com sucesso')
    } catch {
      toast.error('Erro ao tentar deletar convidado')
    }
  }
  
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
          <div className='flex items-center gap-1'>
            <DialogTrigger asChild>
              <Button variant="outline" size="xs">
                <Eye className="h-3 w-3" />
                <span className="sr-only">ver detalhes</span>
              </Button>
            </DialogTrigger>
              <Button onClick={() => hadleDeleteGuest(item.id)} variant="outline" size="xs">
                <Trash className="h-3 w-3" />
                <span className="sr-only">deletar</span>
              </Button>
          </div>

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
