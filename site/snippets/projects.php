<section class="page-archive">
	<div id="filter">
		<h3>Sorting</h3>
		<div class="controls">
			<div class="filter-select">
				<select id="archive-filter">
					<option value="all">Show All</option>
					<?php $tagcloud = tagcloud(page('projects'), array('field' => 'category')); ?>
					<?php foreach($tagcloud as $tag): ?>
					<option value=".<?= explode(' ', trim($tag->name()))[0] ?>"><?= titlecase($tag->name()); ?></option>
					<?php endforeach ?>
				</select>
			</div>
			<div class="filter-select">
				<div id="sort-buttons" class="button-group">
					<a href="#" class="filter-button active" data-value="default">Publish Date</a>
					<a href="#" class="filter-button" data-value="name">Name/Title</a>
				</div>
			</div>
		</div>
	</div>
	<section id="archive">
		<?php $n = 0; ?>
		<?php foreach($pages->find('projects')->children()->visible() as $project): ?>
		<?php $n++; ?>
		<article class="issue-card mix <?= preg_replace('/\s*,\s*/', ' ', $project->category()); ?>" data-myorder="<?= $n; ?>" data-name="<?= $project->title() ?>">
			<a href="<?= $project->url() ?>">
				<header>
					<h1 class="name"><?= $project->title() ?></h1>
				</header>
				<figure>
					<img class="ri-archive" data-elixir="<?= $project->url(); echo '/' . $project->thumbnail() ?>" alt="<?= $project->title() ?>" width="400" height="500" src="data:image/image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAR4AAAFmCAIAAAA02mItAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QjVENjk0MDM3NDREMTFFNEI2MTc5NUU3M0RBRDU0NjEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QjVENjk0MDQ3NDREMTFFNEI2MTc5NUU3M0RBRDU0NjEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCNUQ2OTQwMTc0NEQxMUU0QjYxNzk1RTczREFENTQ2MSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCNUQ2OTQwMjc0NEQxMUU0QjYxNzk1RTczREFENTQ2MSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PpzmwU0AAALfSURBVHja7NMxDQAACAQxwL/aV4AJBoZWwiXXSQq4NhKAtcBaYC3AWmAtsBZgLbAWWAuwFlgLrAVYC6wF1gKsBdYCawHWAmuBtQBrgbXAWoC1wFpgLcBaYC2wFmAtsBZYC7AWWAusBVgLrAXWAqwF1gJrAdYCa4G1AGuBtcBagLXAWmAtwFpgLbAWYC2wFlgLsBZYC6wFWAusBdYCrAXWAmsB1gJrgbUAa4G1wFqAtcBaYC3AWmAtsBZgLbAWWAuwFlgLrAVYC6wF1gJrAdYCa4G1AGuBtcBagLXAWmAtwFpgLbAWYC2wFlgLsBZYC6wFWAusBdYCrAXWAmsB1gJrgbUAa4G1wFqAtcBaYC3AWmAtsBZgLbAWWAuwFlgLrAVYC6wF1gKsBdYCawHWAmuBtQBrgbXAWoC1wFpgLcBaYC2wFmAtsBZYC7AWWAusBVgLrAXWAqwF1gJrAdYCa4G1AGuBtcBagLXAWmAtwFpgLbAWWAuwFlgLrAVYC6wF1gKsBdYCawHWAmuBtQBrgbXAWoC1wFpgLcBaYC2wFmAtsBZYC7AWWAusBVgLrAXWAqwF1gJrAdYCa4G1AGuBtcBagLXAWmAtwFpgLbAWYC2wFlgLsBZYC6wFWAusBdYCrAXWAmsB1gJrgbUAa4G1wFqAtcBaYC3AWmAtsBZgLbAWWAuwFlgLrAVYC6wF1gKsBdYCawHWAmuBtcBaEoC1wFpgLcBaYC2wFmAtsBZYC7AWWAusBVgLrAXWAqwF1gJrAdYCa4G1AGuBtcBagLXAWmAtwFpgLbAWYC2wFlgLsBZYC6wFWAusBdYCrAXWAmsB1gJrgbUAa4G1wFqAtcBaYC3AWmAtsBZgLbAWWAuwFlgLrAVYC6wF1gKsBdYCawHWAmuBtQBrgbXAWoC1wFpgLcBaYC2wFmAtsBZYC7AWWAusBVgLrAXWAmsB1gJrgbUAa4G1wFqAtcBaYC3AWvDbCjAAaWoFon3wDeYAAAAASUVORK5CYII=" />
				</figure>
			</a>
		</article>
		<?php endforeach ?>
	</section>
	<div class="pager-list"></div>
</section>