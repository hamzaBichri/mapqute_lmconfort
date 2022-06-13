(function ($) {
    "use strict";
    
    /*------ ScrollUp -------- */
    $.scrollUp({
        scrollText: '<i class="lastudioicon-up-arrow"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });
    
    /*------ SVG img ----*/
    SVGInject(document.querySelectorAll('img.injectable'), {});
    
    /*------ Wow Active ----*/
    new WOW().init();
    
    /*====== SidebarCart ======*/
    function miniCart() {
        var navbarTrigger = $('.cart-active'),
            endTrigger = $('.cart-close'),
            container = $('.sidebar-cart-active'),
            wrapper2 = $('.main-wrapper');
        
        wrapper2.prepend('<div class="body-overlay"></div>');
        
        navbarTrigger.on('click', function(e) {
            e.preventDefault();
            container.addClass('inside');
            wrapper2.addClass('overlay-active');
        });
        
        endTrigger.on('click', function() {
            container.removeClass('inside');
            wrapper2.removeClass('overlay-active');
        });
        
        $('.body-overlay').on('click', function() {
            container.removeClass('inside');
            wrapper2.removeClass('overlay-active');
        });
    };
    miniCart();
    
    /*--------------------------------
        Hero slider active 1
    -----------------------------------*/
    $('.hero-slider-active-1').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        loop: true,
        dots: false,
        arrows: true,
        prevArrow: '<span class="slider-icon-1 slider-icon-prev"><i class="lastudioicon-left-arrow"></i></span>',
        nextArrow: '<span class="slider-icon-1 slider-icon-next"><i class="lastudioicon-right-arrow"></i></span>',
    });
    
    /*--------------------------------
        Hero slider active 2
    -----------------------------------*/
    $('.hero-slider-active-2').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        loop: true,
        dots: true,
        arrows: false,
    });
    
    /*--------------------------------
        Product slider active 1
    -----------------------------------*/
    $('.product-slider-active-1').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        loop: true,
        dots: false,
        arrows: true,
        prevArrow: '<span class="product-icon-1 product-icon-prev"><i class="lastudioicon-left-arrow"></i></span>',
        nextArrow: '<span class="product-icon-1 product-icon-next"><i class="lastudioicon-right-arrow"></i></span>',
        responsive: [{
                breakpoint: 1365,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 470,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    
    /*--------------------------------
        Organic deal slider
    -----------------------------------*/
    $('.organic-deal-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        loop: true,
        dots: false,
        arrows: true,
        prevArrow: '<span class="deal-pro-icon-prev"><i class="lastudioicon-left-arrow"></i></span>',
        nextArrow: '<span class="deal-pro-icon-next"><i class="lastudioicon-right-arrow"></i></span>',
    });
    
    /* Tooltip active */
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl)
    })
    
    /*--------------------------------
        testimonial active
    -----------------------------------*/
    $('.testimonial-active').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        loop: true,
        dots: true,
        arrows: false,
    });
    
    /*--------------------------------
        Testimonial active 2
    -----------------------------------*/
    $('.testimonial-active-2').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        loop: true,
        dots: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    
    /*--------------------------------
        Instagram active
    -----------------------------------*/
    $('.instagram-active').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        loop: true,
        dots: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 410,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    
    /*--------------------------------
        Blog slider active
    -----------------------------------*/
    $('.blog-slider-active').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        loop: true,
        dots: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    
    /*--------------------------------
        Featured category slider
    -----------------------------------*/
    $('.featured-category-slider').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        loop: true,
        dots: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 7,
                }
            },
            {
                breakpoint: 1365,
                settings: {
                    slidesToShow: 6,
                }
            },
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });
    
    /*---------------------
        Video popup
    --------------------- */
    $('.video-popup').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        zoom: {
            enabled: true,
        }
    });
    
    /* Jarallax active  */
    $('.jarallax').jarallax({
        speed: 0.2,
    });
    /* Jarallax active 2  */
    $('.jarallax-2').jarallax({
        speed: 0.8,
    });
    
    /*------- View demo active -----------*/
    var moreDemo = $('.view-demo-btn-active');
    moreDemo.on('click', function(e) {
        e.preventDefault();
        $('.view-demo-area').toggleClass('demo-visible');
    })
    
    /*--------------------------------
        Quickview slider active
    -----------------------------------*/
    
    $('#exampleModal').on('shown.bs.modal', function () {
        $('.quickview-slider-active').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: false,
            loop: true,
            dots: false,
            arrows: true,
            prevArrow: '<span class="slider-icon-2 slider-icon-2-prev"><i class="lastudioicon-left-arrow"></i></span>',
            nextArrow: '<span class="slider-icon-2 slider-icon-2-next"><i class="lastudioicon-right-arrow"></i></span>',
        });
    })
    
    
    
    /*----------------------------
    	Cart Plus Minus Button
    ------------------------------ */
    var CartPlusMinus = $('.cart-plus-minus');
    CartPlusMinus.prepend('<div class="dec qtybutton">-</div>');
    CartPlusMinus.append('<div class="inc qtybutton">+</div>');
    $(".qtybutton").on("click", function() {
        var $button = $(this);
        var oldValue = $button.parent().find("input").val();
        if ($button.text() === "+") {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 1;
            }
        }
        $button.parent().find("input").val(newVal);
    });
    
    /*---Newsletter Popup activation ---*/
    setTimeout(function() {
        if($.cookie('shownewsletter')==1) $('.newletter-popup').hide();
        $('#subscribe_pemail').keypress(function(e) {
            if(e.which == 13) {
                e.preventDefault();
                email_subscribepopup();
            }
            var name= $(this).val();
              $('#subscribe_pname').val(name);
        });
        $('#subscribe_pemail').on('change', function() {
         var name= $(this).val();
                  $('#subscribe_pname').val(name);
        });
        //transition effect
        if($.cookie("shownewsletter") != 1){ 
            $('.newletter-popup').bPopup();
        }
        $('#newsletter_popup_dont_show_again').on('change', function(){
            if($.cookie("shownewsletter") != 1){   
                $.cookie("shownewsletter",'1')
            }else{
                $.cookie("shownewsletter",'0')
            }
        }); 
    }, 1000); 
    
    // Full page slider active js
	$('#fullpage').fullpage({
		lockAnchors: false,
		navigation: true,
		verticalCentered: false,
		autoScrolling: false,
	});
    
    /* Language-dropdown */
    if ($('.header-language-wrap , .header-currency-wrap').length) {
        var $body = $('body'),
            $languageWrap = $('.header-language-wrap , .header-currency-wrap'),
            $languageContent = $languageWrap.find('.language-dropdown , .currency-dropdown');
        $languageWrap.on('click', '.language-dropdown-active , .currency-dropdown-active', function(e) {
            e.preventDefault();
            var $this = $(this);
            if (!$this.parent().hasClass('show')) {
                $this.siblings('.language-dropdown , .currency-dropdown').addClass('show').parent().addClass('show');
            } else {
                $this.siblings('.language-dropdown , .currency-dropdown').removeClass('show').parent().removeClass('show');
            }
        });
        /*Close When Click Outside*/
        $body.on('click', function(e) {
            var $target = e.target;
            if (!$($target).is('.header-language-wrap , .header-currency-wrap') && !$($target).parents().is('.header-language-wrap , .header-currency-wrap') && $languageWrap.hasClass('show')) {
                $languageWrap.removeClass('show');
                $languageContent.removeClass('show');
            }
        });
    }
    
    /*-------------------------------
	   Categori Toggle
    -----------------------------------*/
    var searchToggle = $('.categori-active');
    searchToggle.on('click', function(e){
        e.preventDefault();
        if($(this).hasClass('open')){
           $(this).removeClass('open');
           $(this).siblings('.main-categori-dropdown').removeClass('open');
        }else{
           $(this).addClass('open');
           $(this).siblings('.main-categori-dropdown').addClass('open');
        }
    })
    
    
    /*====== Search active ======*/
    function sidebarSearch() {
        var searchTrigger = $('.search-active'),
            endTriggersearch = $('.search2-close'),
            container = $('.main-search-active');
        
        searchTrigger.on('click', function(e) {
            e.preventDefault();
            container.addClass('search-visible');
        });
        
        endTriggersearch.on('click', function() {
            container.removeClass('search-visible');
        });
        
    };
    sidebarSearch();
    
    /*====== QuickInfo ======*/
    function quickInfo() {
        var searchTrigger = $('.header-aside-button'),
            endTriggersearch = $('.aside-close'),
            container = $('.header-aside-active');
        searchTrigger.on('click', function(e) {
            e.preventDefault();
            container.addClass('inside');
        });
        endTriggersearch.on('click', function() {
            container.removeClass('inside');
        });
    };
    quickInfo();
    
    /*====== MobileMenu ======*/
    function mobileMenu() {
        var navbarTrigger = $('.mobile-menu-button'),
            endTrigger = $('.mobile-menu-close'),
            container = $('.mobile-menu-active'),
            wrapper3 = $('.main-wrapper-2');
        
        wrapper3.prepend('<div class="body-overlay-2"></div>');
        
        navbarTrigger.on('click', function(e) {
            e.preventDefault();
            container.addClass('inside');
            wrapper3.addClass('overlay-active-2');
        });
        
        endTrigger.on('click', function() {
            container.removeClass('inside');
            wrapper3.removeClass('overlay-active-2');
        });
        
        $('.body-overlay-2').on('click', function() {
            container.removeClass('inside');
            wrapper3.removeClass('overlay-active-2');
        });
    };
    mobileMenu();
    
    /*---------------------
        Mobile menu
    --------------------- */
    var $offCanvasNav = $('.mobile-menu , .widget-categories-active'),
        $offCanvasNavSubMenu = $offCanvasNav.find('.dropdown');
    
    /*Add Toggle Button With Off Canvas Sub Menu*/
    $offCanvasNavSubMenu.parent().prepend('<span class="menu-expand"><i></i></span>');
    
    /*Close Off Canvas Sub Menu*/
    $offCanvasNavSubMenu.slideUp();
    
    /*Category Sub Menu Toggle*/
    $offCanvasNav.on('click', 'li a, li .menu-expand', function(e) {
        var $this = $(this);
        if ( ($this.parent().attr('class').match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/)) && ($this.attr('href') === '#' || $this.hasClass('menu-expand')) ) {
            e.preventDefault();
            if ($this.siblings('ul:visible').length){
                $this.parent('li').removeClass('active');
                $this.siblings('ul').slideUp();
            } else {
                $this.parent('li').addClass('active');
                $this.closest('li').siblings('li').removeClass('active').find('li').removeClass('active');
                $this.closest('li').siblings('li').find('ul:visible').slideUp();
                $this.siblings('ul').slideDown();
            }
        }
    });
    
    /*--- language currency active ----*/
    $('.mobile-language-active').on('click', function(e) {
        e.preventDefault();
        $('.lang-dropdown-active').slideToggle(900);
    });
    $('.mobile-currency-active').on('click', function(e) {
        e.preventDefault();
        $('.curr-dropdown-active').slideToggle(900);
    });
    
    /*---------------------
        Price slider
    --------------------- */
    var sliderrange = $('#slider-range');
    var amountprice = $('#amount');
    $(function() {
        sliderrange.slider({
            range: true,
            min: 16,
            max: 400,
            values: [0, 300],
            slide: function(event, ui) {
                amountprice.val("$" + ui.values[0] + " - $" + ui.values[1]);
            }
        });
        amountprice.val("$" + sliderrange.slider("values", 0) +
            " - $" + sliderrange.slider("values", 1));
    });
    
    /*-----------------------
        Shop filter active 
    ------------------------- */
    $('.shop-filter-active').on('click', function(e) {
        e.preventDefault();
        $('.product-filter-wrapper').slideToggle();
    })
    var shopFiltericon = $('.shop-filter-active');
    shopFiltericon.on('click', function() {
        $('.shop-filter-active').toggleClass('active');
    })
    
    /*--
        Magnific Popup
    ------------------------*/
    $('.img-popup').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });
    
    /*--------------------------------
        Shop carousel active
    -----------------------------------*/
    $('.shop-carousel-active').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        loop: true,
        dots: true,
        arrows: false,
        rows: 2,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 410,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    
    /*--------------------------------
        Shop custom layout active
    -----------------------------------*/
    $('.shop-custom-layout-active').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        fade: false,
        loop: true,
        dots: false,
        arrows: true,
        prevArrow: '<span class="shop-prev"><i class="lastudioicon-left-arrow"></i></span>',
        nextArrow: '<span class="shop-next"><i class="lastudioicon-right-arrow"></i></span>',
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 420,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    
    /*--------------------------------
        Product details custom slider
    -----------------------------------*/
    $('.product-details-custom-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        fade: false,
        loop: true,
        dots: false,
        arrows: true,
        prevArrow: '<span class="pro-dec-custom-icon pro-details-prev"><i class="lastudioicon-left-arrow"></i></span>',
        nextArrow: '<span class="pro-dec-custom-icon pro-details-next"><i class="lastudioicon-right-arrow"></i></span>',
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    
    /*--------------------------------
        Related product slider
    -----------------------------------*/
    $('.related-product-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        fade: false,
        loop: true,
        dots: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 410,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    
    /* -------------------
        FAQ Accordion 
    * ---------------------*/ 
    $('.faq-accordion a').on('click', function() {
        $('.faq-accordion').removeClass('actives');
        $(this).parents('.faq-accordion').addClass('actives');
    });
    
    /* -------------------
        Countdown
    * ---------------------*/ 
    $('.timer-1 [data-countdown]').each(function() {
        var $this = $(this),
            finalDate = $(this).data('countdown');
        $this.countdown(finalDate, function(event) {
            $this.html(event.strftime('<span class="cdown day"> <span>%-D </span><p>Days</p></span> <span class="cdown hour"> <span> %-H</span> <p>Hours</p></span> <span class="cdown minutes"><span>%M</span> <p>Mins</p> </span> <span class="cdown second"><span>%S</span> <p>Secs</p> </span>'));
        });
    });
    
    // Instantiate EasyZoom instances
    var $easyzoom = $('.easyzoom').easyZoom();
    
    /*-------------------------------------
        Product details big image slider
    ---------------------------------------*/
    $('.pro-dec-big-img-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        draggable: false,
        fade: false,
        asNavFor: '.product-dec-slider-small , .product-dec-slider-small-2',
    });
    
    /*---------------------------------------
        Product details small image slider
    -----------------------------------------*/
    $('.product-dec-slider-small').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.pro-dec-big-img-slider',
        dots: false,
        focusOnSelect: true,
        fade: false,
        prevArrow: '<span class="pro-dec-prev"><i class="lastudioicon-left-arrow"></i></span>',
        nextArrow: '<span class="pro-dec-next"><i class="lastudioicon-right-arrow"></i></span>',
        responsive: [{
                breakpoint: 767,
                settings: {
                    
                }
            },
            {
                breakpoint: 575,
                settings: {
                    autoplay: true,
                    slidesToShow: 4,
                }
            }
        ]
    });
    
    /*----------------------------------------
        Product details small image slider 2
    ------------------------------------------*/
    $('.product-dec-slider-small-2').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        vertical: true,
        asNavFor: '.pro-dec-big-img-slider',
        dots: false,
        focusOnSelect: true,
        fade: false,
        prevArrow: '<span class="pro-dec-prev"><i class="lastudioicon-up-arrow"></i></span>',
        nextArrow: '<span class="pro-dec-next"><i class="lastudioicon-down-arrow"></i></span>',
        responsive: [{
                breakpoint: 1365,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });
    
    /*------------------------
        Sidebar sticky active
    -------------------------- */
    $('.sidebar-active').stickySidebar({
        topSpacing: 0,
        bottomSpacing: 30,
        minWidth: 991, 
    });
    
    /*--- showlogin toggle function ----*/
    $('.checkout-click-2').on('click', function(e) {
        e.preventDefault();
        $('.checkout-login-info-2').slideToggle(1000);
    });
    
    /*---------------------
        Select active
    --------------------- */
    $('.select-active').select2();
    $(window).on('resize', function(){
        $('.select-active').select2()
    });
    
    /*----------------------------
        Create an account toggle
    -----------------------------*/
    $('.checkout-ship').on('click', function() {
        $('.checkout-ship-open').slideToggle(1000);
    });
    
    /*-------------------------
        Checkout toggle function
    --------------------------*/
    var checked = $( '.sin-payment input:checked' )
    if(checked){
        $(checked).siblings( '.payment-box' ).slideDown(900);
    };
	 $( '.sin-payment input' ).on('change', function() {
        $( '.payment-box' ).slideUp(900);
        $(this).siblings( '.payment-box' ).slideToggle(900);
    });
    
    /*-----------------------
        Login register active 
    ------------------------- */
    $('.vendor-close').on('click', function() {
        $('.vendor-customar-active').slideDown('fast');
    });
    $('.vendor-active').on('click', function() {
        $('.vendor-customar-active').slideUp(400);
    });
    
    /*-------------------------
    Create an account toggle
    --------------------------*/
    $('.login-active').on('click', function() {
        $('.login-form').slideToggle(400);
    });
    $('.register-active').on('click', function() {
        $('.register-form').slideToggle(400);
    });
    
    /*====== clickableMainmenu active ======*/
    function clickableMainmenu() {
        var searchTrigger = $('.clickable-mainmenu-button'),
            endTriggersearch = $('.mainmenu-close'),
            container = $('.clickable-mainmenu-active');
            
        searchTrigger.on('click', function(e) {
            e.preventDefault();
            container.addClass('mainmenu-visible');
        });
            
        endTriggersearch.on('click', function() {
            container.removeClass('mainmenu-visible');
        });     
    };
    clickableMainmenu();
    
    var $clickableMainMenu = $('.clickable-mainmenu-wrap'),
        $clickableSubMenu = $clickableMainMenu.find('.sub-menu'),
        $clickableSubMenu2 = $clickableMainMenu.find('.sub-menu-2');
    /*Add Toggle Button in Off Canvas Sub Menu*/
    $clickableSubMenu.siblings('a').append('<span class="menu-expand"><i class="fa fa-angle-down"></i></span>');
    $clickableSubMenu2.siblings('a').append('<span class="menu-expand"><i class="fa fa-angle-down"></i></span>');
    /*Close Off Canvas Sub Menu*/
    $clickableSubMenu.find('.sub-menu').slideUp();
    $clickableSubMenu2.slideUp();
    /*Category Sub Menu Toggle*/
    $clickableMainMenu.on('click', 'li a, li .menu-expand', function(e) {
        var $this = $(this);
        if ($this.parent('li').hasClass('has-sub-menu') || ($this.attr('href') === '#' || $this.hasClass('menu-expand'))) {
            e.preventDefault();
            if ($this.siblings('ul:visible').length) {
                $this.parent('li').removeClass('active').children('ul').slideUp().siblings('a').find('.menu-expand i').removeClass('fa-angle-up').addClass('fa-angle-down');
                $this.parent('li').siblings('li').removeClass('active').find('ul:visible').slideUp().siblings('a').find('.menu-expand i').removeClass('fa-angle-up').addClass('fa-angle-down');
            } else {
                $this.parent('li').addClass('active').children('ul').slideDown().siblings('a').find('.menu-expand i').removeClass('fa-angle-down').addClass('fa-angle-up');
                $this.parent('li').siblings('li').removeClass('active').find('ul:visible').slideUp().siblings('a').find('.menu-expand i').removeClass('fa-angle-up').addClass('fa-angle-down');
            }
        }
    });
    
    
    /*=====================================
           Video Background JS
        ======================================*/
        var videoBg = $(".video-bg");

        videoBg.each(function (index, elem) {
            var element = $(elem),
                videoUrl = element.data('url');

            videoBg.YTPlayer({
                videoURL: videoUrl,
                startAt: 2,
                showControls: false,
                showYTLogo: false,
                mute: true,
                quality: 'highres',
                containment: '.video-bg-content-wrap'
            });
        });
    
    
})(jQuery);

