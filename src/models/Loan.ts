export interface Loan {
  loanId: number;
  amount: number;
  term: number;
  loanType: string;
  status: string;
  customerName: string;

  [key: string]: any; 
}
