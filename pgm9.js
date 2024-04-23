function charFreq(str)
{
    var freq={}
    for(var i=0;i<str.length;i++)
    {
        var char=str.charAt(i);
        if(freq[char])
        {
            freq[char]++;
        }
        else{
            freq[char]=1;
        }
    }
    return freq;
}

var frequency=charFreq("abbabcbdbabdbdbabababcbcbab");
console.log(frequency);