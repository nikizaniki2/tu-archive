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
    <!-- Navigation side-bar -->
    <div class="navbar"></div>
    <!-- Main content -->
    <div class="main-content">
        <h1>Изпит 30/11/2020</h1>
        <div class="wrap">
    <?php
    date_default_timezone_set("Europe/Sofia");
        $files = glob('./exams/30-11-2020/*.pdf');
        foreach($files as $file)
        {
          echo'<a class="blue-btn" href="lectures/.'.$file.'" target="_blank">'.basename($file).'</a>';
        }
?>
        </div>
        <h1>Source Code</h1>
        <div class="wrap">
    <?php
        $files = glob('./exams/30-11-2020/*.c');
        foreach($files as $file)
        {
          echo'<a class="blue-btn" href="lectures/.'.$file.'" target="_blank">'.basename($file).'</a>';
        }
?>
        </div>
    </div>
  </header>
  <script src="/js/nav.js"></script>
  <script src="/js/cookies.js"></script>
  <script src="/js/app.js"></script>
</body>
</html>