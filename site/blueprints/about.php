<?php if(!defined('KIRBY')) exit ?>

title: About
pages:
  template:
    - filmography
    - theatrics
fields:
  title:
    label: Title
    type:  text
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
  posttext:
    label: Ending Text
    type: markdown
    help: If you have résumé tables on your about page you can add text that will succeed them here.