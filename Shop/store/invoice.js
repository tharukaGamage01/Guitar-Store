const paragraph = document.querySelector('#paragraph');

const params = new URLSearchParams(window.location.search);

params.forEach((value, key)=>{
    paragraph.append(`${key} : ${value}`);
    paragraph.append(document.createElement('br'));
});

window.onload = function() {
    document.getElementById("download")
    .addEventListener("click",()=>{
        const invoice = this.document.getElementById("invoiceContent");
        console.log(invoice);
        console.log(window);
        var opt = {
            margin: 0,
            filename: 'Invoice.pdf',
            image: {type: 'jpeg',quality:0.98},
            html2canvas: {
                scale: 3,
                scrollY: 0,
                height: invoice.scrollHeight
            },
            jsPDF: {unit: 'in', format: 'letter',orientation: 'portrait'}
        };
        html2pdf().from(invoice).set(opt).save();
    })
}