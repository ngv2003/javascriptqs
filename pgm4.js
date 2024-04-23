function translate(text)
{
    const consonants='bcdfghjklmnpqrstvwxyz';

    function isConsonant(a)
    {
        return consonants.includes(a);
    }

    let ans='';
    for(let i=0;i<text.length;i++)
    {
        const ch=text.charAt(i);
        if(isConsonant(ch))
        {
            ans+=ch+'o'+ch;
        }
        else
        {
            ans+=ch;
        }

    }
    return ans;
}
console.log(translate("this is fun"))