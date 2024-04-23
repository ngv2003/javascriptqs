function process(num)
{
    const halfval=num/2;
    const sqrhalf=halfval*halfval;
    const pi=Math.PI;
    const area=pi*sqrhalf*sqrhalf;
    const perc=(area/sqrhalf)*100;
    console.log(perc);
}

process(5);