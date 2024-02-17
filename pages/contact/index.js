import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
  Textarea,
} from "@nextui-org/react";

import Navibar from "../../components/navbar/index";

const Contact = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div>
      <Navibar />
      <div>
        <div className="flex flex-col items-center justify-center">
          <p className="font-bold text-red-500 text-xs mt-10 md:text-sm ">
            FEEL FREE TO CONTACT US
          </p>
          <p className="font-bold text-black text-2xl py-2 md:text-3xl xl:text-4xl">
            Service Request Form
          </p>
        </div>
        <div className="flex flex-col items-center justify-center space-y-8 py-10">
          <Input
            isRequired
            radius="full"
            type="email"
            label="Email"
            className="max-w-xs md:max-w-lg xl:max-w-xl"
          />
          <Input
            isRequired
            radius="full"
            type="text"
            label="Contact Name"
            className="max-w-xs md:max-w-lg xl:max-w-xl"
          />
          <Textarea
            label="Tell us !!!"
            radius="full"
            disableAnimation
            disableAutosize
            classNames={{
              base: "max-w-xs md:max-w-lg xl:max-w-xl",
              input: "resize-y min-h-[120px]",
            }}
          />
          <Button
            className="w-28 md:w-36 xl:w-40"
            onPress={onOpen}
            radius="full"
            color="primary"
          >
            Submit
          </Button>
          <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
              {(onClose) => (
                <>
                 <ModalHeader className="flex flex-col gap-1">Alert</ModalHeader>
                  <ModalBody>
                    <p>Under Construction</p>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger" variant="light" onPress={onClose}>
                      Close
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Contact;
