function confirmarPorWhatsapp() {

    var str = document.getElementById('agendamento').value;

    var dadosNome = str.split(/[\t|\n]/);
    var dados = str.split(/[\t]/);

    console.log("dadosNome: " + dadosNome);
    console.log("dados: " + dados);

    function definirSaudacao() {

        const data = new Date();
        console.log("data: " + data);
        const hrs = data.getHours();
        console.log("hrs: " + hrs);
        let greet;
        console.log("greet: " + greet);

        if (hrs < 12)
            greet = 'Bom dia';
        else if (hrs >= 12 && hrs <= 17)
            greet = 'Boa tarde';
        else if (hrs >= 17 && hrs <= 24)
            greet = 'Boa noite';

        return greet;
    }

    function definirAtendimento() {

        let atendimento = dados[dados.length - 20];
        atendimento = atendimento.toLowerCase();
        console.log("atendimento: " + atendimento);

        if (atendimento == "consulta") {
            atendimento = "sua *consulta*";
        } else if (atendimento == "retorno") {
            atendimento = "seu *retorno*";
        } else if (atendimento == "endoscopia") {
            atendimento = "seu exame de *Endoscopia*";
        } else if (atendimento == "ph-metria/man") {
            atendimento = "seus exames de *PH-metria e Manometria*";
        } else if (atendimento == "ph-metria") {
            atendimento = "seu exame de *PH-metria*";
        } else if (atendimento == "manometria") {
            atendimento = "seu exame de *Manometria*";
        } else if (atendimento == "sessao") {
            atendimento = "sua *sessão*";
        } else if (atendimento == "avaliaçao") {
            atendimento = "sua *avaliação*";
        } else if (atendimento.includes('consulta')) {
            atendimento = "sua *consulta* e seu exame/procedimento";
        } else {
            atendimento = "seu exame/procedimento";
        }

        return atendimento;
    }

    function definirProfi() {

        let profissional = dados[dados.length - 4];

        switch (profissional) {
            case "Tadeu":
                profissional = "*Dr. Carlos Tadeu*";
                console.log("*Dr. Carlos Tadeu*");
                break;
            case "Luanda":
                profissional = "*Dra. Luanda*";
                console.log("*Dra. Luanda*");
                break;
            case "Izabella":
                profissional = "*Dra. Isabella*";
                console.log("*Dra. Isabella*");
                break;
            case "Virginia":
                profissional = "nossa fisioterapeuta *Virginia*";
                console.log("*Virginia*");
                break;
            case "Graziela":
                profissional = "nossa fonoaudióloga *Graziela*";
                console.log("*Graziela*");
                break;
            case "Maria":
                profissional = "nossa fonoaudióloga *Maria José*";
                console.log("*Dra. Isabella*");
                break;

            default:
                profissional = "*Dr. " + profissional + "*";
                console.log(profissional);
                break;
        }

        return profissional;
    }

    function definirDia() {

        let dia = dados[dados.length - 3];

        let diaControle = dia.slice(0, -5);
        console.log("diaControle: " + diaControle);

        let hoje = new Date().toLocaleDateString('pt-BR');
        console.log("hoje: " + hoje);

        let amanha = new Date();
        amanha.setDate(amanha.getDate() + 1)
        amanha = amanha.toLocaleDateString('pt-BR');
        console.log("amanha: " + amanha);

        if (dia == hoje) {
            dia = "*hoje*, dia " + diaControle + ",";
        } else if (dia == amanha) {
            dia = "*amanhã*, dia " + diaControle + ",";
        } else {
            dia = "dia *" + dia + "*";
        }

        return dia;
    }

    let saudacao = definirSaudacao();
    console.log("name: " + saudacao);
    let nome = dadosNome[1];
    console.log("name: " + nome);
    let telefone = "55" + dados[2];
    console.log("number: " + telefone);
    let atendimento = definirAtendimento();
    console.log("atendimento: " + atendimento);
    let profissional = definirProfi();
    console.log("profissional: " + profissional);
    let dia = definirDia();
    console.log("dia: " + dia);
    let horario = dados[dados.length - 2];
    console.log("hora: " + horario);

    var url = "https://web.whatsapp.com/send?phone=" + telefone + "&text="
        + saudacao + " *" + nome + "*,%0a%0aPodemos confirmar " + atendimento + " com " + profissional + ", " + dia + " às *" + horario + "*?";

    console.log("url: " + url);
    window.open(url, '_blank').focus();
}


function desmarcarPorWhatsapp() {

    var str = document.getElementById('agendamento').value;

    var dadosNome = str.split(/[\t|\n]/);
    var dados = str.split(/[\t]/);

    console.log("dadosNome: " + dadosNome);
    console.log("dados: " + dados);

    function definirSaudacao() {

        const data = new Date();
        console.log("data: " + data);
        const hrs = data.getHours();
        console.log("hrs: " + hrs);
        let greet;
        console.log("greet: " + greet);

        if (hrs < 12)
            greet = 'Bom dia';
        else if (hrs >= 12 && hrs <= 17)
            greet = 'Boa tarde';
        else if (hrs >= 17 && hrs <= 24)
            greet = 'Boa noite';

        return greet;
    }

    function definirAtendimento() {

        let atendimento = dados[dados.length - 20];
        atendimento = atendimento.toLowerCase();
        console.log("atendimento: " + atendimento);

        if (atendimento == "consulta") {
            atendimento = "sua *consulta*";
        } else if (atendimento == "retorno") {
            atendimento = "seu *retorno*";
        } else if (atendimento == "endoscopia") {
            atendimento = "seu exame de *Endoscopia*";
        } else if (atendimento == "ph-metria/man") {
            atendimento = "seus exames de *PH-metria e Manometria*";
        } else if (atendimento == "ph-metria") {
            atendimento = "seu exame de *PH-metria*";
        } else if (atendimento == "manometria") {
            atendimento = "seu exame de *Manometria*";
        } else if (atendimento == "sessao") {
            atendimento = "sua *sessão*";
        } else if (atendimento == "avaliaçao") {
            atendimento = "sua *avaliação*";
        } else if (atendimento.includes('consulta')) {
            atendimento = "sua *consulta* e seu exame/procedimento";
        } else {
            atendimento = "seu exame/procedimento";
        }

        return atendimento;
    }

    function definirProfi() {

        let profissional = dados[dados.length - 4];

        switch (profissional) {
            case "Tadeu":
                profissional = "*Dr. Carlos Tadeu*";
                console.log("*Dr. Carlos Tadeu*");
                break;
            case "Luanda":
                profissional = "*Dra. Luanda*";
                console.log("*Dra. Luanda*");
                break;
            case "Izabella":
                profissional = "*Dra. Isabella*";
                console.log("*Dra. Isabella*");
                break;
            case "Virginia":
                profissional = "nossa fisioterapeuta *Virginia*";
                console.log("*Virginia*");
                break;
            case "Graziela":
                profissional = "nossa fonoaudióloga *Graziela*";
                console.log("*Graziela*");
                break;
            case "Maria":
                profissional = "nossa fonoaudióloga *Maria José*";
                console.log("*Dra. Isabella*");
                break;

            default:
                profissional = "*Dr. " + profissional + "*";
                console.log(profissional);
                break;
        }

        return profissional;
    }

    function definirDia() {

        let dia = dados[dados.length - 3];

        let diaControle = dia.slice(0, -5);
        console.log("diaControle: " + diaControle);

        let hoje = new Date().toLocaleDateString('pt-BR');
        console.log("hoje: " + hoje);

        let amanha = new Date();
        amanha.setDate(amanha.getDate() + 1)
        amanha = amanha.toLocaleDateString('pt-BR');
        console.log("amanha: " + amanha);

        if (dia == hoje) {
            dia = "*hoje*, dia " + diaControle + ",";
        } else if (dia == amanha) {
            dia = "*amanhã*, dia " + diaControle + ",";
        } else {
            dia = "dia *" + dia + "*";
        }

        return dia;
    }

    let saudacao = definirSaudacao();
    console.log("name: " + saudacao);
    let nome = dadosNome[1];
    console.log("name: " + nome);
    let telefone = "55" + dados[2];
    console.log("number: " + telefone);
    let atendimento = definirAtendimento();
    console.log("atendimento: " + atendimento);
    let profissional = definirProfi();
    console.log("profissional: " + profissional);
    let profissional2 = profissional.charAt(0).toUpperCase() + profissional.slice(1)
    console.log("profissional2: " + profissional2);
    let dia = definirDia();
    console.log("dia: " + dia);
    let horario = dados[dados.length - 2];
    console.log("hora: " + horario);

    var url = "https://web.whatsapp.com/send?phone=" + telefone + "&text="
        + saudacao + " *" + nome + "*,%0a%0aInfelizmente teremos que *desmarcar* " + atendimento + " com " + profissional + ", que estava agenda para " + dia + " às *" + horario + "*.%0a%0a"
        + profissional2 + " não poderá atender nessa data.%0a%0aDeseja remarcar?";

    console.log("url: " + url);
    window.open(url, '_blank').focus();
}

const [today] = new Date().toISOString().split('T');

const dateInput = document.getElementById('inputother');
dateInput.setAttribute('min', today);

function myFunction() {
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

