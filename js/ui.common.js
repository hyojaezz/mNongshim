var front = {
    init: function() {
        front.gnbUI();
        front.showProduct();
        front.mainSlider();
        front.bannerSlider();
        front.productSlider();
        front.academySlider();
        front.slideFooterMenu();
        front.faqCategorySlider();
    },
    gnbUI: function() {
        $('#header .m_btn').on('click', function() {
            $('body').toggleClass('on');
            $('#header .gnb>li').removeClass('on');

            // product_wrap이 열려있을경우 강제클릭
            if($('body').hasClass('on2')) {
                $('#header .btn_close').trigger('click');      
            };
        });

        // li에 클릭이벤트걸면 안쪽 모든요소에 클릭이벤트발생
        $('#header .gnb>li>a').on('click', function() {
            $(this).parent().addClass('on');
        });

        $('#header .gnb .depth2 .btn_back').on('click', function() {
            $(this).closest('li').removeClass('on');
        });
    },
    showProduct: function() {
        $('#header .btn_shop').on('click', function() {
            $('#header .btn_wrap .btn_search').css('opacity',0);
            $('#header .btn_wrap .btn_close').fadeIn(300);

            // gnb_wrap이 열려있을경우 강제클릭
            if($('body').hasClass('on')) {
                $('#header .m_btn').trigger('click');
            }
            
            $('body').addClass('on2');
        });

        $('#header .btn_close').on('click', function() {
            $('body').removeClass('on2');
            $(this).hide();
            $('#header .btn_wrap .btn_search').css('opacity',1);
        });
    },
    mainSlider: function() {
        var slider = new Swiper('.main_slider', {
            loop: true,
          
            pagination: {
              el: '.swiper-pagination',
              type: 'progressbar'
            },
            autoplay: {
                delay: 4000,
            },
        });
    },
    bannerSlider: function() {
        var slider = new Swiper('.main_banner_slider .banner_slider', {
            loop: false,
            slidesPerView: 'auto',
        }); 
    },
    productSlider: function() {
        var slider = new Swiper('.main_product_slider .product_slider', {
            loop: false,
            slidesPerView: 'auto',
        }); 
    },
    academySlider: function() {
        var slider = new Swiper('.academy_slider', {
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                type: 'progressbar',
            },
        }); 
    },
    slideFooterMenu: function() {
        var depth1 = $('#footer .depth1>li>a');
        var depth2 = $('#footer .depth2>li>a');
        var depth3 = $('#footer .depth3');

        depth1.on('click', function(e) {
            e.preventDefault();
            $(this).siblings().stop().slideToggle();
            $(this).parent().toggleClass('on');

            depth3.slideUp();
            depth2.parent().removeClass('on');
        });

        depth2.on('click', function(e) {
            e.preventDefault();
            $(this).siblings().slideToggle().parent().siblings().find('.depth3').slideUp();
            $(this).parent().toggleClass('on').siblings().removeClass('on');
        });
    },

    faqCategorySlider: function() {
        var slider = new Swiper('.faq .faq_category', {
            slidesPerView: 'auto',
        }); 
    },
};

$(document).ready(function() {
    front.init();
});