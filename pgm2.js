function maxofthree(a,b,c)
{
    if(a>b && b>c)
    {
        return a;
    }
    else if(b>a && b>c)
    {
        return b;
    }
    else
    {
        return c;
    }
}
console.log(maxofthree(23,43,1));