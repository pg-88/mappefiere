<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
            <label for="pad">Inseririmento Padiglione</label><br>
            <form id='pad' action="core/postPad.php" method="POST"><p>

            <label for="n_pavilion">Numero Padiglione</label><br>
            <input type="text" name="n_pavilion" id="n_pavilion"></p>

            <p><label for="name_conference">Nome Fiera</label><br>
            <input type="text" name="name_conference" id="name_conference"></p>

            <p><input type="submit" value="Invia"></p>
            
        </form>
</body>
</html>