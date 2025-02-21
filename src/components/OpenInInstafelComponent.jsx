import { Button } from "./ui/button";
import { useImportInInstafelModal } from "./useImportInInstafelModal";

export function OpenInInstafelComponent ({ authorName, showAuthorSocials, authorData }) {
  const { ImportInInstafelModal, openModal } = useImportInInstafelModal();

  return (
    <div>
      <Button onClick={openModal} variant="outline" size="lg">
        Import in Instafel
      </Button>
      <ImportInInstafelModal />
    </div>
  );
}
