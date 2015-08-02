<?php
include_once($_SERVER['FILE_PREFIX']."/project_list/project_object.php") ;
$github_uri   = "https://github.com/aidansean/symbols" ;
$blogpost_uri = "http://aidansean.com/projects/?tag=symbols" ;
$project = new project_object("symbols", "Symbol browser", "https://github.com/aidansean/symbols", "http://aidansean.com/projects/?tag=symbols", "symbols/images/project.jpg", "symbols/images/project_bw.jpg", "This is a simple tool to allow the user to quickly copy a string of symbols.", "Tools,Physics,Web design", "CSS,HTML,JavaScript,ZeroClipboard") ;
?>