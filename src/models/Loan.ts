export interface Loan {
  loanId: number;
  amount: number;
  term: number;
  type: string;
  status: string;
  customerName: string;

  [key: string]: any; 
}
