<section class="notes">
	<h2>Recent Notes</h2>
	<ul>
		<?php foreach($pages->find('notes')->children()->visible()->limit(4) as $note): ?>
		<li>
			<h3><a href="<?= $note->url() ?>"><?= $note->title() ?></a></h3>
			<span><?= $note->date('jS F Y') ?></span>
		</li>
		<?php endforeach ?>
	</ul>
</section>