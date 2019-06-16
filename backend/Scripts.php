<?php

namespace ReactTheme\Backend;

/**
 * Scripts class
 */
class Scripts
{
    public const REACT_WP_THEME = 'react-wp-theme';
    public const REACT_WP_VAR   = "WP_React";

    /**
     * Constructor.
     */
    public function __construct()
    {
        add_action('wp_enqueue_scripts', [$this, 'addReact']);
        add_action('wp_enqueue_scripts', [$this, 'addStyling']);
        $this->removeDefaults();
    }

    /**
     * Add React to Wordpress.
     *
     * @return void
     */
    public function addReact()
    {
        // Add React JS.
        \wp_enqueue_script(self::REACT_WP_THEME, \get_template_directory_uri() . '/frontend/dist/main.js', [], '0.1', true);

        // Add Blog title name and api endpoint as JS variable.
        \wp_localize_script(self::REACT_WP_THEME, 'WP_React', [
            'title'   => \get_bloginfo('name', 'display'),
            "api_url" => \esc_url_raw(\get_rest_url(null, "/")),
        ]);
    }

    /**
     * Add styling to react.
     *
     * @return void
     */
    public function addStyling()
    {
        \wp_enqueue_style(self::REACT_WP_THEME, \get_template_directory_uri() . '/frontend/dist/style.css', [], '0.1');
    }

    /**
     * Remove unnecessary Wordpress default scripts and styles.
     *
     * @return void
     */
    protected function removeDefaults()
    {
        \remove_action('wp_head', 'print_emoji_detection_script', 7);
        \remove_action('admin_print_scripts', 'print_emoji_detection_script');
        \remove_action('wp_print_styles', 'print_emoji_styles');
        \remove_action('admin_print_styles', 'print_emoji_styles');
    }
}
