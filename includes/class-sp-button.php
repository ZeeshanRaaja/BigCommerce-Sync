<?php
	/**
	 * Main Loader File.
	 *
	 * @package Sync-Product
	 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
if ( ! class_exists( 'SP_button' ) ) {

	/**
	 * Class SP_button
	 */
	class SP_button {

		/**
		 * Constructor.
		 */
		public function __construct() {
			
		
			add_action('wp_ajax_test' , array( $this, 'test'));
			add_action('wp_ajax_nopriv_test' , array( $this, 'test'));
			add_action( 'woocommerce_product_options_general_product_data', array($this,'sp_migration_button' ));
		}

		public function sp_migration_button () {
			
			global $post; ?>
			<a href="#" id="btnSubmit" class="button button-primary" name="sync"> Sync</a>
			<input type="text" id="post_id" name="post_id" value="<?php echo $post->ID ?>" style="display: none;" > <?php
			
			}

			



		public function test(){

			$p_id = $_REQUEST["hidden_value"];
			$post_id =  $p_id;

			$val = get_post_meta($post_id,"bc_pid",true);
			
			if(!$val){

				$product = wc_get_product($p_id);
			
			$product_name = $product->get_name();
			$sale_price = $product -> sale_price;
			$product_type = $product -> get_type();
			$product_weight = $product -> weight;


			$url ='https://api.bigcommerce.com/stores/wy2osut3mn/v3/catalog/products';

			$header = array(
				'X-Auth-Token' => '9pbygidrnzc1qnq744mdxws1luf4jyn'
			);
			
			if($product_type=="simple"){
				$product_type = "physical";
			}
	

			$body = json_encode([
			
			   "name" => $product_name,
			   "price" => $sale_price,
			   "type" =>  $product_type,
			   "weight" => $product_weight

			]);

			
	   

			 $args = array(
				'method' => 'POST',
				   'headers' => $header,
				'body' => $body
			);
			
			

			$response = wp_remote_post($url,$args);
			
			$body = json_decode( wp_remote_retrieve_body($response));

			$bc_pid = $body->data->id;

			

			update_post_meta($post_id, "bc_pid", $bc_pid);

			}

			if($val){

				$product = wc_get_product($p_id);
			
			$product_name = $product->get_name();
			$sale_price = $product -> sale_price;
			$product_type = $product -> get_type();
			$product_weight = $product -> weight;


			$url ='https://api.bigcommerce.com/stores/wy2osut3mn/v3/catalog/products/'.$val;

			$header = array(
				'X-Auth-Token' => '9pbygidrnzc1qnq744mdxws1luf4jyn'
			);
			
			if($product_type=="simple"){
				$product_type = "physical";
			}
	

			$body = json_encode([
			
			   "name" => $product_name,
			   "price" => $sale_price,
			   "type" =>  $product_type,
			   "weight" => $product_weight

			]);

			
	   

			 $args = array(
				'method' => 'POST',
				   'headers' => $header,
				'body' => $body
			);
			
			

			$response = wp_remote_post($url,$args);

			}

			
			
		
			}
		}
	
	}

new SP_button();

