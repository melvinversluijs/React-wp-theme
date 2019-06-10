<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * PHP Version 7.3
 *
 * @package ReactTheme
 * @author Melvin Versluijs <https://www.github.com/melvinversluijs>
 * @license MIT <https://www.github.com/melvinversluijs/React-wp-theme/blob/master/LICENSE>
 * @since 1.0.0
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 */
?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <?php wp_head();?>
  </head>
  <body>
    <div id="root"></div>
    <?php wp_footer();?>
  </body>
</html>
