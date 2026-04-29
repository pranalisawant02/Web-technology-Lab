import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Expense } from '../../models/expense';
import { ExpenseService } from '../../services/expense';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  // Array to store all expenses
  expenses: Expense[] = [];

  // Object connected to form fields using ngModel
  newExpense = {
    title: '',
    amount: 0,
    category: '',
    date: ''
  };

  // Total expense amount
  totalAmount: number = 0;

  // Injecting service inside constructor
  constructor(private expenseService: ExpenseService) {
    this.loadExpenses();
  }

  // Load expenses from service
  loadExpenses(): void {
    this.expenses = this.expenseService.getExpenses();
    this.totalAmount = this.expenseService.getTotalAmount();
  }

  // Add expense after form submit
  addExpense(): void {

    // Basic validation
    if (
      this.newExpense.title.trim() === '' ||
      this.newExpense.amount <= 0 ||
      this.newExpense.category.trim() === '' ||
      this.newExpense.date === ''
    ) {
      alert('Please fill all fields correctly');
      return;
    }

    // Creating new expense object
    const expense: Expense = {
      id: Date.now(), // simple unique id
      title: this.newExpense.title,
      amount: Number(this.newExpense.amount),
      category: this.newExpense.category,
      date: this.newExpense.date
    };

    // Send data to service
    this.expenseService.addExpense(expense);

    // Reset form fields
    this.newExpense = {
      title: '',
      amount: 0,
      category: '',
      date: ''
    };

    // Refresh list
    this.loadExpenses();
  }

  // Delete expense
  deleteExpense(id: number): void {
    this.expenseService.deleteExpense(id);
    this.loadExpenses();
  }
}