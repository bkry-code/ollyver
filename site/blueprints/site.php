<?php if(!defined('KIRBY')) exit ?>

title: Site
pages:
  template:
    - default
    - about
    - escape
    - newsletter
    - notes
    - photos
    - projects
files: false
fields:
  title:
    label: Name
    type:  text
    help: The title of the website is also used as the title on the home page.
    width: 1/2
  initials:
    label: Initials
    type: text
    required: true
    help: These are used as a logo on the top navigation bar of the site.
    width: 1/2
  email:
    label: Email
    type: email
    help: Display your email in the footer of the site.
    width: 1/2
  phone:
    label: Phone
    type: tel
    help: Display your telephone number in the footer of the site.
    width: 1/2
  description:
    label: Description
    type:  textarea
  keywords:
    label: Keywords
    type:  tags