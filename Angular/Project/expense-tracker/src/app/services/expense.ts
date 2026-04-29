import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Expense } from '../models/expense';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  private storageKey = 'expenses';

  // This tells Angular whether we are in browser or server
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  // Check if browser
  private isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  // Get expenses
  getExpenses(): Expense[] {

    // If NOT browser → return empty array
    if (!this.isBrowser()) return [];

    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }

  // Save expenses
  private saveExpenses(expenses: Expense[]): void {

    if (!this.isBrowser()) return;

    localStorage.setItem(this.storageKey, JSON.stringify(expenses));
  }

  // Add expense
  addExpense(expense: Expense): void {
    const expenses = this.getExpenses();
    expenses.push(expense);
    this.saveExpenses(expenses);
  }

  // Delete expense
  deleteExpense(id: number): void {
    let expenses = this.getExpenses();
    expenses = expenses.filter(e => e.id !== id);
    this.saveExpenses(expenses);
  }

  // Get total
  getTotalAmount(): number {
    const expenses = this.getExpenses();
    return expenses.reduce((sum, e) => sum + e.amount, 0);
  }
}