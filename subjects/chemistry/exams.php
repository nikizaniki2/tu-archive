<!DOCTYPE html>
<html lang="bg">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="../../css/style.css">
  <title>TU-Archive</title>
</head>
<?php
    date_default_timezone_set("Europe/Sofia");
    $files = glob('./exams/*.pdf');
  ?>
<body>
  <!-- Header -->
  <header>
    <!-- Navigation side-bar -->
    <div class="navbar"></div>
    <!-- Main content -->
    <div class="main-content">
        <h1>Тестове</h1>
        <div class="wrap">
		<?php
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