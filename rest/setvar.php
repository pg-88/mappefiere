<?php
function set_var(){
        $input = '145';
        $url = "http://127.0.0.1:8000/allstandn_stand=$input";
        $json = file_get_contents($url);
        $data = json_decode($json, true);

        $name = $data[$input]['name_stand'];
        $number = $data[$input]['n_stand'];
        $category = $data[$input]['category'];
        $n_pav = $data[$input]['n_pavilion'];
        $descr = $data[$input]['description'];
        $website = $data[$input]['website'];
        return [$name,$number,$category,$n_pav,$descr,$website];
}
set_var();

?>