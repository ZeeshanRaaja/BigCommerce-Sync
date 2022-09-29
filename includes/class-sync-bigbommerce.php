<?php
	/**
	 * Main Loader File.
	 *
	 * @package Sync-Product
	 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
if ( ! class_exists( 'Sync_data' ) ) {

	/**
	 * Class Sync_data
	 */
	class Sync_data {

		/**
		 * Constructor.
		 */
		function get_send_dATA(){

            $args = array(
                'post_type' => 'post',
                'post_per_page'=> 10,
            );

            $query =new WP_Query($args);

            $datasend=[];

            if($query->have_posts()){
                while($query->have_post()){
                    $query->the_post();

                    $array=[
                        'title'-> get_the_title(),
                        'body'->get_the_content(),
                        'userID'->1
                    ];

                   array_push( $datasend,$array);
                }
            }

            $data_to_pus_api = json_encode($datasend);

            $url ='https://api.bigcommerce.com/stores/wy2osut3mn/v3/catalog/products';
            $arguments = array(
                'method'=>'POST',
                'body' => $data_to_pus_api,
            );

            $response = wp_remote_post($url,$arguments);

            if(is_wp_error($response)){
                $error_message= $response->get_error_message();
            }
        }
     

	
	}
}
new Sync_data();

