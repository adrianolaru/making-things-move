var stage = new mtm.Stage('c'),
    points = [],
    numPoints = 9,
    ctx = stage.ctx;

for (var i=0; i < numPoints; i++) {
  points[i] = {
    x: Math.random() * stage.height,
    y: Math.random() * stage.height
  };
}

ctx.beginPath();
ctx.moveTo(points[0].x, points[0].y); 

for(var i=1; i<numPoints-2; i++) {
  var xc = (points[i].x + points[i+1].x)/2,
      yc = (points[i].y + points[i+1].y)/2;

  ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
}

ctx.quadraticCurveTo(points[i].x, points[i].y, 
                     points[i+1].x, points[i+1].y);
ctx.stroke();
