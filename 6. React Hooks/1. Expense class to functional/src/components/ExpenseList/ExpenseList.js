import React from "react";
import styles from "./ExpenseList.module.css";

export default function ExpenseList() {
  return (
    <div className={styles.expenseListContainer}>
      <h3>Transactions</h3>
      <ul className={styles.transactionList}>
        {/* Display transactions here */}
      </ul>
    </div>
  );
}
