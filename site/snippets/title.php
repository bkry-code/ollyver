<header>
	<?php if($page->template() == 'home'): ?>
		<h1><?= smartypants($site->title()->html()) ?></h1>
	<?php elseif(!$page->displaytitle()->empty()): ?>
		<h1><?= smartypants($page->displaytitle()->html()) ?></h1>
	<?php else: ?>
		<h1><?= smartypants($page->title()->html()) ?></h1>
	<?php endif ?>

	<?php if($page->template() == 'home'): ?>
		<span class="description"><?= smartypants($site->description()->html()) ?></span>
	<?php elseif($page->parent()->template() == 'projects'): ?>
		<span class="meta"><?= $page->category()->html()->titlecase() ?> · <?= $page->year()->html() ?></span>
	<?php elseif($page->parent()->template() == 'notes'): ?>
		<span class="meta"><?= $page->date('jS F Y') ?></span>
	<?php elseif(!$page->description()->empty()): ?>
		<span class="description"><?= smartypants($page->description()->html()) ?></span>
	<?php endif ?>
</header>