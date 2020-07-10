function myfunk(){
    if((Number(document.getElementById("input2").value)-27)>27){
        document.getElementById("rechnung").innerHTML=(Number(document.getElementById("input2").value)*2)
    
    }else {
        document.getElementById("rechnung").innerHTML="not possible"
    }
}