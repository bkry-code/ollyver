<?php snippet('header') ?>

<section class="page-article">
	<?php snippet('title') ?>
	<article>
		<?= $page->text()->kirbytext() ?>
	</article>
	<?php if($pages->has('notes') && $pages->find('notes')->togglenotes() == 'true'): ?>
		<?php snippet('notes') ?>
	<?php endif ?>
	<?php if($pages->has('newsletter') && $pages->find('newsletter')->togglenewsletter() == 'true'): ?>
		<?php snippet('newsletter') ?>
	<?php endif ?>
	<?php snippet('recommended') ?>
</section>

<?php if($pages->has('projects') && $pages->find('projects')->toggleprojects() == 'true'): ?>
	<?php snippet('projects') ?>
<?php endif ?>

<?php snippet('footer') ?>