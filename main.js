function myfunk(){
    if((Number(document.getElementById("input2").value)-27)>27){
        document.getElementById("rechnung").innerHTML=(Number(document.getElementById("input2").value)*2)
    
    }else {
        document.getElementById("rechnung").innerHTML="not possible"
    }
}

//Lev2_4_js-vertiefung_conditional-statements_mal5


function myfunk2(){
    if(Number(document.getElementById("input3").value) ==  Number(document.getElementById("input4").value)){
        document.getElementById("result").innerHTML = ((Number(document.getElementById("input3").value)+Number(document.getElementById("input4").value))*5)
    } else {
        document.getElementById("result").innerHTML ="not possible"
    }
}