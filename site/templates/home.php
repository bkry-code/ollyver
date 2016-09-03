<?php snippet('header') ?>

<section class="page-article">
	<?php snippet('title') ?>
	<article>
		<?= $page->text()->kirbytext() ?>
	</article>
	<?php if($pages->has('notes') && $pages->find('notes')->togglenotes() == '1'): ?>
		<?php snippet('notes') ?>
	<?php endif ?>
	<?php if($pages->has('newsletter') && $pages->find('newsletter')->togglenewsletter() == '1'): ?>
		<?php snippet('newsletter') ?>
	<?php endif ?>
	<?php snippet('recommended') ?>
</section>

<?php if($pages->has('projects') && $pages->find('projects')->toggleprojects() == '1'): ?>
	<?php snippet('projects') ?>
<?php endif ?>

<?php snippet('footer') ?>