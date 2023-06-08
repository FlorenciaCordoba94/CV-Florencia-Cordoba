let inputContainer = document.getElementById("data-input-container");
let inputsArray = [];

function createHtmlElement(inputVariable) {
  const paragraph = document.createElement("p");
  const textNode = document.createTextNode(inputVariable);
  paragraph.appendChild(textNode);
  paragraph.classList.add("form-display-style");
  return paragraph;
}

function getSalaryInDollars(salary) {
  const dollar = 490;
  return salary / dollar;
}

function getSalaryInEuros(salary) {
  const euro = 513;
  return salary / euro;
}

function getInputValues() {
  const enterpriseName = document.querySelector("#enterprise-name").value;
  const email = document.querySelector("#email").value;
  const date = document.querySelector("#date").value;
  const description = document.querySelector("#description").value;
  const salary = document.querySelector("#salary").value;

  let salaryFormatted =
    "Pesos: $" +
    salary +
    " - Dólares: U$S" +
    getSalaryInDollars(salary) +
    " - Euros: €" +
    getSalaryInEuros(salary);

  const inputs = [
    enterpriseName,
    email,
    date,
    salary,
    salaryFormatted,
    description,
  ];
  inputsArray.push(inputs);

  const sortButton = document.querySelector("#sort-button");
  if (inputsArray.length > 1) {
    sortButton.classList.remove("d-none");
  }

  inputContainer.appendChild(createHtmlElement(enterpriseName));
  inputContainer.appendChild(createHtmlElement(email));
  inputContainer.appendChild(createHtmlElement(date));
  inputContainer.appendChild(createHtmlElement(salaryFormatted));
  inputContainer.appendChild(createHtmlElement(description));
}

function resetForm() {
  document.getElementById("form").reset();
}

function orderBySalary() {
  inputContainer.replaceChildren();

  const orderedArray = inputsArray.sort(
    (array1, array2) => array1[3] - array2[3]
  );

  orderedArray.map((arrayOfArrays) =>
    arrayOfArrays.map((element) =>
      inputContainer.appendChild(createHtmlElement(element))
    )
  );
}
