<?php

namespace ReactTheme\Backend\Api;

include_once \THEME_DIR . '/backend/api/AbstractApi.php';

use ReactTheme\Backend\Api\AbstractApi;

/**
 * General class.
 */
class General extends AbstractApi
{
    public const GENERAL_ROUTE = 'general';

    /**
     * Contructor.
     */
    public function __construct()
    {
        \add_action('after_setup_theme', [$this, 'addCustomLogo']);
        \add_action('rest_api_init', [$this, 'registerGetSiteLogo']);
    }

    /**
     * Add custom logo support for theme.
     *
     * @return void
     */
    public function addCustomLogo(): void
    {
        add_theme_support(
            'custom-logo',
            [
                'height'      => 190,
                'width'       => 190,
                'flex-width'  => false,
                'flex-height' => false,
            ]
        );

    }

    /**
     * Register get site logo route
     * GET wp-json/react-theme/v1/general/logo
     *
     * @return void
     */
    public function registerGetSiteLogo(): void
    {
        \register_rest_route(self::REACT_THEME_API_NAMESPACE, '/' . self::GENERAL_ROUTE . '/logo', [
            'methods'  => \WP_REST_Server::READABLE,
            'callback' => [$this, 'getSiteLogo'],
        ]);

    }

    /**
     * Get site logo.
     *
     * @return void
     */
    public function getSiteLogo(): \WP_REST_Response
    {
        $custom_logo_id = get_theme_mod('custom_logo');
        $image_alt      = get_post_meta($custom_logo_id, '_wp_attachment_image_alt', true);
        $image          = wp_get_attachment_image_src($custom_logo_id, 'full');

        return new \WP_REST_Response($image);
    }
}
