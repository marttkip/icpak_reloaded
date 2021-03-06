$$(document).on('pageInit', '.page[data-page="login"]', function (e) 
{
	$( "#index-logo" ).addClass( "display_none" );
})	
$$(document).on('pageInit', '.page[data-page="icpak-resources"]', function (e) 
{
	
	mainView.showNavbar();
	$( "#resources-button" ).addClass( "active" );
	$( "#events-button" ).removeClass( "active" );
	$( "#live-button" ).removeClass( "active" );
	$( "#profile-button" ).removeClass( "active");
	$( "#chat-button" ).removeClass( "active" );
	$( "#black-login" ).addClass( "cached" );
	
	myApp.closePanel();

	get_publication_items();
	get_resources_items();
})

$$(document).on('pageInit', '.page[data-page="icpak-events"]', function (e) 
{
	// alert("sdbajshdajhs");
	
	mainView.showNavbar();
	$( "#black-login" ).addClass( "cached" );
	$( "#resources-button" ).removeClass( "active" );
	$( "#events-button" ).addClass( "active" );
	$( "#live-button" ).removeClass( "active" );
	$( "#profile-button" ).removeClass( "active");
	$( "#chat-button" ).removeClass( "active" );

	myApp.closePanel();

	get_event_items();
})

$$(document).on('pageInit', '.page[data-page="icpak-live"]', function (e) 
{
	
	mainView.showNavbar();
	$( "#black-login" ).addClass( "cached" );
	$( "#resources-button" ).removeClass( "active" );
	$( "#events-button" ).removeClass( "active" );
	$( "#live-button" ).addClass( "active" );
	$( "#profile-button" ).removeClass( "active");
	$( "#chat-button" ).removeClass( "active" );
	myApp.closePanel();
	
	get_streaming_event();
})

$$(document).on('pageInit', '.page[data-page="member-profile"]', function (e) 
{
	window.localStorage.setItem("view_page",2);
	
	mainView.showNavbar();
	//window.localStorage.setItem("logged_in", 'no');
	var logged_in = window.localStorage.getItem("logged_in");
	//alert(logged_in);
	if(logged_in == 'yes')
	{
		$( "#black-login" ).addClass( "cached" );
		$( "#resources-button" ).removeClass( "active" );
		$( "#events-button" ).removeClass( "active" );
		$( "#live-button" ).removeClass( "active" );
		$( "#chat-button" ).removeClass( "active" );
		$( "#profile-button" ).addClass( "active");

		myApp.closePanel();
		
		get_profile_details();
	}
	else
	{
		myApp.hideIndicator();
		myApp.modalLogin('Please log in to join the forum', 'Login', login_member);
	}
})

$$('#chat-content').on('click', function () {

  myApp.popup('.popup-about');
});



