function areaOfCircle(num)
{
    var pi=Math.PI;
    const area=pi*num*num;
    const roundedarea=area.toFixed(2);
    console.log("The area for a circle with radius "+num+" is "+roundedarea);
}

areaOfCircle(2);