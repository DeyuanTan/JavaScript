<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<?php
	class Person
	{
		function _construct($name,$sex)
		{
			$this->name=$name;
			$this->sex=$sex;
		}
		function showName()
		{
			echo $this->name;
		}
		function showSex()
		{
			echo $this->sex;
		}
	}
	class Worker extends Person
	{
		function _construct($name,$sex,$job)
		{
			parent::_construct($name,$sex);
		}
	}
	$w1=new Worker('blue','男','教师');
	$w1->showName();
	?>
</body>
</html>