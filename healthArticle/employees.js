var xhr = new XMLHttpRequest();
var url = "./employees.json";

xhr.open("GET", url, true);
xhr.responseType = "json";

xhr.onload = function () {
  var employees = xhr.response.employees;
  var employeesDiv = document.getElementById("employees");

  employees.forEach((e) => {
    // console.log(e.employee.name);
    var employeeDiv = document.createElement("div");
    employeeDiv.classList.add("employee");

    var name = document.createElement("h3");
    name.textContent = e.employee.name;

    var position = document.createElement("p");
    position.textContent = `Position : ${e.employee.position}`;

    var departement = document.createElement("p");
    var depId = document.createElement("span");
    depId.textContent = `ID Departement : ${e.employee.department.id}`;
    var depName = document.createElement("p");
    depName.textContent = `Departement: ${e.employee.department.name} `;

    var line = document.createElement("hr");

    employeeDiv.appendChild(name);
    employeeDiv.appendChild(position);
    departement.appendChild(depId);
    departement.appendChild(depName);
    employeeDiv.appendChild(departement);
    employeeDiv.appendChild(line);
    employeesDiv.appendChild(employeeDiv);
  });
};
xhr.send();
