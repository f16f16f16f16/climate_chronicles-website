import React, { useState } from "react";
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

  // State to store input values
  const [email, setEmail] = useState("");
  const [contactName, setContactName] = useState("");

  // State to manage input validation
  const [isEmailInvalid, setEmailInvalid] = useState(false);
  const [isContactNameInvalid, setContactNameInvalid] = useState(false);

  // State to manage modal message
  const [modalMessage, setModalMessage] = useState("");

  // Function to handle email change
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    // Update isEmailInvalid state based on whether the input is empty
    setEmailInvalid(!value);
  };

  // Function to handle contact name change
  const handleContactNameChange = (e) => {
    const value = e.target.value;
    setContactName(value);
    // Update isContactNameInvalid state based on whether the input is empty
    setContactNameInvalid(!value);
  };

  // Function to handle form submission
  const handleSubmit = () => {
    let hasError = false;

    if (!email) {
      setEmailInvalid(true);
      hasError = true;
    }

    if (!contactName) {
      setContactNameInvalid(true);
      hasError = true;
    }

    if (hasError) {
      setModalMessage(
        "Missing information. Please check your entries and try again."
      );
    } else {
      setModalMessage(
        "This form is currently under construction. We appreciate your patience and will have it available soon."
      ); //Thank you! Your information has been submitted.
      // Here you could also handle the form submission, e.g., sending data to an API
    }

    onOpen(); // Open the modal after setting the appropriate message
  };

  return (
    <div>
      <Navibar />
      <div>
        <div className="flex flex-col items-center justify-center">
          <p className="font-bold text-red-500 text-xs mt-10 md:text-sm ">
            FEEL FREE TO CONTACT US
          </p>
          <p className="font-bold text-black text-2xl py-2 md:text-3xl xl:text-4xl">
            Feedback Form
          </p>
        </div>
        <div className="flex flex-col items-center justify-center space-y-8 py-10">
          <Input
            isRequired
            radius="full"
            type="email"
            label="Email"
            isInvalid={isEmailInvalid}
            className="max-w-xs md:max-w-lg xl:max-w-xl"
            value={email}
            onChange={handleEmailChange}
          />
          <Input
            isRequired
            radius="full"
            type="text"
            label="Contact Name"
            isInvalid={isContactNameInvalid}
            className="max-w-xs md:max-w-lg xl:max-w-xl"
            value={contactName}
            onChange={handleContactNameChange}
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
            onPress={() => {
              onOpen(); // Assuming onOpen is defined somewhere in your component or imported
              handleSubmit();
            }}
            radius="full"
            color="primary"
          >
            Submit
          </Button>
          <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1">
                    Notice
                  </ModalHeader>
                  <ModalBody>
                    <p>{modalMessage}</p>
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
