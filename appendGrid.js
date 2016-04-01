

function appendGrid (obj) {

	$("#grid-gallery").append(				
	'<section class="grid-wrap">'+
		'<ul class="grid">' + 
			'<li class="grid-sizer"></li>' +
			'<li>' +
				'<figure>' +
				    '<img src="cat.jpeg" alt="img02"/>' +
					'<figcaption><h6>' + obj.name + '</h6><p>Chillwave hoodie ea gentrify aute sriracha consequat.</p></figcaption>' +
				'</figure>'+
			'</li>'+
		'</ul>' +
	'</section>')

	$("#grid-gallery").append(
	'<section class="slideshow">' +
		'<ul>' +
			'<li>' +
				'<figure>' +
					'<figcaption>' +
						'<h3>Letterpress asymmetrical</h3>' +
						'<p>Kale chips lomo biodiesel stumptown Godard Tumblr, mustache sriracha tattooed cray aute slow-carb placeat delectus. Letterpress asymmetrical fanny pack art party est pour-over skateboard anim quis, ullamco craft beer.</p>' +
					'</figcaption>' +
				    '<img src="cat.jpeg" alt="img02"/>' +
				'</figure>' +
			'</li>' +
			
		'</ul>' +
		'<nav>'+
			'<span class="icon nav-prev"></span>'+
			'<span class="icon nav-next"></span>' +
			'<span class="icon nav-close"></span>' +
		'</nav>' +
		'<div class="info-keys icon">Navigate with arrow keys</div>' +
	'</section>')

	new CBPGridGallery( document.getElementById( 'grid-gallery' ) );

}