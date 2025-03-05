function printInvoice() {
  let lastRow = document.querySelector(".table tr:last-child");
  if (lastRow) lastRow.style.display = "none";

  window.print();

  if (lastRow) lastRow.style.display = "";
}

function downloadInvoice() {
  var element = document.querySelector(".card-body").cloneNode(true);
  element.style.height = "1500px";

  var buttonRow = element.querySelector("#not-included");
  if (buttonRow) {
    buttonRow.remove();
  }
  var opt = {
    margin: [-100, 0, 0, 0],
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 3 },
  };

  html2pdf().set(opt).from(element).save("invoice.pdf");
}
