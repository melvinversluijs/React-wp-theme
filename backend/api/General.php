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
        \add_action('after_setup_theme', [$this, 'addFeaturedImageSupport']);
        \add_action('rest_api_init', [$this, 'registerGetSiteLogo']);
    }

    /**
     * Add featured image support.
     *
     * @return void
     */
    public function addFeaturedImageSupport(): void
    {
        add_theme_support('post-thumbnails');
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
        $response = null;
        $imageId  = get_theme_mod('custom_logo');

        // Make sure there is an image.
        if ($imageId) {
            // Get alt.
            $alt = get_post_meta($imageId, '_wp_attachment_image_alt', true);

            // Get src, should always be the first item in the list.
            $image = wp_get_attachment_image_src($imageId, 'full');
            [$src] = $image;

            // Create a response.
            $response = compact('src', 'alt');
        }

        return new \WP_REST_Response($response);
    }
}
