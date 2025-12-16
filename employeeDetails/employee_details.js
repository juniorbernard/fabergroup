const employees = [
  { id: 1, name: "John Doe", age: 30, department: "IT", salary: 50000 },
  { id: 2, name: "Alice Smith", age: 28, department: "HR", salary: 45000 },
  { id: 3, name: "Bob Johnson", age: 35, department: "Finance", salary: 60000 },
  //... D'autres enregistrements d'employés peuvent être ajoutés ici
];

// Affiche les détails de chaque employé dans le format spécifié
function displayEmployees() {
  const totalEmployees = employees
    .map(
      (employee) =>
        `<p>${employee.id} : ${employee.name}-${employee.department}-$${employee.salary}</p>`
    )
    .join("");
  document.getElementById("employeeList").innerHTML = totalEmployees;
}

// Calcule et retourne le total des salaires de tous les employés
function calculateTotalSalaries() {
  const totalSalaries = employees.reduce(
    (total, employee) => total + employee.salary,
    0
  );
  alert(`Total Salaries: $${totalSalaries}`);
}

// Affiche les employés du département RH
function displayHREmployees() {
  const hrEmployees = employees.filter(
    (employee) => employee.department === "HR"
  );
  const hrEmployeesDisplay = hrEmployees
    .map((employee) => {
      return `<p>${employee.id} : ${employee.name}-${employee.department}-$${employee.salary}</p>`;
    })
    .join("");
  document.getElementById("employeeList").innerHTML = hrEmployeesDisplay;
}

// Trouve et retourne les détails d'un employé par son ID
function findEmployeeById(id) {
  const foundEmployee = employees.find((employee) => employee.id === id);
  if (foundEmployee) {
    document.getElementById(
      "employeeList"
    ).innerHTML = `<p>${foundEmployee.id} : ${foundEmployee.name}-${foundEmployee.department}-$${foundEmployee.salary}</p>`;
  } else {
    document.getElementById(
      "employeeList"
    ).innerHTML = `<p>Employee not found</p>`;
  }
}
