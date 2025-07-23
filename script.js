let clientWeb = null

const clientId = "Esp32" + Math.floor(Math.random() * 900) + 100
clientWeb = new Paho.MQTT.Client("broker.hivemq.com", 8884, clientId)

clientWeb.connect({
    useSSL: true,
    timeout: 5,
    onSuccess:function(){
        alert("Conectado com sucesso")
    },
    onFailure: function() {
        alert ("A conexão falhou")
    }
})



function ligarVermelho(){
    document.getElementById("vermelho").classList.add("vermelho")
    document.getElementById("amarelo").classList.remove("amarelo")
    document.getElementById("verde").classList.remove("verde")
    
    //Fazendo publish no tópico
    const msg = new Paho.MQTT.Message("")
    msg.destinantionName = "senai890/semaforo/ligar/vermelho"
    clientWeb.send(msg)
}

function ligarAmarelo(){
    document.getElementById("amarelo").classList.add("amarelo")
    document.getElementById("vermelho").classList.remove("vermelho")
    document.getElementById("verde").classList.remove("verde")
}

function ligarVerde(){
    document.getElementById("verde").classList.add("verde")
    document.getElementById("vermelho").classList.remove("vermelho")
    document.getElementById("amarelo").classList.remove("amarelo")
}

function ligarAutomatico(){
    alert("Liga automatico")
    
}

function desligar(){
    document.getElementById("vermelho").classList.remove("vermelho")
    document.getElementById("amarelo").classList.remove("amarelo")
    document.getElementById("verde").classList.remove("verde")
}