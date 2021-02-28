function getparagraph1()
{
    var inputs = [];
    for(var i = 1 ; i <=6 ; i++)
    {
        inputs.push(document.getElementById("i1" + i).value);
    }
    inputs.join(". ")
    document.getElementById("showParagraph1").innerHTML = inputs.join(". ");
}