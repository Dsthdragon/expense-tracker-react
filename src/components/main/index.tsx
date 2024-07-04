import { Button, Flex, Heading, useDisclosure } from "@chakra-ui/react";
import Summary from "../summary";
import ExpenseView from "../expense-view";
import { useContext, useEffect } from "react";
import { GlobalContext, IGlobalContent } from "../../context";

export default function Main() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    totalExpense,
    totalIncome,
    setTotalExpense,
    setTotalIncome,
    allTransactions,
  } = useContext<IGlobalContent>(GlobalContext);

  useEffect(() => {
    let income = 0;
    let expense = 0;
    allTransactions.forEach((item) => {
      if (item.type === "income") {
        income += parseFloat(item.amount.toString());
      } else {
        expense += parseFloat(item.amount.toString());
      }
    });
    setTotalExpense(expense);
    setTotalIncome(income);
  }, [allTransactions]);
  return (
    <Flex textAlign={"center"} flexDirection={"column"} px={"5"}>
      <Flex alignItems={"center"} justifyContent={"space-between"} mt={"12"}>
        <Heading
          color={"blue.400"}
          display={["none", "block", "block", "block", "block"]}
        >
          Expense Tracker
        </Heading>
        <Flex alignItems={"center"}>
          <Button bg={"blue.700"} color={"black"} ml={"4"} onClick={onOpen}>
            Add New Transaction
          </Button>
        </Flex>
      </Flex>
      <Summary
        totalExpense={totalExpense}
        totalIncome={totalIncome}
        isOpen={isOpen}
        onClose={onClose}
      />
      <Flex
        w="full"
        alignItems={"flex-start"}
        justifyContent={"space-evenly"}
        flexDirection={["column", "column", "column", "row", "row"]}
      >
        <ExpenseView
          transactions={allTransactions.filter(
            (item) => item.type === "income"
          )}
          type="income"
        />
        <ExpenseView
          transactions={allTransactions.filter(
            (item) => item.type === "expense"
          )}
          type="expense"
        />
      </Flex>
    </Flex>
  );
}
