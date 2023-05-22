<?php require 'rest/setvar.php'; ?>
<?php require 'core/filter.php'; ?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
</head>
<body>
<h2><b>Risultati</b></h2>

<p>
    <a href="index.php">
        <?php 
            $result=filter();     
            while($row = $result->fetch_assoc()) {
                echo $row['name_conference'];
            }  
        ?>
    </a>
</p>    
</body>
</html> 

</body>
</html>