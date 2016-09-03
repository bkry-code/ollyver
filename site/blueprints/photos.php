<?php if(!defined('KIRBY')) exit ?>

title: Photos
pages: false
fields:
  title:
    label: Default Title
    type: text
  displaytitle:
    label: Display Title
    type:  text
    help: Leave blank to use default title on page.
    width: 1/2
  description:
    label: Description
    type: text
    help: You can add a line that appears directly under the page title.
    width: 1/2
  text:
    label: Text
    type:  markdown