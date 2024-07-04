import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import { ChangeEvent, FormEvent, useContext } from "react";
import { GlobalContext } from "../../context";
interface Props {
  isOpen: boolean;
  onClose: () => void;
}
export default function TransactionForm({ isOpen, onClose }: Props) {
  const { formData, setFormData, value, setValue, handleFormSubmit } =
    useContext(GlobalContext);

  function handleFormChange(event: ChangeEvent<HTMLInputElement>) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }
  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    handleFormSubmit(formData);
    throw new Error("Function not implemented.");
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handleSubmit}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New Transaction</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Enter Description</FormLabel>
              <Input
                placeholder="Enter Transaction Description"
                name="description"
                type="text"
                onChange={handleFormChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Enter Amount</FormLabel>
              <Input
                placeholder="Enter Transaction amount"
                name="amount"
                type="number"
                onChange={handleFormChange}
              />
            </FormControl>
            <RadioGroup mt={"5"} value={value} onChange={setValue}>
              <Radio
                checked={formData.type === "income"}
                value="income"
                colorScheme="blue"
                name="type"
                onChange={handleFormChange}
              >
                Income
              </Radio>
              <Radio
                checked={formData.type === "expense"}
                value="expense"
                colorScheme="red"
                name="type"
                onChange={handleFormChange}
              >
                Expense
              </Radio>
            </RadioGroup>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose} mr={"4"}>
              Cancel
            </Button>
            <Button onClick={onClose} type="submit">
              Add
            </Button>
          </ModalFooter>
        </ModalContent>
      </form>
    </Modal>
  );
}
