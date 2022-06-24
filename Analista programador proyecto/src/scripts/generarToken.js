let listaTokens = [];
var token = Math.floor(Math.random()*(999999-100000))+100000;
var segundos;
listaTokens.push(token);
let iToken = [];
let iListaToken = [];
let iSegundos = [];
let informacion = [iToken, iListaToken, iSegundos];
var exttoken;

function Temporizador(id, inicio, final, idtoken, token, idlistatoken, listatoken, infor){
    this.id=id;
    this.inicio=inicio;
    this.final=final;
    this.contador=this.inicio;
    this.idtoken=idtoken;
    this.token=token;
    this.idlistatoken=idlistatoken;
    this.listatoken=listatoken;
    this.conteoSegundos = function(){
        if(this.contador == this.final-1){
            this.contador = inicio;
            var token = Math.floor(Math.random()*(999999-100000))+100000;
            listatoken.push(token);
            this.listatoken=listatoken;
            this.token = token;
            
            console.log('finalizo if script');            
        }        
        //informacion.iToken.push(token);
        //informacion.iListaToken.push(listaTokens);
        //informacion.segundos.push(this.contador);
        //informacion = infor;
        // console.log(informacion.iToken);
        //this.contador--;
        /*document.getElementById(this.id).innerHTML = this.contador--;
        document.getElementById(this.idtoken).innerHTML=this.token;
        document.getElementById(this.idlistatoken).innerHTML=this.listatoken;*/
        exttoken = this.token;
        console.log('El token actual dentro es: ', exttoken);
        console.log('final conteo Segundos');
        setTimeout(this.conteoSegundos.bind(this), 1000);
    }
    this.segundos = function(contador){
        return contador = this.contador;
    }
}
console.log('El token actual fuera es: ', exttoken);
let temporizador = new Temporizador("temporizador", 3, 0, "token", token, "listaToken", listaTokens, informacion);
module.exports = {temporizador, exttoken, listaTokens, informacion};
//temporizador.conteoSegundos();
//document.write("<br/>","<br/>");