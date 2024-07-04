import { ReactNode, createContext, useState } from "react";
import { IFormState, TransactionType } from "../interfaces/form";
export interface IGlobalContent {
  formData: IFormState;
  setFormData: (e: IFormState) => void;
  totalExpense: number;
  setTotalExpense: (e: number) => void;
  totalIncome: number;
  setTotalIncome: (e: number) => void;
  value: TransactionType;
  setValue: (e: TransactionType) => void;
  allTransactions: IFormState[];
  setAllTransactions: (e: IFormState[]) => void;
  handleFormSubmit: (e: IFormState) => void;
}
export const GlobalContext = createContext<IGlobalContent>({
  formData: {
    type: "expense",
    amount: 0,
    description: "",
  },
  setFormData: () => {},
  totalExpense: 0,
  setTotalExpense: () => {},
  totalIncome: 0,
  setTotalIncome: () => {},
  value: "expense",
  setValue: () => {},
  allTransactions: [],
  setAllTransactions: () => {},
  handleFormSubmit: () => {},
});

interface Props {
  children: ReactNode;
}
export default function GlobalState({ children }: Props) {
  const [formData, setFormData] = useState<IFormState>({
    type: "expense",
    amount: 0,
    description: "",
  });

  const [value, setValue] = useState<TransactionType>("expense");
  const [totalExpense, setTotalExpense] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);
  const [allTransactions, setAllTransactions] = useState<IFormState[]>([]);

  function handleFormSubmit(currentFormData: IFormState) {
    if (!currentFormData.description || !currentFormData.amount) return;
    setAllTransactions([
      ...allTransactions,
      { ...currentFormData, id: Date.now() },
    ]);
    setFormData({
      type: value,
      amount: 0,
      description: "",
    })
  }

  return (
    <GlobalContext.Provider
      value={{
        formData,
        setFormData,
        value,
        setValue,
        totalExpense,
        totalIncome,
        setTotalExpense,
        setTotalIncome,
        allTransactions,
        setAllTransactions,
        handleFormSubmit,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
