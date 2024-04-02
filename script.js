function changeRadioOther() {
    var other = document.getElementById("other");
    other.value = "dia " + document.getElementById("inputother").value.split('-').reverse().join('/');
  }

  var data = new Date();
  var dia = String(data.getDate()).padStart(2, '0');
  var mes = String(data.getMonth() + 1).padStart(2, '0');
  var ano = data.getFullYear();
  var dataAtual = dia + '/' + mes + '/' + ano;

function sendToWhatsapp () {
    let name = document.getElementById('name').value;
    let number = "55" + document.getElementById('number').value.replace(/[^+\d+]/g,"");
    let profissional = document.querySelector('input[name="profissional"]:checked').value;
    let dia = document.querySelector('input[name="dia"]:checked').value;
    let hora = document.getElementById('hora').value;
    
    var url = "https://web.whatsapp.com/send?phone=" + number + "&text="
    + "Olá *" + name + "*,%0a%0aPodemos confirmar seu agendamento" + profissional + "* *" + dia + "* às *" + hora + "*?";

    window.open(url, '_blank').focus();
}

