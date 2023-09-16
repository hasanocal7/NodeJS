function circleArea(radius) {
    const area = (radius ** 2) * Math.PI;
    console.log(area);
}

function circleCircumference(radius) {
    const circumference = radius * 2 * Math.PI;
    console.log(circumference);
}

module.exports = {circleArea, circleCircumference};