function mixup(str1,str2)
{
    finalstr1=str2.slice(0,2)+str1.slice(2);
    finalstr2=str1.slice(0,2)+str2.slice(2);

    console.log(finalstr1+" "+finalstr2);
}
mixup('mix','pod');
