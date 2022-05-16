var docx = require("docx-pdf")
var readline = require("readline")

var rl = readline.createInterface(
    process.stdin, process.stdout);

// En este caso deje un documento por defecto llamado docx1.docx pero solo basta con escribir docx1, se pueden colocar mas documentos y solo se debe especificar nombre
function solicitar() {
    rl.question('Ingrese el nombre del documento sin extension: ' , (namedoc) => {
        convertirpdf(namedoc)
    });

}

function convertirpdf(nodoc) {
    docx("./docx/" + nodoc + ".docx"  , "./pdf/" + nodoc + "-pdf" + ".pdf" , function(err,result){
        if (err) {
            
            console.log(err);
            
        }
        console.log("result" + result);
    
    
    }) 
}

solicitar();