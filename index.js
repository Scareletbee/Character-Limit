function validateSummary() {
  const summary = document.querySelector("#summary").value;
  const summaryLength = summary.length;

  const element = document.querySelector("#char_count");
  element.innerHTML = summaryLength;

  if (summaryLength > 50) {
    element.classList.add("text-danger");
  } else {
    ("");
    element.classList.remove("text-danger");
  }
}
