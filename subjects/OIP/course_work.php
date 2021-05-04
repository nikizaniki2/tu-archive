<!DOCTYPE html>
<html lang="bg">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="/css/style.css">
  <title>TU-Archive</title>
</head>
<body>
  <!-- Header -->
  <header>
      <form name="data">
      <table><tr><td>
      <b>H</b></td><td> <i>(in pixels):</i></td><td> <input type="text" name="H" value="52"></td></tr>
      <tr><td>
      <b>J</b></td><td> <i>(in pixels):</i></td><td> <input type="text" name="J" value="84"></td></tr>
      </table>
    </form>
    <div class="main-content">
        <h1>Курсова 2 (Canvas)</h1>
        <button onclick="draw()">Draw</button> <button onclick="clean()">Clean</button>
        <div onload="draw();">
<canvas id="canvasPlot" width="1000px" height="500px" style="border: 1px dotted #0000aa;">Your browser does not support HTML5 canvas.</canvas>
        </div>
    </div>
  </header>
  <script src="/subjects/OIP/course_work/canvas.js"></script>
  <script src="/js/nav.js"></script>
  <script src="/js/cookies.js"></script>
  <script src="/js/app.js"></script>
</body>
</html>