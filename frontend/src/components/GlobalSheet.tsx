import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from '@/components/ui/sheet-custom';
import { useGlobalComponentStore } from './globalComponentStore';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
import { useShallow } from 'zustand/react/shallow';
import { useEffect } from 'react';

export default function GlobalSheet() {
  const [isSheetOpen, toggleOpenSheet, sheetContent] = useGlobalComponentStore(
    useShallow((state) => [state.isSheetOpen, state.toggleOpenSheet, state.sheetContent]),
  );

  useEffect(() => {
    console.log(isSheetOpen);
  }, [isSheetOpen]);
  
  return (
    <Sheet open={isSheetOpen} onOpenChange={toggleOpenSheet}>
      <SheetContent className="flex flex-col min-w-fit">
        <VisuallyHidden.Root>
          <SheetHeader>
            <SheetTitle>
              <VisuallyHidden.Root />
            </SheetTitle>
            <SheetDescription>
              <VisuallyHidden.Root />
            </SheetDescription>
          </SheetHeader>
        </VisuallyHidden.Root>
        {sheetContent}
      </SheetContent>
    </Sheet>
  );
}
