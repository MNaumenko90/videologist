/*
 * Third party
 */
//= ../../bower_components/jquery/dist/jquery.js
//= ../../bower_components/slick-carousel/slick/slick.js
//= ../../bower_components/jQuery-viewport-checker/dist/jquery.viewportchecker.min.js
//= ../../bower_components/jquery.maskedinput/src/jquery.maskedinput.js

/*
 * Custom
 */
$(document).ready(function(){

      $('h1, h3, .text-layer, .animate1, .label, .bgr').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInLeft',
        offset: 100
       });

            $(window).scroll(function(){
            if($(window).scrollTop()>400){
            $('#hid, #open').show()
            }
        })

      $('.my-slide').slick({
        autoplay: true,
        autoplaySpeed: 4000,
      });


      jQuery(function($) {

$.mask.definitions['~']='[+-]';

$('#tel').mask('+7(999) 999-9999');
    });
        

        $('#open').click(function(){
            $('#hid').toggleClass('hide')
        });

        jQuery('#send').click(function() {

            var tel = jQuery("#tel").val();
            var yname = jQuery("#yname").val();
            var error = false;

            if (tel == '') {
                error = true;
                jQuery("#tel").css('backgroundColor','#cccccc');
            }

            if (yname == '') {
                error = true;
                jQuery("#yname").css('backgroundColor','#cccccc');
            }

        if (!error) {

            var data = {
                phoneNum: tel,
                name: yname
            }

            jQuery.ajax({
                url: './callback.php',
                data: data,
                success: function (data) {
                    jQuery(".hide").hide();
                    jQuery(".success").fadeIn(100);
                },
                beforeSend: function() {
                   
                }
            });


        }

    });


              var top_show = 400;
              var delay = 1000;
              $(document).ready(function() {
                $(window).scroll(function () { 

                  if ($(this).scrollTop() > top_show) $('#top').fadeIn();
                  else $('#top').fadeOut();
                });
                $('#top').click(function () { 
                  
                  $('body, html').animate({
                    scrollTop: 0
                  }, delay);
                });
              });



    });