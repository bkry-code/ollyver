<!DOCTYPE html>
<!--#if expr="$HTTP_COOKIE=/fonts-loaded=true/" -->
<html lang="en" class="fonts-loaded">
<!--#else -->
<html lang="en">
<!--#endif -->
<head>

	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1">

	<title><?php e($page->isHomePage(), $site->title()->html(), $page->title()->html()) ?></title>
	<?php if($page->description() != ''): ?>
		<meta name="description" content="<?= $page->description()->html() ?>" />
	<?php else: ?>
		<meta name="description" content="<?= $site->description()->html() ?>" />
	<?php endif ?>
	<?php if($page->keywords() != ''): ?>
		<meta name="keywords" content="<?= $page->keywords()->html() ?>" />
	<?php else: ?>
		<meta name="keywords" content="<?= $site->keywords()->html() ?>" />
	<?php endif ?>
	<meta name="author" content="<?= $site->title()->html() ?>">


	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
	<?= js('assets/js/fontfaceobserver.min.js') ?>

	<?php snippet('scss') ?>

	<!--[if lte IE 9]>
		<script src="http://intrepidolive.com/assets/js/html5shiv-printshiv.min.js"></script>
		<script src="http://intrepidolive.com/assets/js/respond.min.js"></script>
		<script src="http://intrepidolive.com/assets/js/placeholders.min.js"></script>
	<![endif]-->

</head>
<body>

<nav role="navigation" class="nav">
	<div class="inner">
		<p class="logo"><a href="<?= $site->url() ?>"><strong><?= $site->initials() ?></strong></a></p>
		<p class="menu">Menu</p>
		<ul class="menu-list">
		<?php foreach($pages->visible() as $p): ?>
			<li><a <?php if($page->depth() <= 1): e($p->isOpen(), ' class="active"'); endif ?> href="<?= $p->url() ?>"><?= $p->title()->html() ?></a></li>
		<?php endforeach ?>
		</ul>
	</div>
</nav>

<main class="main" role="main">