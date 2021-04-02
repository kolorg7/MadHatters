$(document).ready(function(){
    new WOW().init();

    function validateForms(form) {
        $(form).validate({
            rules: {
                email: {
                    required: true,
                    email: true
                }
            },
        });
    };

    validateForms('#newsletter-form');

    $('form').submit(function(e) {
        e.preventDefault();

        if (!$(this).valid()) {
            return;
        }

        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('.overlay, #thanks').fadeIn('slow');

            $('form').trigger('reset');
        });
        return false;
    });

    $('.modal__close').on('click', function() {
        $('.overlay, #thanks').fadeOut('slow');
    });
});