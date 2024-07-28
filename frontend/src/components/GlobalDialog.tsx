import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useGlobalComponentStore } from './globalComponentStore';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
import { useShallow } from 'zustand/react/shallow';

export default function GlobalDialog() {
  const [isDialogOpen, dialogContent, toggleOpenDialog] = useGlobalComponentStore(
    useShallow((state) => [state.isDialogOpen, state.dialogContent, state.toggleOpenDialog]),
  );
  return (
    <Dialog open={isDialogOpen} onOpenChange={toggleOpenDialog}>
      <DialogContent className="min-w-fit">
        <VisuallyHidden.Root>
          <DialogHeader>
            <DialogTitle>
              <VisuallyHidden.Root />
            </DialogTitle>
            <DialogDescription>
              <VisuallyHidden.Root />
            </DialogDescription>
          </DialogHeader>
        </VisuallyHidden.Root>
        {dialogContent}
      </DialogContent>
    </Dialog>
  );
}
