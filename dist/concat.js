const { safeStringify } = require("request/lib/helpers");

var excluir = function(id, url){
    if (confirm("Deseja realmente Excluir ?")){
        window.location = url;
    }
}
