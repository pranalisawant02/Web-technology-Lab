// Interface defines the structure of one expense object
export interface Expense {
  id: number;          // unique id for each expense
  title: string;       // expense name, example: Food
  amount: number;      // expense amount
  category: string;    // expense category
  date: string;        // expense date
}