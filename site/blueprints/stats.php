<?php if(!defined('KIRBY')) exit ?>

title: Stats
pages: false
files: false
fields:
  info:
    label: Stats Info
    type: info
    text: >
      These text fields contain the raw data collected about page visits on your site. To reset all visitor data, delete all text in the three fields to start the counting anew. Otherwise, I wouldn't recommend editing this page directly.
  total-stats-count:
    label: Total Visits
    type: text
  dates:
    label: Dates
    type:  textarea
    buttons: false
  pages:
    label: Pages
    type:  textarea
    buttons: false