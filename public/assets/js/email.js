function downloadEmail() {
  let newWindow = window.open("", "_blank");

  let emailElement = document.querySelector(".email-body").cloneNode(true);
  let emailHeaderFrom = document.querySelector(".email-from").cloneNode(true);
  let emailHeaderTo = document.querySelector(".email-to").cloneNode(true);
  let emailHeaderDate = document.querySelector(".email-date").cloneNode(true);

  let attachments = emailElement.querySelector(".email-attch");
  if (attachments) attachments.remove();

  let files = emailElement.querySelector(".row");
  if (files) files.remove();

  newWindow.document.write(`
        <html>
            <head>
                <title>Invoice</title>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"></script>
                <style>
                    body { font-family: Arial, sans-serif; margin: 20px; padding: 0; }
                    .card-body { width: 100%; max-width: 800px; margin: auto; }
                </style>
            </head>
            <body>
                <div class="card-body">
                From: ${emailHeaderFrom.innerHTML}<br>
                Receiver: ${emailHeaderTo.innerHTML}<br>
                Date: ${emailHeaderDate.innerHTML}<br>
                ${emailElement.innerHTML}
                </div>
                <script>
                    window.onload = function() {
                        let invoiceContent = document.querySelector('.card-body');

                        html2pdf()
                            .set({
                                margin: 5,
                                filename: 'Email.pdf',
                                image: { type: 'jpeg', quality: 0.90 },
                                html2canvas: { scale: 1, useCORS: true },
                                jsPDF: { unit: 'mm', format: 'letter', orientation: 'landscape' }
                            })
                            .from(invoiceContent)
                            .save()
                            .then(() => {
                                window.close(); // Close the new tab after download
                            });
                    };
                </script>
            </body>
        </html>
    `);

  newWindow.document.close();
}
