//Navbar
let html = `
<navbar>
<link rel="stylesheet" href="/css/nav.css">
      <div class="nav-img">
        <a href="/"><img id="logo" src="/img/icons/icon-256x256.png" alt="Tu-Archive Logo"></a>
      </div>
      <nav>
        <ul>
            <li><a href="/">Начало</a></li>

            <li><p>Календари</p>
              <ul>
              <li><a href="/calendars/cal_41.php">41 Група</a></li>
              <li><a href="/calendars/cal_42.php">42 Група</a></li>
              <li><a href="/calendars/cal_43.php">43 Група</a></li>
              <li><a href="/calendars/cal_44.php">44 Група</a></li>
              </ul>
            </li>

            <li><p>ПИК</p>
              <ul>
                <li><a href="/subjects/PIK/exams.php">Изпити</a></li>
                <li><a href="/subjects/PIK/resources.php">Материали</a></li>
              </ul>
            </li>

            <li><p>ОИП</p>
              <ul>
                <li><a href="/subjects/OIP/materials.php">Лекции/Упр</a></li>
				        <li><a href="/subjects/OIP/exams.php">Изпити</a></li>
              </ul>
            </li>
            <li><p>Т. пр.</p>
              <ul>
                <li><a href="/download">Материали</a></li>
              </ul>
            </li>
            <li><p>Машинознание</p>
              <ul>
                <li><a href="/">Лекции</a></li>
              </ul>
            </li>
            <li><p>Материалознание</p>
              <ul>
                <li><a href="/">Лекции</a></li>
              </ul>
            </li>
            <li><p>Математика</p>
              <ul>
                <li><a href="/subjects/maths/materials.php">Лекции/Упр</a>
                <li><a href="/subjects/maths/exams.php">Изпити</a></li>
              </ul>
            </li>

            <li><p>Физика</p>
              <ul>
                <li><a href="/subjects/phisics/lectures.php">Лекции</a></li>
              </ul>
            </li>

        </ul>
      </nav>
    </navbar>
`;
document.querySelector(".navbar").innerHTML = html;