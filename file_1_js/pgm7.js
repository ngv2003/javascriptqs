function findLongWords(arr)
{
    let ans=0;
    for(let i=0;i<arr.length;i++)
    {
        let c=arr[i];
        ans=Math.max(ans,c.length);
    }
    return ans;
}
const arr=["happy","holi","to","all"];
console.log(findLongWords(arr));
