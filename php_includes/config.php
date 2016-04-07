<?php
  $servername = "localhost";
  $username = "root";
  $password = "root";
  $db = "cms";

  // site master
  $site_master = "A. Krause Design";

  // Create connection
  $conn = new mysqli($servername, $username, $password, $db);

  // Check connection
  if ($conn->connect_error) {
      die("Connection failed: " . $conn->connect_error);
  }


  $sql = "SELECT page_title FROM pages WHERE page_id = 1";
  $result = $conn->query($sql);

  if ($result->num_rows > 0) {
      // output data of each row
      while($row = $result->fetch_assoc()) {
          echo "<title>" . $row["page_title"] . " | " . $site_master . "</title>";
      }
  } else {
      echo "0 results";
  }
  $conn->close();
  alsdf 
?>
