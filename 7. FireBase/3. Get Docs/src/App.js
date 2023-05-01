import { useState, useReducer, useEffect } from "react";
import "./App.css";

// components imports
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import ExpenseInfo from "./components/ExpenseInfo/ExpenseInfo";
import ExpenseList from "./components/ExpenseList/ExpenseList";

// react toasts
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import firebase methods here
import {
  doc,
  collection,
  addDoc,
  setDoc,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { db } from "./firebaseInit";

const reducer = (state, action) => {
  const { payload } = action;
  switch (action.type) {
    // add cases to set retrived expenses to state here
    case "ADD_EXPENSE": {
      return {
        expenses: [payload.expense, ...state.expenses],
      };
    }
    case "REMOVE_EXPENSE": {
      return {
        expenses: state.expenses.filter((expense) => expense.id !== payload.id),
      };
    }
    case "UPDATE_EXPENSE": {
      const expensesDuplicate = state.expenses;
      expensesDuplicate[payload.expensePos] = payload.expense;
      return {
        expenses: expensesDuplicate,
      };
    }
    case "FETCH_EXPENSE": {
      return {
        expenses: payload,
      };
    }
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, { expenses: [] });
  const [expenseToUpdate, setExpenseToUpdate] = useState(null);

  // create function to get expenses from firestore here
  // use appropriate hook to get the expenses when app mounts

  const addExpense = async (expense) => {
    const expenseRef = collection(db, "blogs");
    const docRef = await addDoc(expenseRef, expense);

    dispatch({
      type: "ADD_EXPENSE",
      payload: { expense: { id: docRef.id, ...expense } },
    });
    toast.success("Expense added successfully.");
  };

  const deleteExpense = (id) => {
    dispatch({ type: "REMOVE_EXPENSE", payload: { id } });
  };

  const resetExpenseToUpdate = () => {
    setExpenseToUpdate(null);
  };

  const updateExpense = async (expense) => {
    const expensePos = state.expenses
      .map(function (exp) {
        return exp.id;
      })
      .indexOf(expense.id);

    if (expensePos === -1) {
      return false;
    }

    const expenseRef = doc(db, "blogs", expense.id);
    await setDoc(expenseRef, expense);

    dispatch({ type: "UPDATE_EXPENSE", payload: { expensePos, expense } });
    toast.success("Expense updated successfully.");
  };

  useEffect(() => {
    async function getData() {
      const q = query(collection(db, "blogs"));

      const querySnapshot = await getDocs(q);
      const blogs = querySnapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      if (blogs) {
        dispatch({
          type: "FETCH_EXPENSE",
          payload: blogs,
        });
      }
    }
    getData();
  }, []);

  return (
    <>
      <ToastContainer />
      <h2 className="mainHeading">Expense Tracker</h2>
      <div className="App">
        <ExpenseForm
          addExpense={addExpense}
          expenseToUpdate={expenseToUpdate}
          updateExpense={updateExpense}
          resetExpenseToUpdate={resetExpenseToUpdate}
        />
        <div className="expenseContainer">
          <ExpenseInfo expenses={state.expenses} />
          <ExpenseList
            expenses={state.expenses}
            deleteExpense={deleteExpense}
            changeExpenseToUpdate={setExpenseToUpdate}
          />
        </div>
      </div>
    </>
  );
}

export default App;
