<?php

namespace ReactTheme;

define("THEME_DIR", __DIR__);

include_once \THEME_DIR . '/backend/Scripts.php';
include_once \THEME_DIR . '/backend/api/Navigation.php';
include_once \THEME_DIR . '/backend/api/Pages.php';
include_once \THEME_DIR . '/backend/api/General.php';

use ReactTheme\Backend\Api\General;
use ReactTheme\Backend\Api\Navigation;
use ReactTheme\Backend\Api\Pages;
use ReactTheme\Backend\Scripts;

// Set JS.
$scripts = new Scripts();

// Set API enpoints and corresponding settings fields.
$general    = new General();
$navigation = new Navigation();
$pages      = new Pages();
