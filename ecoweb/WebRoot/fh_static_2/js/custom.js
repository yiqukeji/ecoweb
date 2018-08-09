/* -------------------------------------------------------------------------------

    Custom JS

    1.  Main Slider (Revolution Slider)
    2.  Main Slider (Flexslider)
    3.  Image Slider (Flexslider)
    4.  Main Navigation
    5.  Project Carousel
    6.  Responsive Video
    7.  Accordion
    8.  Tabs
    9.  Fancybox
    10. Isotope
    11. Contact Form
    12. Back to Top
    13. Twitter Feed
    14. Flickr Feed
    15. Skills
    --  Google Maps

---------------------------------------------------------------------------------- */

$(document).ready(function() {


    /* --------------------------------------------------------------------------- */
    /*  1.  Main Slider (Revolution Slider)
    /* --------------------------------------------------------------------------- */

    $('.revslider').revolution( {
        delay                 : 9000,
        startwidth            : 1120,
        startheight           : 535,

        onHoverStop           : "on",                   // Stop Banner Timet at Hover on Slide on/off

        thumbWidth            : 100,                    // Thumb With and Height and Amount (only if navigation Tyope set to thumb !)
        thumbHeight           : 50,
        thumbAmount           : 3,

        hideThumbs            : 200,
        navigationType        : "none",                 //bullet, thumb, none, both  (No Shadow in Fullwidth Version !)
        navigationArrows      : "verticalcentered",     //nexttobullets, verticalcentered, none
        navigationStyle       : "round",                //round,square,navbar

        touchenabled          : "on",                   // Enable Swipe Function : on/off

        navOffsetHorizontal   : 0,
        navOffsetVertical     : 20,

        stopAtSlide           : -1,                     // Stop Timer if Slide "x" has been Reached. If stopAfterLoops set to 0, then it stops already in the first Loop at slide X which defined. -1 means do not stop at any slide. stopAfterLoops has no sinn in this case.
        stopAfterLoops        : -1,                     // Stop Timer if All slides has been played "x" times. IT will stop at THe slide which is defined via stopAtSlide:x, if set to -1 slide never stop automatic

        fullWidth             : "on",

        shadow                : 0
    });





    /* --------------------------------------------------------------------------- */
    /*  2.  Main Slider (Flexslider)
    /* --------------------------------------------------------------------------- */

    $('#main-slider').flexslider({
        namespace: "flex-",             //{NEW} String: Prefix string attached to the class of every element generated by the plugin
        selector: ".slides > li",       //{NEW} Selector: Must match a simple pattern. '{container} > {slide}' -- Ignore pattern at your own peril
        animation: "slide",             //String: Select your animation type, "fade" or "slide"
        easing: "swing",                //{NEW} String: Determines the easing method used in jQuery transitions. jQuery easing plugin is supported!
        direction: "horizontal",        //String: Select the sliding direction, "horizontal" or "vertical"
        reverse: false,                 //{NEW} Boolean: Reverse the animation direction
        animationLoop: true,            //Boolean: Should the animation loop? If false, directionNav will received "disable" classes at either end
        smoothHeight: false,            //{NEW} Boolean: Allow height of the slider to animate smoothly in horizontal mode  
        startAt: 0,                     //Integer: The slide that the slider should start on. Array notation (0 = first slide)
        slideshow: true,                //Boolean: Animate slider automatically
        slideshowSpeed: 7000,           //Integer: Set the speed of the slideshow cycling, in milliseconds
        animationSpeed: 600,            //Integer: Set the speed of animations, in milliseconds
        initDelay: 0,                   //{NEW} Integer: Set an initialization delay, in milliseconds
        randomize: false,               //Boolean: Randomize slide order
        
        // Usability features
        pauseOnAction: true,            //Boolean: Pause the slideshow when interacting with control elements, highly recommended.
        pauseOnHover: false,            //Boolean: Pause the slideshow when hovering over slider, then resume when no longer hovering
        useCSS: true,                   //{NEW} Boolean: Slider will use CSS3 transitions if available
        touch: true,                    //{NEW} Boolean: Allow touch swipe navigation of the slider on touch-enabled devices
        video: false,                   //{NEW} Boolean: If using video in the slider, will prevent CSS3 3D Transforms to avoid graphical glitches
        
        // Primary Controls
        controlNav: false,              //Boolean: Create navigation for paging control of each clide? Note: Leave true for manualControls usage
        directionNav: true,             //Boolean: Create navigation for previous/next navigation? (true/false)
        prevText: "Previous",           //String: Set the text for the "previous" directionNav item
        nextText: "Next",               //String: Set the text for the "next" directionNav item
        
        // Secondary Navigation
        keyboard: true,                 //Boolean: Allow slider navigating via keyboard left/right keys
        multipleKeyboard: false,        //{NEW} Boolean: Allow keyboard navigation to affect multiple sliders. Default behavior cuts out keyboard navigation with more than one slider present.
        mousewheel: false,              //{UPDATED} Boolean: Requires jquery.mousewheel.js (https://github.com/brandonaaron/jquery-mousewheel) - Allows slider navigating via mousewheel
        pausePlay: false,               //Boolean: Create pause/play dynamic element
        pauseText: "Pause",             //String: Set the text for the "pause" pausePlay item
        playText: "Play",               //String: Set the text for the "play" pausePlay item
      });





    /* --------------------------------------------------------------------------- */
    /*  3.  Image Slider (Flexslider)
    /* --------------------------------------------------------------------------- */

    $('.image-slider').flexslider({
        namespace           : "flex-",           //{NEW} String: Prefix string attached to the class of every element generated by the plugin
        selector            : ".slides > li",    //{NEW} Selector: Must match a simple pattern. '{container} > {slide}' -- Ignore pattern at your own peril
        animation           : "slide",            //String: Select your animation type, "fade" or "slide"
        easing              : "swing",           //{NEW} String: Determines the easing method used in jQuery transitions. jQuery easing plugin is supported!
        direction           : "horizontal",      //String: Select the sliding direction, "horizontal" or "vertical"
        reverse             : false,             //{NEW} Boolean: Reverse the animation direction
        animationLoop       : true,              //Boolean: Should the animation loop? If false, directionNav will received "disable" classes at either end
        smoothHeight        : false,             //{NEW} Boolean: Allow height of the slider to animate smoothly in horizontal mode
        startAt             : 0,                 //Integer: The slide that the slider should start on. Array notation (0 = first slide)
        slideshow           : false,             //Boolean: Animate slider automatically
        slideshowSpeed      : 7000,              //Integer: Set the speed of the slideshow cycling, in milliseconds
        animationSpeed      : 600,               //Integer: Set the speed of animations, in milliseconds
        initDelay           : 0,                 //{NEW} Integer: Set an initialization delay, in milliseconds
        randomize           : false,             //Boolean: Randomize slide order
         
        // Usability features
        pauseOnAction       : true,              //Boolean: Pause the slideshow when interacting with control elements, highly recommended.
        pauseOnHover        : false,             //Boolean: Pause the slideshow when hovering over slider, then resume when no longer hovering
        useCSS              : true,              //{NEW} Boolean: Slider will use CSS3 transitions if available
        touch               : true,              //{NEW} Boolean: Allow touch swipe navigation of the slider on touch-enabled devices
        video               : false,             //{NEW} Boolean: If using video in the slider, will prevent CSS3 3D Transforms to avoid graphical glitches
         
        // Primary Controls
        controlNav          : false,             //Boolean: Create navigation for paging control of each clide? Note: Leave true for manualControls usage
        directionNav        : true,              //Boolean: Create navigation for previous/next navigation? (true/false)
        prevText            : "Previous",        //String: Set the text for the "previous" directionNav item
        nextText            : "Next",            //String: Set the text for the "next" directionNav item
         
        // Secondary Navigation
        keyboard            : true,              //Boolean: Allow slider navigating via keyboard left/right keys
        multipleKeyboard    : false,             //{NEW} Boolean: Allow keyboard navigation to affect multiple sliders. Default behavior cuts out keyboard navigation with more than one slider present.
        mousewheel          : false,             //{UPDATED} Boolean: Requires jquery.mousewheel.js (https://github.com/brandonaaron/jquery-mousewheel) - Allows slider navigating via mousewheel
        pausePlay           : false,             //Boolean: Create pause/play dynamic element
        pauseText           : 'Pause',           //String: Set the text for the "pause" pausePlay item
        playText            : 'Play',            //String: Set the text for the "play" pausePlay item
         
        // Special properties
        controlsContainer   : "",                //{UPDATED} Selector: USE CLASS SELECTOR. Declare which container the navigation elements should be appended too. Default container is the FlexSlider element. Example use would be ".flexslider-container". Property is ignored if given element is not found.
        manualControls      : "",                //Selector: Declare custom control navigation. Examples would be ".flex-control-nav li" or "#tabs-nav li img", etc. The number of elements in your controlNav should match the number of slides/tabs.
        sync                : "",                //{NEW} Selector: Mirror the actions performed on this slider with another slider. Use with care.
        asNavFor            : "",                //{NEW} Selector: Internal property exposed for turning the slider into a thumbnail navigation for another slider
    });





    /* --------------------------------------------------------------------------- */
    /*  4.  Main Navigation
    /* --------------------------------------------------------------------------- */

    var $navigation = $('#navigation');
    
    // Regular nav
    $navigation.on('mouseenter', 'li', function() {
        var $this    = $(this),
            $subMenu = $this.children('ul');
        if( $subMenu.length ) $this.addClass('hover');
        $subMenu.hide().stop(true, true).slideDown(150);
    }).on('mouseleave', 'li', function() {
        $(this).removeClass('hover').children('ul').stop(true, true).slideUp(70);
    });

    // Responsive nav
    selectnav('navigation', {
        label: 'Navigation...',
        autoselect: false,
        nested: true,
        indent: '–-'
    });





    /* --------------------------------------------------------------------------- */
    /*  5.  Project Carousel
    /* --------------------------------------------------------------------------- */

    (function() {

        var $carousel = $('.project-carousel');

        if( $carousel.length ) {
            var scrollCount;


            function getWindowWidth() {
                if( $(window).width() < 480 ) {
                    scrollCount = 1;
                } else if( $(window).width() < 768 ) {
                    scrollCount = 2;
                } else if( $(window).width() < 980 ) {
                    scrollCount = 3;
                } else {
                    scrollCount = 4;
                }
            }


            function initCarousel( carousel ) {

                $('.jcarousel-control a').bind('click', function() { carousel.scroll(jcarousel.intval((this).text())); return false; });
                $('#project-next').bind('click', function() { carousel.next(); return false; });
                $('#project-prev').bind('click', function() { carousel.prev(); return false; });

                carousel.each(function() {
                    var $this  = $(this);
                    $this.jcarousel({
                        animation     : 600,
                        easing        : 'easeOutCubic',
                        scroll        : scrollCount,
                        buttonNextHTML : null,
                        buttonPrevHTML : null
                    });
                });
            }


            function adjustCarousel() {
                $carousel.each(function() {
                    var $this    = $(this),
                        $lis     = $this.children('li')
                        newWidth = $lis.length * $lis.first().outerWidth( true ) + 100;
                    getWindowWidth();

                    if( $this.width() !== newWidth ) {
                        $this.css('width', newWidth )
                             .data('resize','true');
                        initCarousel( $this );
                        $this.jcarousel('scroll', 1);
                        var timer = window.setTimeout( function() {
                            window.clearTimeout( timer );
                            $this.data('resize', null);
                        }, 600 );
                    }
                });
            }


            getWindowWidth();
            initCarousel( $carousel );


            function swipeCarousel( e, dir ) {
                var $carousel = $(e.currentTarget);
                if( dir === 'left' )
                    $carousel.children('.jcarousel-clip').siblings('#project-next').trigger('click')
                if( dir === 'right' )
                    $carousel.children('.jcarousel-clip').siblings('#project-prev').trigger('click');
            }
        
            $carousel.swipe({
                swipeLeft       : swipeCarousel,
                swipeRight      : swipeCarousel,
                allowPageScroll : 'auto'
            });


            // Window resize
            $(window).on('resize', function() {
                var timer = window.setTimeout( function() {
                    window.clearTimeout( timer );
                    adjustCarousel();
                }, 30 );
            });

        }

    })();





    /* --------------------------------------------------------------------------- */
    /*  6.  Responsive Video
    /* --------------------------------------------------------------------------- */
    
    $("#content").fitVids();





    /* --------------------------------------------------------------------------- */
    /*  7.  Accordion
    /* --------------------------------------------------------------------------- */

    $(".accordion").accordion( {
        collapsible: true,
        autoHeight: false
    });

    $( ".selector" ).accordion( {
        active: 1
    });





    /* --------------------------------------------------------------------------- */
    /*  8.  Tabs
    /* --------------------------------------------------------------------------- */

    $(".tabs").tabs( {
        fx: { 
            opacity: 'toggle',
            duration:'fast'
        }
    });





    /* --------------------------------------------------------------------------- */
    /*  9. Fancybox
    /* --------------------------------------------------------------------------- */

    $(".folio").fancybox({
        closeBtn        : true,
        padding         : 0,
        openEffect      : 'fade',
        closeEffect     : 'fade',
        nextEffect      : 'fade',
        prevEffect      : 'fade',
        helpers : {
            overlay : {
                css : {
                    'background' : 'rgba(51, 51, 51, 0.8)'
                }
            },
            title : {
                type : 'over'
            }
        }
    });





    /* --------------------------------------------------------------------------- */
    /*  10. Isotope
    /* --------------------------------------------------------------------------- */


    (function() {

        // modified Isotope methods for gutters in masonry
        $.Isotope.prototype._getMasonryGutterColumns = function() {
            var gutter = this.options.masonry && this.options.masonry.gutterWidth || 0;
                containerWidth = this.element.width();
          
            this.masonry.columnWidth = this.options.masonry && this.options.masonry.columnWidth ||
                        // or use the size of the first item
                        this.$filteredAtoms.outerWidth(true) ||
                        // if there's no items, use size of container
                        containerWidth;

            this.masonry.columnWidth += gutter;

            this.masonry.cols = Math.floor( ( containerWidth + gutter ) / this.masonry.columnWidth );
            this.masonry.cols = Math.max( this.masonry.cols, 1 );
        };

        $.Isotope.prototype._masonryReset = function() {
            // layout-specific props
            this.masonry = {};
            // FIXME shouldn't have to call this again
            this._getMasonryGutterColumns();
            var i = this.masonry.cols;
            this.masonry.colYs = [];
            while (i--) {
                this.masonry.colYs.push( 0 );
            }
        };

        $.Isotope.prototype._masonryResizeChanged = function() {
            var prevSegments = this.masonry.cols;
            // update cols/rows
            this._getMasonryGutterColumns();
            // return if updated cols/rows is not equal to previous
            return ( this.masonry.cols !== prevSegments );
        };


        // Set Gutter width
        var gutterSize;

        function getWindowWidth() {
            if( $(window).width() < 480 ) {
                gutterSize = 10;
            } else if( $(window).width() < 768 ) {
                gutterSize = 10;
            } else if( $(window).width() < 980 ) {
                gutterSize = 14;
            } else {
                gutterSize = 20;
            }
        }


        // Portfolio settings
        var $container          = $('.project-feed');
        var $filter             = $('.project-feed-filter');

        $(window).smartresize(function(){
            getWindowWidth();
            $container.isotope({
                filter              : '*',
                resizable           : true,
                // set columnWidth to a percentage of container width
                masonry: {
                    gutterWidth     : gutterSize
                }
            });
        });

        $container.imagesLoaded( function(){
            $(window).smartresize();
        });

        // Filter items when filter link is clicked
        $filter.find('a').click(function() {
            var selector = $(this).attr('data-filter');
            $filter.find('a').removeClass('current');
            $(this).addClass('current');
            $container.isotope({ 
                filter             : selector,
                animationOptions   : {
                animationDuration  : 750,
                easing             : 'linear',
                queue              : false,
                }
            });
            return false;
        });


        // Blog with Infinite Scroll settings
        var $blogContainer          = $('.post-block-feed');

        $(window).smartresize(function(){
            getWindowWidth();
            $blogContainer.isotope({
                resizable           : true,
                itemSelector : '.post-block',
                // set columnWidth to a percentage of container width
                masonry: {
                    gutterWidth     : gutterSize
                }
            });
        });

        $blogContainer.imagesLoaded( function(){
            $(window).smartresize();
        });

        $blogContainer.infinitescroll({
            navSelector  : '#page-nav',    // selector for the paged navigation 
            nextSelector : '#page-nav a',  // selector for the NEXT link (to page 2)
            itemSelector : '.post-block',     // selector for all items you'll retrieve
            loading: {
                loadingText  : "Loading new posts...",
                finishedMsg: 'No more pages to load',
                img: 'images/blog_loader.gif'
            }
        },
            // call Isotope as a callback
            function( newElements ) {
                $blogContainer.isotope( 'appended', $( newElements ) ); 
            }
        );

    })();





    /* --------------------------------------------------------------------------- */
    /*  11. Contact Form
    /* --------------------------------------------------------------------------- */

    var $contactform  = $('#contact-form'),
        $success      = '<strong>Success!</strong> Your message was sent.';

    // Validate form on keyup and submit
    $contactform.validate({
        rules: {
            name: {
                required    : true,
                minlength   : 1
            },
            email: {
                required    : true,
                email       : true
            },
            message: {
                required    : true,
                minlength   : 1
            }
        },
        messages: {
            name: {
                required    : "Please enter your name.",
                minlength   : jQuery.format("Your name needs to be at least {0} characters")
            },
            email: {
                required    : "Please enter your email address.",
                minlength   : "You entered an invalid email address."
            },
            message: {
                required    : "Please enter a message.",
                minlength   : jQuery.format("Enter at least {0} characters")
            }
        },
    });

    // Send the email
    $contactform.submit(function(){
        if ($contactform.valid()){
            $.ajax({
                type: "POST",
                url: "php/contact.php",
                data: $(this).serialize(),
                success: function(msg) {
                    if (msg == 'SEND') {
                        response = '<div class="alert success">'+ $success +'</div>';
                    }
                    else {
                        response = '<div class="alert error">'+ msg +'</div>';
                    }
                    $(".error,.success").remove();
                    $contactform.prepend(response);
                }
             });
            return false;
        }
        return false;
    });





    /* --------------------------------------------------------------------------- */
    /*  12. Back to Top
    /* --------------------------------------------------------------------------- */

        var $backToTop = $('#back-to-top');

        $backToTop.hide();
        
        $(window).scroll(function () {
            if ($(this).scrollTop() > 150) {
                $backToTop.css('display', 'block');
            } else {
                $backToTop.css('display', 'none');
            }
        });

        $backToTop.click(function () {
            $('body, html').animate({
                scrollTop: 0
            }, 600);
            return false;
        });





    /* --------------------------------------------------------------------------- */
    /*  13. Twitter Feed
    /* --------------------------------------------------------------------------- */

    $('#twitter-feed-footer').jTweetsAnywhere({
        username: 'envato',
        count: 2,
        showTweetFeed: {
            showProfileImages: false,
            showUserScreenNames: false,
            showUserFullNames: false,
            showInReplyTo: false,
            showActionReply: false,
            showActionRetweet: false,
            showActionFavorite: false
        }
    });

    $('#twitter-feed-sidebar').jTweetsAnywhere({
        username: 'envato',
        count: 2,
        showTweetFeed: {
            showProfileImages: false,
            showUserScreenNames: false,
            showUserFullNames: false,
            showInReplyTo: false,
            showActionReply: false,
            showActionRetweet: false,
            showActionFavorite: false
        }
    });





    /* --------------------------------------------------------------------------- */
    /*  14. Flickr Feed
    /* --------------------------------------------------------------------------- */

    $('.photo-stream').flickrfeed('85381447@N08','', {
        limit: 8,
        title: false,
        date: false
    });





    /* --------------------------------------------------------------------------- */
    /*  15. Skills
    /* --------------------------------------------------------------------------- */

    $('.skillbar').each(function(){
        dataperc = $(this).attr('data-perc'),
        $(this).find('.skill-progress').animate({ "width" : dataperc + "%"}, dataperc*20);
    });





});





/* --------------------------------------------------------------------------- */
/*  Google Maps
/* --------------------------------------------------------------------------- */

var map;

function initGmap() {
    // Create an array of styles.
    var styles = [
        {
            stylers: [
                { saturation: -100 }
            ]
        },{
            featureType: "road",
            elementType: "geometry",
            stylers: [
                { lightness: 100 },
                { visibility: "simplified" }
            ]
        },{
            featureType: "road",
            elementType: "labels",
            stylers: [
                { visibility: "off" }
            ]
        }
    ];

    // Create a new StyledMapType object, passing it the array of styles,
    // as well as the name to be displayed on the map type control.
    var styledMap = new google.maps.StyledMapType(styles, {name: "Styled Map"});

    // Create a map object, and include the MapTypeId to add
    // to the map type control.
    latlng = new google.maps.LatLng(34.021453,-118.785027),
        $mapOptions = {
            zoom                    : 16,
            center                  : latlng,
            panControl              : false,
            zoomControl             : true,
            scaleControl            : false,
            mapTypeControl          : false,
            mapTypeControlOptions   : {
                mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
            }
    };
    map = new google.maps.Map(document.getElementById('google-map'), $mapOptions);

    //Associate the styled map with the MapTypeId and set it to display.
    map.mapTypes.set('map_style', styledMap);
    map.setMapTypeId('map_style');

    var contentString = '<div id="google-map-marker">A great place to get all your groceries, especially fresh fruits and vegetables.</div>';

    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    var marker = new google.maps.Marker({
        position: latlng,
        map: map, 
        title: "A great place to get all your groceries, especially fresh fruits and vegetables."
    });

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map,marker);
    });
    

}




