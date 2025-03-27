export interface Loan{
  id: number,
  amount: number,
  term: number,
  type: string,
  status: string,
  clientName: string
}

/*{
    "id": 1,
    "amount": 10000.5,
    "term": 12,
    "type": "Mortgage",
    "status": "Pending",
    "clientName": "User Example"
  }*/