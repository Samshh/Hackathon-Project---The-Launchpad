import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from '@/components/ui/sheet-custom';
import { useGlobalSheetStore } from './store';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';

export default function GlobalSheet() {
  const { isOpen, toggleOpen, content } = useGlobalSheetStore();
  return (
    <Sheet open={isOpen} onOpenChange={toggleOpen}>
      <SheetContent className="flex flex-col min-w-fit">
        <VisuallyHidden.Root>
          <SheetHeader>
            <SheetTitle><VisuallyHidden.Root></VisuallyHidden.Root></SheetTitle>
            <SheetDescription><VisuallyHidden.Root></VisuallyHidden.Root></SheetDescription>
          </SheetHeader>
        </VisuallyHidden.Root>
        {content}
      </SheetContent>
    </Sheet>
  );
}
