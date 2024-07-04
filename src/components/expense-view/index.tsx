import { Box, Flex, Text, Heading } from "@chakra-ui/react";
import { IFormState, TransactionType } from "../../interfaces/form";
interface Props {
  type: TransactionType;
  transactions: IFormState[];
}
export default function ExpenseView({ type, transactions }: Props) {
  return (
    <Box
      flex={1}
      w={"full"}
      bg={"white"}
      mr={"4"}
      mt={"10"}
      p={"5"}
      pb={"4"}
      border={"1px solid"}
      borderColor={"gray.100"}
      borderRadius={"12"}
    >
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Heading size={"md"} color={"red.700"}>
          {type === "income" ? "Income" : "Expense"}
        </Heading>
      </Flex>
      {transactions.map((item) => (
        <Flex
          key={item.id}
          bg={type === "expense" ? "red.50" : "blue.50"}
          mt={"4"}
          justifyContent={"space-between"}
          alignContent={"center"}
          border={"1px solid"}
          borderColor={type === "expense" ? "red.100" : "blue.100"}
          p={"4"}
          borderRadius={"8"}
        >
          <Flex alignItems={"center"} justifyContent={"center"}>
            <Text ml={"3"} fontWeight={"bold"} color={"gray.600"}>
              {item.description}
            </Text>
          </Flex>
            <Text>$ {item.amount}</Text>
        </Flex>
      ))}
    </Box>
  );
}