<?php require 'rest/setvar.php'; ?>
<?php require 'core/filter.php'; ?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style/style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://getbootstrap.com/docs/5.3/assets/css/docs.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"></script>
    <script src="function.js"></script>
    <link rel="stylesheet" href="exercise\src\style.css">
    <title>Document</title>
</head>
<body class="homepage">
<?php
    ////// FIERE //////
    $name_conference = set_var_fiere()[0];
    $regione = set_var_fiere()[1];
    $city = set_var_fiere()[2];
    $address = set_var_fiere()[3];
    $date = set_var_fiere()[4];
    $website = set_var_fiere()[5];

    ////// PAD //////
    $n_pavilion = set_var_pad()[0];
    $name_conference_pad = set_var_pad()[1];

    ////// STAND /////        
    $name_stand = set_var_stand()[0];
    $number_stand = set_var_stand()[1];
    $category_stand = set_var_stand()[2];
    $n_pav_stand = set_var_stand()[3];
    $descr_stand = set_var_stand()[4];
    $website_stand = set_var_stand()[5];
    ?>

<!-- Sidebar -->
<button class="hamburger" id="butHamb" onclick="hamburger()">☰</button><br>
<div class="sidebar"  id="mySidebar">
  <div class="raw">
    <br>
    <div class="col">
     
    </div>
    <br>
    
    <form action="" method="post" id="form" target="_self" onsubmit="hamburger()">

      <input type="text" name="categoria" id="categoria" list="list_cat" placeholder="CATEGORIA"><br>
      <datalist id="list_cat" name="list_cat">
        <option value="Comics">Comics</option>
        <option value="Fumetti">Fumetti</option>
        <option value="Games">Games</option>
      </datalist>

      <input type="text" name="periodo" id="periodo" list="list_per" placeholder="PERIODO"><br>
      <datalist id="list_per">
        <option disabled selected>PERIODO</option>
        <option value="Gennaio">Gennaio</option>
        <option value="Febbraio">Febbraio</option>
        <option value="Marzo">Marzo</option>
      </datalist> 

      <input type="text" name="regione" id="regione" list="list_reg" placeholder="REGIONE"><br>
      <datalist id="list_reg">
        <option disabled selected>REGIONE</option>
        <option value="Emilia Romagna">Emilia Romagna</option>
        <option value="Toscana">Toscana</option>
        <option value="Campania">Campania</option>
      </datalist>

      <input type="text" name="citta" id="citta" list="list_cit" placeholder="CITTA'"><br><br>
      <datalist id="list_cit">
        <option disabled selected>CITTA'</option>
        <option value="Bologna">Bologna</option>
        <option value="Lucca">Lucca</option>
        <option value="Roma">Roma</option>
      </datalist>

      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 20 20">
        <path d="M18.869 19.162l-5.943-6.484c1.339-1.401 2.075-3.233 2.075-5.178 0-2.003-0.78-3.887-2.197-5.303s-3.3-2.197-5.303-2.197-3.887 0.78-5.303 2.197-2.197 3.3-2.197 5.303 0.78 3.887 2.197 5.303 3.3 2.197 5.303 2.197c1.726 0 3.362-0.579 4.688-1.645l5.943 6.483c0.099 0.108 0.233 0.162 0.369 0.162 0.121 0 0.242-0.043 0.338-0.131 0.204-0.187 0.217-0.503 0.031-0.706zM1 7.5c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5-2.916 6.5-6.5 6.5-6.5-2.916-6.5-6.5z"></path>
      </svg>
      <input type="submit" name="search" id="search" value="Cerca">
    </form>
  </div>
</div>

<div class="col-11 justify-content-end" id="home">
<aside id="side_info" >
  <!-- <section> -->
    <br>
    <div class="row" id=row>
      <article class="article2">
        <p id="name_fiera" style='padding:2px; font-size: 22px; text-align: left;'><?php echo $name_conference ?></p>
        <h4 style="text-align: left;"><strong>Informazioni generali:</strong></h4><br>
        <div class="row">
          <div class="col">
            <p>Città:</p>
            <p id="city"><strong><?php echo $city ?></strong></p>
            <hr style="height:5px;color:#fff;">
            <p>Via:</p>
            <p id="address"><strong><?php echo $address ?></strong></p>
          </div>
          <div class="col">
            <p>Periodo:</p>
            <p id="date"><strong><?php echo $date ?></strong></p>
            <hr style="height:5px;color:#fff;">
            <p>Sito:</p>
            <p id="website"><strong> <?php echo $website ?></strong></p>
          </div>
        </div>  
      </article>
    <!-- </div> -->
    <br>
  <!-- </section> -->
</aside>
</div>
<div class="result" id="result">
  <?php 
    $text='<input type="button" value="';
    if (isset($_POST["search"])){
      $result=filter();     
      while($row = $result->fetch_assoc()) {
          echo $text.$row['name_conference'].'" onclick="showHome()">';
      }  
    } 
  ?>
</div>

<div class="col-6" id="frame">
  <iframe src="http://localhost:5173/" scrolling="no" frameborder="0" width="140%" height="700"></iframe>
    </div>
</body>



<!-- <footer class="bg-light text-center " id="footer"> -->
  <div class="footer" id="footer">
    <section class="mb-4">
     <div class="row"> 

        <div class="col">
          <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="44" height="44" rx="8" fill="#96DA84"/>
          <path d="M19.1429 12V14.7143H30V28.2857H19.1429V31H32.7143V12H19.1429ZM21.8571 17.4286V20.1429H11V22.8571H21.8571V25.5714L27.2857 21.5L21.8571 17.4286Z" fill="#59A444"/>
          </svg>
          <p class="entrata"><strong>Entrata</strong></p>
        </div>

        <div class="col">
          <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="44" height="44" rx="8" fill="#FFC4AD"/>
          <path d="M27.1962 16L22 25L16.8038 16L27.1962 16Z" stroke="#FE7540" stroke-width="3"/>
          <path d="M22 26V34" stroke="#FE7540" stroke-width="3" stroke-linecap="round"/>
          <path d="M18 34L26 34" stroke="#FE7540" stroke-width="3" stroke-linecap="round"/>
          </svg>
          <p class="bar"><strong>Bar</strong></p>
        </div>

        <div class="col">
          <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="44" height="44" rx="8" fill="#AEBBFF"/>
          <path d="M13.2679 26L10.5199 17.6H12.5359L14.9239 25.04H13.9159L16.4119 17.6H18.2119L20.6119 25.04H19.6399L22.0879 17.6H23.9479L21.1999 26H19.1119L16.9879 19.472H17.5399L15.3559 26H13.2679ZM28.9594 26.144C28.3114 26.144 27.7074 26.04 27.1474 25.832C26.5954 25.616 26.1154 25.312 25.7074 24.92C25.2994 24.528 24.9794 24.068 24.7474 23.54C24.5234 23.012 24.4114 22.432 24.4114 21.8C24.4114 21.168 24.5234 20.588 24.7474 20.06C24.9794 19.532 25.2994 19.072 25.7074 18.68C26.1234 18.288 26.6074 17.988 27.1594 17.78C27.7114 17.564 28.3154 17.456 28.9714 17.456C29.6994 17.456 30.3554 17.584 30.9394 17.84C31.5314 18.088 32.0274 18.456 32.4274 18.944L31.1794 20.096C30.8914 19.768 30.5714 19.524 30.2194 19.364C29.8674 19.196 29.4834 19.112 29.0674 19.112C28.6754 19.112 28.3154 19.176 27.9874 19.304C27.6594 19.432 27.3754 19.616 27.1354 19.856C26.8954 20.096 26.7074 20.38 26.5714 20.708C26.4434 21.036 26.3794 21.4 26.3794 21.8C26.3794 22.2 26.4434 22.564 26.5714 22.892C26.7074 23.22 26.8954 23.504 27.1354 23.744C27.3754 23.984 27.6594 24.168 27.9874 24.296C28.3154 24.424 28.6754 24.488 29.0674 24.488C29.4834 24.488 29.8674 24.408 30.2194 24.248C30.5714 24.08 30.8914 23.828 31.1794 23.492L32.4274 24.644C32.0274 25.132 31.5314 25.504 30.9394 25.76C30.3554 26.016 29.6954 26.144 28.9594 26.144Z" fill="#526EFE"/>
          </svg>
          <p class="bagni"><strong>Bagni</strong></p>
        </div>

        <div class="col">
          <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="44" height="44" rx="8" fill="#FFDBA9"/>
          <path d="M24.5 12C23.125 12 22 13.125 22 14.5C22 15.875 23.125 17 24.5 17C25.875 17 27 15.875 27 14.5C27 13.125 25.875 12 24.5 12ZM20.75 18.25C18.675 18.25 17 19.925 17 22H19.5C19.5 21.3 20.05 20.75 20.75 20.75C21.45 20.75 22 21.3 22 22C22 22.7 19.5 26.1 19.5 28.25C19.5 30.4 21.175 32 23.25 32C25.325 32 27 30.325 27 28.25H24.5C24.5 28.95 23.95 29.5 23.25 29.5C22.55 29.5 22 28.95 22 28.25C22 27.35 24.5 23.65 24.5 22C24.5 19.975 22.825 18.25 20.75 18.25Z" fill="#FDAD3F"/>
          </svg>
          <p class="info"><strong>Info</strong></p>
        </div>

        <div class="col">
          <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="44" height="44" rx="8" fill="#E5E6ED"/>
          <path d="M12.0272 11V16.4333H31.0438V11H12.0272ZM12.0272 19.15V32.4887C12.0272 32.6246 12.1358 32.7332 12.2717 32.7332H30.7721C30.9079 32.7332 31.0166 32.6246 31.0166 32.4887V19.15H12H12.0272ZM14.7438 21.8666H17.4605V24.5833H14.7438V21.8666ZM20.1771 21.8666H22.8938V24.5833H20.1771V21.8666ZM25.6104 21.8666H28.3271V24.5833H25.6104V21.8666ZM14.7438 27.2999H17.4605V30.0166H14.7438V27.2999ZM20.1771 27.2999H22.8938V30.0166H20.1771V27.2999Z" fill="black"/>
          </svg>
          <p class="stand"><strong>Stand</strong></p>
        </div>
        <div class="col">
          <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="44" height="44" rx="8" fill="#DA9F85"/>
          <path d="M13.8033 14C12.8175 14 12 14.8175 12 15.8033V29.0279C12 30.0137 12.8175 30.8312 13.8033 30.8312H24.6234C25.6093 30.8312 26.4268 30.0137 26.4268 29.0279V26.0223H24.0223V28.4268H14.4045V16.4045H19.2134V14H13.8033ZM26.4268 14V16.4045C21.4976 16.4045 17.5303 20.1073 16.9532 24.8922C17.4581 22.7763 19.3336 21.2134 21.6179 21.2134H26.4268V23.6179L31.2357 18.8089L26.4268 14Z" fill="#A85734"/>
          </svg>
          <p class="exit"><strong>Exit</strong></p>
        </div>
     </div>
    </section>
  </div>
<!-- </footer> -->
</html> 
