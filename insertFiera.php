<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
            <label for="fiere">Inseririmento Fiere</label><br>
            <form id='fiere' action="core/postFiere.php" method="POST"><p>

            <label for="name_conference">Nome Fiera</label><br>
            <input type="text" name="name_conference" id="name_conference"></p>

            <p><label for="regione">Regione Fiera</label><br>
            <input type="text" name="regione" id="regione"></p>

            <p><label for="city">Città Fiera</label><br>
            <input type="text" name="city" id="city"></p>

            <p><label for="address">Indirizzo Fiera</label><br>
            <input type="text" name="address" id="address"></p>

            <p><label for="date">Periodo Fiera</label><br>
            <input type="text" name="date" id="date"></p>

            <p><label for="website">Sito Web Fiera</label><br>
            <input type="text" name="website" id="website"></p>

            <p><label for="type">Genere della Fiera</label><br>
            <input type="text" name="type" id="type"></p>

            <p><label for="3dmap">Inserire Mappa3D</label><br>
            <input type="text" name="3dmap" id="3dmap">

            <p><label for="mappdf">Inserire MappaPDF</label><br>
            <input type="text" name="mappdf" id="mappdf">

            <p><input type="submit" value="Invia"></p>
            
        </form>
</body>
</html>