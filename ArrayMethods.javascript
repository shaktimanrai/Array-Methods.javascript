
 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Array Methods</title>
    <style>
      body{
        display: flex;
  flex-direction: column;
  background: teal;
  border: 3px solid yellow;
  align-items: stretch;
  justify-content: flex-end;
      }
.topline
{
  align-items: stretch;
  display: flex;
  flex-direction: row;
  border: 3px solid pink;
  justify-content: space-evenly;
  box-shadow: 10px 5px 5px rgba(34, 12, 92, 0.856);
}
.secondline
{
  align-items: stretch;
  border: 3px solid rosybrown;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
    </style>
    <script>
      let a=[];
function fUnShift()
{
  let x=document.getElementById("txtInput").value;
  a.unshift(x);
  alert(x + " added");
}
function fShift()
{
  
 let x=a.shift();
  alert(x + " removed");
}

function fPush()
{
  let x=document.getElementById("txtInput").value;
  a.push(x);
  alert(x + " added");
}
function fPop()
{
  
 let x=a.pop();
  alert(x + " removed");
}
function getAllData()
{
  let output=document.getElementById("txtOutput");
  let n=a.length;
  output.value="";
  for(let i in a)
  output.value += a[i] + ",";
}
    </script>
</head>
<body>
        <div class="topline">
            <div><button onclick="fUnShift()">UnShift ( Adds elements to the beginning)</button></div>
            <div><button onclick="fShift()">Shift ( Del elements from the beginning)</button></div>
            <div><button onclick="fPush()">Push ( Adds elements to the end)</button></div>  
            <div><button onclick="fPop()">Pop ( del elements from the beginning)</button></div>
            <div><button onclick="getAllData()">Get ( Get All Elements)</button></div>
          </div>
          <br>
          <div class="secondline">
            <div><label>Input</label></div>
            <div><label>Output</label></div>
            
            
          </div>
          <div class="secondline">
            <div><input id="txtInput" type="number"></div>
            <div><textarea id="txtOutput"></textarea></div>
            
            
          </div>
          
    
    
    
    
</body>
</html>

