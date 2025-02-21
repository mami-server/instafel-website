import { useState, useCallback } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export function useImportInInstafelModal() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);

  const ImportInInstafelModal = useCallback(
    (props) => (
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Not Available</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col space-y-4">
            <a>This feature is still under development, but you can use in-app backup library (also its recommended)!</a>
          </div>
        </DialogContent>
      </Dialog>
    ),
    [isOpen]
  );

  return { ImportInInstafelModal, openModal, closeModal };
}
