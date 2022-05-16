var docx = require("docx-pdf")

docx("./docx/docx1.docx" , "./pdf/docx1-pdf.pdf" , function(err,result){
    if (err) {
        
        console.log(err);
        
    }
    console.log("result" + result);


})