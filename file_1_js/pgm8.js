function findLongWords(arr,k)
{
    const ans=[];
    for(let i=0;i<arr.length;i++)
    {
        let c=arr[i];
        if(c.length>k)
        {
            ans.push(c);
        }
    }
    return ans;
}
const arr=["happy","holi","to","all"];
let k=2;
console.log(findLongWords(arr,k));