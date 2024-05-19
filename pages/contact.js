import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
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
import Navibar from "../components/navbar/index";

// Custom hook for input management
const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const [isInvalid, setIsInvalid] = useState(false);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    setIsInvalid(!newValue);
  };

  return [value, handleChange, isInvalid, setIsInvalid];
};

const Contact = () => {
  const form = useRef();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [email, handleEmailChange, isEmailInvalid, setEmailInvalid] =
    useInput("");
  const [
    contactName,
    handleContactNameChange,
    isContactNameInvalid,
    setContactNameInvalid,
  ] = useInput("");
  const [modalMessage, setModalMessage] = useState("");

  // Function to handle form submission
  const handleSubmit = () => {
    setEmailInvalid(!email);
    setContactNameInvalid(!contactName);
    const hasError = !email || !contactName;

    if (hasError) {
      setModalMessage(
        "Missing information. Please check your entries and try again."
      );
      onOpen();
      return;
    }

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE,
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setModalMessage("Thank you! Your information has been submitted.");
          onOpen();
        },
        () => {
          setModalMessage("Failed to send email. Please try again later.");
          onOpen();
        }
      );
  };

  return (
    <div className="bg-neutral-200">
      <Navibar />
      <div>
        <div className="flex flex-col items-center justify-center">
          <p className="font-bold text-red-500 text-xs mt-10 md:text-sm">
            FEEL FREE TO CONTACT US
          </p>
          <p className="font-bold text-black text-2xl py-2 md:text-3xl xl:text-4xl">
            Feedback Form
          </p>
        </div>
        <form
          ref={form}
          className="flex flex-col items-center justify-center space-y-8 py-10"
        >
          <Input
            isRequired
            radius="full"
            type="email"
            label="Email"
            isInvalid={isEmailInvalid}
            className="max-w-xs md:max-w-lg xl:max-w-xl"
            value={email}
            onChange={handleEmailChange}
            name="email"
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
            name="contactName"
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
            name="message"
          />
          <Button
            className="w-28 md:w-36 xl:w-40"
            onPress={handleSubmit}
            radius="full"
            color="primary"
          >
            Submit
          </Button>
        </form>

        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1 text-black">
                  Notice
                </ModalHeader>
                <ModalBody>
                  <p className="text-black">{modalMessage}</p>
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
  );
};

export default Contact;
