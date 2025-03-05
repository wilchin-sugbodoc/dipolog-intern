function downloadEmail() {
    let emailContent = document.getElementById("print-email");

    if (!emailContent) {
        console.error("Error: No element found with id='print-email'");
        return;
    }

    let emailClone = emailContent.cloneNode(true);

    emailClone.querySelectorAll('[data-exclude="true"]').forEach(el => el.remove());

    html2pdf(emailClone, {
        margin: 10,
        filename: 'email.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    });
}
