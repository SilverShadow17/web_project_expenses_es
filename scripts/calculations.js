// Variable presupuesto
let budgetValue = 0;
//Variable gastos totales
let totalExpensesValue = 0;

//Array de gastos

let expenseEntries = [
  ["groceries", 33],
  ["restaurants", 50],
  ["transport", 12],
  ["home", 70],
  ["subscriptions", 14],
  ["groceries", 28],
  ["subscriptions", 12],
];

// Calcular gastos totales
totalExpensesValue = 0;
for (let i = 0; i < expenseEntries.length; i++) {
  totalExpensesValue = totalExpensesValue + expenseEntries[i][1];
}

// calcular gasto promedio

function calculateAverageExpense() {
  if (expenseEntries.length === 0) {
    return 0;
  }

  promedio = totalExpensesValue / expenseEntries.length;

  return promedio;
}

// calcular saldo

function calculateBalance() {
  budget = budgetValue - totalExpensesValue;

  return budget;
}

// cambiar color saldo

let balanceColor = "green";

function updateBalanceColor() {
  if (budgetValue < totalExpensesValue) {
    balanceColor = "red";
  } else if (budget < budgetValue * 0.25) {
    balanceColor = "orange";
  } else {
    balanceColor = "green";
  }
}

// calcular estadísticas por categoría

function calculateCategoryExpenses(categoria) {
  let total = 0;
  for (let i = 0; i < expenseEntries.length; i++) {
    let nombreCategoria = expenseEntries[i][0];
    let cantidad = expenseEntries[i][1];

    if (nombreCategoria === categoria) {
      total = total + cantidad;
    }
  }
  return total;
}

// calcular categoría más grande

function calculateLargestCategory() {
  let categoriasGastos = [
    "groceries",
    "restaurants",
    "transport",
    "home",
    "subscriptions",
  ];
  let categoriesData = [];

  //bucle que sirve para añadir datos al array de data

  for (let i = 0; i < categoriasGastos.length; i++) {
    let nombre = categoriasGastos[i];
    let total = calculateCategoryExpenses(nombre);
    categoriesData.push([nombre, total]);
  }

  // bucle que sirve para analizar los datos sacados de arriba y escoger el más alto

  let mostExpensiveCategory = "";
  let highestSpent = 0;

  for (let i = 0; i < categoriesData.length; i++) {
    let categoriaName = categoriesData[i][0];
    let totalCategorie = categoriesData[i][1];

    if (totalCategorie > highestSpent) {
      highestSpent = totalCategorie;
      mostExpensiveCategory = categoriaName;
    }
  }
  return mostExpensiveCategory;
}

// añadir nuevos gastos al presupuesto

function addExpenseEntry(values) {
  expenseEntries.push(values);
  totalExpensesValue += values[1];
}
