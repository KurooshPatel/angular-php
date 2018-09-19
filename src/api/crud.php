<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

include_once 'dbConfig.php';

class Crud extends DbConfig{
  public function __construct(){
    parent::__construct();
  }

  public function getData($query){
    $result=$this->connection->query($query);
    if($result==false){
      echo $this->connection->error;
      return false;
    }

    $rows=array();
    while($row=$result->fetch_assoc()){
      $rows[]=$row;
    }
    return $rows;
  }

  public function execute($query){
    $result=$this->connection->query($query);
    if($result==false){
      echo $this->connection->error;
      return false;
    }else{
      return true;
    }
  }

  public function escape_string($value){
    return $this->connection->real_escape_string($value);
  }
  function update($table, &$fields, $condition)
  {

    $sql = "update $table set ";
    foreach ($fields as $key => $value) {
      $fields[$key] = " `$key` = '" . $value . "' ";
    }
    $sql .= implode(" , ", array_values($fields)) . " where " . $condition . ";";
    $fields = array();

    $result=$this->connection->query($sql);
    $rows=array();
    while($row=$result->fetch_assoc()){
      $rows[]=$row;
    }
    return $rows;

  }


  public function select($table, $fields, $condition)
  {
    if ($fields == "")
      $fields = " * ";

    $sql = "select $fields from $table ";
    if ($condition)
      $sql .= $condition . ";";
    $result=$this->connection->query($sql);
    $rows=array();
    while($row=$result->fetch_assoc()){
      $rows[]=$row;
    }
    return $rows;


  }


  public function insert($table, $field, $data)
  {

    $field_values = implode(',', $field);
    $data_values = implode("','", $data);
    $sql = "INSERT into" . " " . $table . "( " . $field_values . " )VALUES (' " . $data_values . "')";

    $result = $this->connection->query($sql);

    return $result;
  }

  public function delete($table, $condition)
  {

    $sql = "delete from $table ";
    if ($condition)
      $sql .= $condition . ";";
    return $this->connection->query($sql);
  }
}
