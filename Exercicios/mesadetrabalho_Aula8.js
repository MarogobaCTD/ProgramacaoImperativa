function podeSubir(altura, acompanhada){
    if (altura >= 1.40 && altura <= 2){
        return true;
    } else if (altura < 1.40 && altura >= 1.2 ){
        return acompanhada;
    } else {
        return false;
    }
}
    console.log(podeSubir(1.50, false) ? "Pode Subir!" : "Não pode Subir!" );
    console.log(podeSubir(2, false) ? "Pode Subir!" : "Não pode Subir!");
    console.log(podeSubir(1.35, true) ? "Pode Subir!" : "Não pode Subir!" );
    console.log(podeSubir(1.30, false) ? "Pode Subir!" : "Não pode Subir!" );
    console.log(podeSubir(1.10, true) ? "Pode Subir!" : "Não pode Subir!" );
    console.log(podeSubir(2.10, true) ? "Pode Subir!" : "Não pode Subir!" );

    function podeSubir2(altura, acompanhada){
        if (altura >= 1.40 && altura <= 2){
            return "Acesso autorizado"
        } else if (altura < 1.40 && altura >= 1.2 && acompanhada){
            return "Acesso autorizado somente com acompanhante"
        } else {
            return "Acesso negado";
        }
    }

    console.log(podeSubir2(1.50, false));
    console.log(podeSubir2(2, false));
    console.log(podeSubir2(1.35, true));
    console.log(podeSubir2(1.30, false));
    console.log(podeSubir2(1.10, true)); 
    console.log(podeSubir2(2.10, true));