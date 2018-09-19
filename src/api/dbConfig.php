<?php
/**
 * Created by PhpStorm.
 * User: jigar-halani
 * Date: 18/9/18
 * Time: 9:24 AM
 */

class dbConfig
{
  private $host="127.0.0.1";
  private $userName="root";
  private $password="mysql";
  private $database="blog";

  protected $connection;

  public function __construct()
  {
    if(!(isset($this->connection))){
      $this->connection=new mysqli($this->host,$this->userName,$this->password,$this->database);
      if(!($this->connection)){
        echo "error in connecting to database";
        exit("error in connecting to database");
      }
    }
    return $this->connection;
  }
}
