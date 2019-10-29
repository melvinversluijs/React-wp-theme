<?php

namespace ReactTheme\Backend\Api;

include_once \THEME_DIR . "/backend/api/AbstractApi.php";

use ReactTheme\Backend\Api\AbstractApi;

/**
 * Pages.
 */
class Pages extends AbstractApi
{
    public const PAGES_ROUTE = 'pages';

    /**
     * Constructor.
     */
    public function __construct()
    {
        \add_action('rest_api_init', [$this, 'registerGetHomePageRoute']);
    }

    /**
     * Register route to get the home page.
     * GET /react-theme/v1/pages/home
     *
     * @return void
     */
    public function registerGetHomePageRoute(): void
    {
        \register_rest_route(self::REACT_THEME_API_NAMESPACE, '/' . self::PAGES_ROUTE . '/home', [
            'methods'  => \WP_REST_Server::READABLE,
            'callback' => [$this, 'getHomePage'],
        ]);
    }

    /**
     * Get the homepage. (If selected)
     *
     * @return \WP_REST_Response
     */
    public function getHomePage(): \WP_REST_Response
    {
        $result = ['staticPages' => false];

        // Check if there is a page for home.
        if (\get_option('show_on_front') === 'page') {
            $result['home']        = (int) \get_option('page_on_front') ?: null;
            $result['blog']        = (int) \get_option('page_for_posts') ?: null;
            $result['staticPages'] = true;
        }

        // Return as json.
        return new \WP_REST_Response($result);
    }
}
