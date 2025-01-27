import { ModalBody,Modal,ModalContent,ModalFooter, Button } from "@nextui-org/react";

export default function ConfirmationModal({isOpen, onOpenChange})
{
    return <div>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}
        backdrop="blur"
        size="xl"
        radius="lg"
        scrollBehavior="inside"
        >
            <ModalContent>
          {(onClose) => (
            <>
             <ModalBody>
                Are you sure you want to save challan to system?

             </ModalBody>
             <ModalFooter>
                <Button color="success" variant="light" onPress={onClose}>
                  Submit
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
        </Modal>
    </div>
}