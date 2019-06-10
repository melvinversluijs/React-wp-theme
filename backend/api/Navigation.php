<?php

namespace ReactTheme\Backend\Api;

include_once \THEME_DIR . '/backend/api/AbstractApi.php';

use ReactTheme\Backend\Api\AbstractApi;

/**
 * Navigation.
 */
class Navigation extends AbstractApi
{
    public const MAIN_NAV         = 'main-nav';
    public const NAVIGATION_ROUTE = 'navigation';

    /**
     * Constructor.
     */
    public function __construct()
    {
        \add_action('init', [$this, 'registerMainNavigation']);
        \add_action('rest_api_init', [$this, 'registerGetMainNavigationRoute']);
    }

    /**
     * Register main navigation menu.
     *
     * @return void
     */
    public function registerMainNavigation(): void
    {
        \register_nav_menu(self::MAIN_NAV, __('Main header navigation'));
    }

    /**
     * Register get main navigation menu items API route.
     * GET /react-theme/v1/menu/main
     *
     * @return void
     */
    public function registerGetMainNavigationRoute(): void
    {
        \register_rest_route(self::REACT_THEME_API_NAMESPACE, '/' . self::NAVIGATION_ROUTE . '/main', [
            'methods'  => \WP_REST_Server::READABLE,
            'callback' => [$this, 'getMainNavigationData'],
        ]);
    }

    /**
     * Get all main navigation menu items as array.
     *
     * @return \WP_REST_Response
     */
    public function getMainNavigationData(): \WP_REST_Response
    {
        // Get Main menu name based on location, and from that the menu items.
        $mainMenuName = \wp_get_nav_menu_name(self::MAIN_NAV);
        $menuItems    = \wp_get_nav_menu_items($mainMenuName) ?: [];

        // Convert list, add children as a property of the parent item.
        if (count($menuItems) > 0) {
            $menuItems = $this->getChildren($menuItems);
        }

        // Return as json.
        return new \WP_REST_Response($menuItems);
    }

    /**
     * Get children of menu items.
     *
     * @param array $list
     * @param string|int $parentId - 0 By default
     *
     * @return array
     */
    protected function getChildren(array $list, $parentId = '0'): array
    {
        // Get parentId as string, menu_item_parent is a string while ID is an integers.
        $parentId = (string) $parentId;

        // Get all children for given parent. (All items are in the original list).
        $children = array_filter($list, function ($item) use ($parentId) {
            return $item->menu_item_parent === (string) $parentId;
        });

        // Loop through all children.
        foreach ($children as $child) {
            // And check if they have children. Check recursive.
            if ($childChildren = $this->getChildren($list, $child->ID)) {
                $child->children = $childChildren;
            }
        }

        // Finally return the list.
        return $children;
    }
}
