'use client';

import {
  Button,
  useDisclosure,
  Tooltip,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
} from '@nextui-org/react';

import CreateLotForm from './forms/CreateLotForm';

const data = {
  heading: 'Single Lot Information',
  subtitle: 'Complete the form to register a new item entry.',
};

export default function Home() {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const handleOpen = () => {
    onOpen();
  };
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div>
        <div className="flex flex-wrap gap-3">
          <Tooltip
            size="sm"
            color="default"
            content="Click to insert a new item entry"
            className="capitalize"
          >
            <Button
              variant="flat"
              color="warning"
              onClick={handleOpen}
              className="capitalize"
            >
              Add New
            </Button>
          </Tooltip>
        </div>

        <Modal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          isDismissable={false}
          size="full"
        >
          <ModalContent>
            {() => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  <h1>{data.heading}</h1>
                  <p className="text-xs">{data.subtitle}</p>
                </ModalHeader>
                <ModalBody>
                  <CreateLotForm
                    enableReinitialize
                    close={onClose}
                    onSubmit={()=>{console.log("test")}}

                  />
                  <div className="h-32 block sm:hidden" />
                </ModalBody>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
    </section>
  );
}
