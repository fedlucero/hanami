var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

function random(min, max) {
  return Math.floor((fxrand() * (max - min + 1)) + min);
}


const inY = canvas.height/8
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;



const q = Math.floor(random(1,1.3))



const colors12 = ["#AFD5AA"]
const colors13 = ["#ffc8dd"]
const colors14 = ["#bde0fe"] //marron
const colors15 = ["#ccd5ae"]//gris
const colors16 = ["#8093f1"]//casi negro
const colors17 = ["#e5d9f2"]//rosa






function randomFromList(items){
    return items[Math.floor(fxrand()*items.length)];
    }



const colorTronco = `#7B6B43`

const coloresHojas = [ colors12,colors13,colors14,colors15,colors16,colors17]
const colorHojas = randomFromList(coloresHojas)





drawBackground();
drawGrass(centerX,900, 100, -Math.PI / 2, 13,2);
drawTree(centerX,870, 85, -Math.PI / 2, 15,8);




fxpreview();

function drawGrass(centerX, inY, length, angle, depth, branchWidth) {
 
  var newLength, newAngle, newDepth, maxBranch = 2,
      endX, endY, maxAngle = 2 * Math.PI / 5, subBranches;

  ctx.beginPath();
  ctx.moveTo(centerX, inY);
  endX = centerX + length * Math.cos(angle);
  endY = inY + length * Math.sin(angle);
  ctx.lineCap = 'round';
  ctx.lineWidth = branchWidth;
  ctx.lineTo(endX, endY);
  if (depth <= 1) {
   
    ctx.strokeStyle = '#7b6b43';
  }
  
  else {
    ctx.strokeStyle =colorHojas;
  }
 
  ctx.stroke();
  newDepth = depth - 1;

  if(!newDepth) {
    return;
  }
  subBranches = (fxrand() * (maxBranch -q)) +q;
  branchWidth *= 0.8;

  for (var i = 0; i < subBranches; i++) {
    newAngle = -angle + fxrand() * maxAngle - maxAngle * 0.5;
    newLength = length * (0.7 + fxrand() * 0.3);
    
    drawGrass(endX, endY, newLength, newAngle, newDepth, branchWidth);
  }

}



function drawTree(centerX, inY, length, angle, depth, branchWidth) {
 
  var newLength, newAngle, newDepth, maxBranch = 2,
      endX, endY, maxAngle = 2 * Math.PI / 5, subBranches;

  ctx.beginPath();
  ctx.moveTo(centerX, inY);
  endX = centerX + length * Math.cos(angle);
  endY = inY + length * Math.sin(angle);
  ctx.lineCap = 'round';
  ctx.lineWidth = branchWidth;
  ctx.lineTo(endX, endY);
  if (depth <= 1) {
   
    ctx.strokeStyle = colorTronco;
  }
  else if (depth <= 2) {
   
    ctx.strokeStyle = colorHojas;
  }
  else {
    ctx.strokeStyle =colorTronco;
  }
 
  ctx.stroke();
  newDepth = depth - 1;

  if(!newDepth) {
    return;
  }
  subBranches = (fxrand() * (maxBranch -q)) +q;
  branchWidth *= 0.8;

  for (var i = 0; i < subBranches; i++) {
    newAngle = angle + fxrand() * maxAngle - maxAngle * 0.5;
    newLength = length * (0.7 + fxrand() * 0.3);
    
    drawTree(endX, endY, newLength, newAngle, newDepth, branchWidth);
  }

}
function drawBackground() {
  var lg = ctx.createLinearGradient(0, 0, 0, ctx.canvas.height);
  lg.addColorStop(0, `#fff`);
  lg.addColorStop(0.5, `#e5e5e5`);
  lg.addColorStop(0.5, `#e5e5e5`);
  lg.addColorStop(1, `#eae2b7`);
  ctx.fillStyle = lg;
  ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}






