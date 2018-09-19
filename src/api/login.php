<?php
/**
 * Created by PhpStorm.
 * User: jigar-halani
 * Date: 18/9/18
 * Time: 9:49 AM
 */

include "crud.php";
$crud=new Crud();
$loginData=json_decode(file_get_contents("php://input"));
if(sizeof($loginData)!=0)
{
  $username=$loginData->userName;
  $password=$loginData->password;
  $query="select * from user where email='".$username."' and password='".$password."'";
  $data=$crud->select('user','','');
  if($data[0]['password']==$password){
    echo json_encode($data[0]);
  }
  else{
    echo json_encode("Error No Result Found");
  }
}
