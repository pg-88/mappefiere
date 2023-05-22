<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
            <label for="stand">Inseririmento Stand</label><br>
            <form id='stand' action="core/postStand.php" method="POST"><p>

            <label for="n_stand">Numero Stand</label><br>
            <input type="text" name="n_stand" id="n_stand"></p>

            <p><label for="name_stand">Nome Stand</label><br>
            <input type="text" name="name_stand" id="name_stand"></p>

            <p><label for="category">Categoria Stand</label><br>
            <input type="text" name="category" id="category"></p>

            <p><label for="description">Descrizione Stand</label><br>
            <input type="text" name="description" id="description"></p>

            <p><label for="n_pavilion">Numero Padiglione</label><br>
            <input type="text" name="n_pavilion" id="n_pavilion"></p>

            <p><label for="website">Sito Web Stand</label><br>
            <input type="text" name="website" id="website"></p>

            <p><input type="submit" value="Invia"></p>
            
        </form>
</body>
</html>