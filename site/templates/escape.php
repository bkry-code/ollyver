<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1">
	<title><?= $page->title()->html() ?></title>
	<meta name="description" content="<?= $site->description()->html() ?>">
	<meta name="keywords" content="<?= $site->keywords()->html() ?>">
	<meta name="author" content="<?= $site->title()->html() ?>">
</head>
<body>
<style>
	html { 
		background: url('<?= $page->url() . '/' . $page->secretimage() ?>') no-repeat center center fixed; 
		-webkit-background-size: cover;
		-moz-background-size: cover;
		-o-background-size: cover;
		background-size: cover;
	}
</style>
</body>
</html>