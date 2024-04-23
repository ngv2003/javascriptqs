const arr=[1,2,3,4];

function sum(arr)
{
    let s=0;
    for(let i=0;i<arr.length;i++)
    {
        s+=arr[i];
    }
    return s;
}
function multiply(arr)
{
    let m=1;
    for(let i=0;i<arr.length;i++)
    {
        m*=arr[i];
    }
    return m;
}
console.log(sum(arr));
console.log(multiply(arr));