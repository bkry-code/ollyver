<?php snippet('header') ?>

<section class="page-article">
	<?php snippet('title') ?>
	<article>
		<?= $page->text()->kirbytext() ?>
	</article>
</section>

<?php foreach($page->children()->visible() as $section): ?>
<section class="page-table no-print">
	<h2><?= $section->title() ?></h2>
	<table class="tablesaw" data-tablesaw-mode="stack">
		<thead>
			<tr>
				<th>Title</th>
				<th>Role</th>
				<th>Producer</th>
				<th class="year">Year</th>
			</tr>
		</thead>
		<tbody>
			<?php foreach($section->children()->visible() as $item): ?>
			<tr>
				<td>
					<h3><?= $item->title() ?></h3>
					<?php if(!$item->type()->empty()): ?>
					<span class="type"><?= $item->type()->titlecase() ?></span>
					<?php endif ?>
				</td>
				<td>
					<?= $item->role() ?>
					<?php if(!$item->note()->empty()): ?>
					<span class="note"><?= $item->note() ?></span>
					<?php endif ?>
				</td>
				<td>
					<?= $item->producer() ?><br>
					<?php if(!$item->director()->empty()): ?>
					<span class="director">Dir. <?= $item->director()->titlecase() ?></span>
					<?php endif ?>
				</td>
				<td class="year"><?= $item->year() ?></td>
			</tr>
			<?php endforeach ?>
		</tbody>
	</table>
</section>
<?php endforeach ?>

<section class="page-article">
	<?php if(!$page->posttext()->empty()): ?>
	<article>
		<?= $page->posttext()->kirbytext() ?>
	</article>
	<?php endif ?>
	<?php snippet('recommended'); ?>
</section>

<?php snippet('footer') ?>