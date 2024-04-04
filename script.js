const [today] = new Date().toISOString().split('T');

const dateInput = document.getElementById('inputother');
dateInput.setAttribute('min', today);

function myFunction () {
  const div = document.getElementById("agendas");
  
  if (div.classList.contains('open')) {
    div.classList.remove('open');
  } else {
    div.classList.add('open');
  }
}

function changeRadioOther() {
  var other = document.getElementById("other");
  other.value = "dia " + document.getElementById("inputother").value.split('-').reverse().join('/');
  other.dataset.valueTwo = document.getElementById("inputother").value.split('-').reverse().join('/');
}

function abrirConfirmacaoAgenda() {

  var profissional = document.querySelector('input[class="profissional"]:checked').value;
  var dia = document.querySelector('input[class="dia"]:checked').value;

  localStorage.setItem('profissional', profissional);
  localStorage.setItem('dia', dia);

  var profissional2 = document.querySelector('input[class="profissional"]:checked').dataset.valueTwo;
  var dia2 = document.querySelector('input[class="dia"]:checked').dataset.valueTwo;

  localStorage.setItem('profissional2', profissional2);
  localStorage.setItem('dia2', dia2);

}

function escreveTela() {
  document.getElementById("agenda").innerHTML = localStorage.getItem('profissional2');
  document.getElementById("odia").innerHTML = localStorage.getItem('dia2');
}

function sendToWhatsapp() {
  let name = document.getElementById('name').value;
  let number = "55" + document.getElementById('number').value.replace(/[^+\d+]/g, "");
  let profissional = localStorage.getItem('profissional');
  let dia = localStorage.getItem('dia');
  let hora = document.getElementById('hora').value;

  var url = "https://web.whatsapp.com/send?phone=" + number + "&text="
    + "Olá *" + name + "*,%0a%0aPodemos confirmar seu agendamento" + profissional + "* *" + dia + "* às *" + hora + "*?";

  window.open(url, '_blank').focus();
}

function sendToWhatsapp2() {
  let name = document.getElementById('name').value;
  let number = "55" + document.getElementById('number').value.replace(/[^+\d+]/g, "");
  let profissional = document.querySelector('input[name="profissional"]:checked').value;
  let dia = document.querySelector('input[name="dia"]:checked').value;
  let hora = document.getElementById('hora').value;

  var url = "https://web.whatsapp.com/send?phone=" + number + "&text="
    + "Olá *" + name + "*,%0a%0aPodemos confirmar seu agendamento" + profissional + "* *" + dia + "* às *" + hora + "*?";

  window.open(url, '_blank').focus();
}

