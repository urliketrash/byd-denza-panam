/**
 * Rumus simulasi kredit (PRD FR-03) — bunga flat.
 *
 *   P = H_OTR × (1 − DP% / 100)
 *   M = (P + P × r × T) / (T × 12)
 */
export interface CreditResult {
  price: number;
  downPayment: number;
  principal: number;
  totalInterest: number;
  monthly: number;
  months: number;
}

export function calculateCredit(price: number, dpPercent: number, tenorYears: number, annualRate: number): CreditResult {
  const downPayment = price * (dpPercent / 100);
  const principal = price - downPayment;
  const totalInterest = principal * annualRate * tenorYears;
  const months = tenorYears * 12;
  const monthly = (principal + totalInterest) / months;
  return { price, downPayment, principal, totalInterest, monthly, months };
}
