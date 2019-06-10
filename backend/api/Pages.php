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
        // Get the ID, and from that the page object.
        $homeId = \get_option('page_on_front');
        $home   = \get_page($homeId);

        // Return as json.
        return new \WP_REST_Response($home);
    }
}
