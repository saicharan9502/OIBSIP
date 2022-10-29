function converter()
{
    var opt=document.querySelector("#option");
    var result=document.querySelector(".value");
    var input=document.querySelector(".t").value;
    if(opt.value=="f")
    {
        var cel=(input-32)*(5/9)
        result.innerHTML=cel+"°C"
    }
    if(opt.value=="c")
    {
        var fah=input*9/5+32
        result.innerHTML=fah+"°F"
    }
}