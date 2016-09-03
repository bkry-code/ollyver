<?php snippet('header') ?>

<section class="page-article">
	<?php snippet('title') ?>
	<article>
		<?= $page->text()->kirbytext() ?>
	</article>
	<?php if($page->parent() == 'notes'): ?>
		<?php snippet('notes') ?>
	<?php endif ?>
</section>

<?php if($page->parent() == 'projects'): ?>
	<?php snippet('projects') ?>
<?php endif ?>

<?php snippet('footer') ?>