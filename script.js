document.getElementById("mostrarSenhaBtn").addEventListener("click", function() {
    var senhaInput = document.getElementById("senha");
    if (senhaInput.type === "password") {
      senhaInput.type = "text";
    } else {
      senhaInput.type = "password";
    }
    
});
