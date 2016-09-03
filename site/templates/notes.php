<?php snippet('header') ?>

<section class="page-article">
	<?php snippet('title') ?>
	<section class="notes">
		<ul>
			<?php foreach($pages->find('notes')->children()->visible()->limit(1000) as $note): ?>
			<li>
				<h3><a href="<?= $note->url() ?>"><?= $note->title() ?></a></h3>
				<span><?= $note->date('jS F Y') ?></span>
			</li>
			<?php endforeach ?>
		</ul>
	</section>
</section>

<?php snippet('footer') ?>