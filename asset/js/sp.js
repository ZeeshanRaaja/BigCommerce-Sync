jQuery(document).ready(function($){ 
    $("#btnSubmit").on("click",function(){
        var hidden_value = $("#post_id").val();
        jQuery.ajax({
            url:   ajax_object.ajaxurl,
            type: 'POST',
            data: {  
                action: 'test',  
                hidden_value: hidden_value 
            },
            success: function (data) {
                console.log("Succuess");
                console.log(data);
             }
        });
    });
});




// <?php
// 	/**
// 	 * Credential Form in Woocommerce Setting
// 	 *
// 	 * @package Woocommerce-shopify-migration
// 	 */

// if ( ! defined( 'ABSPATH' ) ) {
// 	exit;
// }
// if ( ! class_exists( 'WSM_Credential' ) ) {

// 	/**
// 	 * Class WSM_Credential. ()
// 	 */
// 	class WSM_Credential {

// 		/**
// 		 * Constructor.
// 		 */
// 		public function __construct() {
// 			add_filter( 'woocommerce_settings_tabs_array', array( $this, 'adds_credential_tab' ), 50 );
//             add_action( 'woocommerce_settings_credential_settings', array( $this, 'adds_credential_settings' ), 60 );
// 			add_action( 'woocommerce_update_options_credential_settings', array( $this, 'update_settings' ) );
// 		}

// 		/**
// 		 * Adds Credential tab in Woocommerce settings.
// 		 *
// 		 * @param array $settings_tabs bring all setting tabs' array.
// 		 * @return array
// 		 */
// 		public function adds_credential_tab( $settings_tabs ) {
// 			$settings_tabs['credential_settings'] = __( 'WooCommerce to Shopify Migration', 'woocommerce-shopify-migration' );
// 			return $settings_tabs;
// 		}

        
// 		/**
// 		 * Adding Settings fields on Credential tab.
// 		 */
// 		public function adds_credential_settings() {
// 			woocommerce_admin_fields( $this->get_settings_array() );
// 		}

//         /**
// 		 * Getting Credential Setting Array as return.
// 		 *
// 		 * @return array
// 		 */
// 		public function get_settings_array() {
// 			$settings = array(
// 				'section_title'     => array(
// 					'name' => __( 'Shopify to WooCommerce Migration', 'Woocommerce-shopify-migration' ),
// 					'type' => 'title',
// 					'desc' => 'Enter your shopify store name and credential for sync product from woocommerce to shopify',
// 					'id'   => 'credential-settings-title',
// 				),
// 				'store_name' => array(
// 					'name'     => __( 'Store Name', 'Woocommerce-shopify-migration' ),
// 					'type'     => 'text',
//                     'placeholder' => 'codup-1717.myshopify.com',
// 					'desc_tip' => true,
// 					'desc'     => 'Enter Your Store Name Like: Codup.com',
// 					'id'       => 'shopify_store_name',
// 				),
// 				'credential_key'       => array(
// 					'name'        => __( 'Secrect Key', 'Woocommerce-shopify-migration' ),
// 					'type'        => 'password',
// 					'placeholder' => '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',
// 					'desc_tip'    => true,
// 					'desc'        => 'Enter Your Shopify Store Secret Key',
// 					'id'          => 'shopify_store_key',
// 				),

// 				'section_end'       => array(
// 					'type' => 'sectionend',
// 					'id'   => 'wc_credential_settings_end',
// 				),

//                 'section_error'     => array(
// 					'name' => $this->wsm_check_credential(),
// 					'type' => 'title',
					
// 				),



// 			);
// 			return apply_filters( 'wc_settings_tab_demo_settings', $settings );
// 		}

//         /**
// 		 * Save/Update Credential tab settings.
// 		 */
// 		public function update_settings() {
// 			woocommerce_update_options( $this->get_settings_array() );
//             $this->wsm_check_credential();
// 		}

//         public function wsm_check_credential(){

//             $shopify_store_name = get_option('shopify_store_name'); 
// 			$shopify_store_key = get_option('shopify_store_key');

//             $url = 'https://'.$shopify_store_name.'/admin/api/2022-07/products.json';

// 			$header = array(
// 				'X-Shopify-Access-Token' => $shopify_store_key,
// 				'Content-Type' => 'application/json'
// 				);


// 			$args = array(
// 				'method' => "GET",
// 				'headers' =>  $header
// 				);
			
// 			$response = wp_remote_POST($url,$args);
// 			// $apiBody  = json_decode( wp_remote_retrieve_body( $response ) ); 

// 			if ( is_wp_error( $response ) ) {
// 				// If the request_api has failed, show the error message
// 				echo $response->get_error_message(); 
// 			} else {
// 				$data_content = wp_remote_retrieve_body( $response );
// 				echo "<h1> Succussfully Credential  </h1>";
// 			}
//         }

//         public function error(){

//         }



// 	}
// }
// new WSM_Credential();







































