
(function ($) {
    "use strict";
    /*==================================================================
    [ Calculadora]*/
    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');
    // var input = [$('#FiO2'), $('#PaO2'),$('#PCO2'),$('#PAW')]
    $('.validate-form').on('submit',function(){
        // preventDefault()
        var check = true;
        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        if (check) {
            var fio2 = document.getElementById("FiO2").value;
            var pao2 = document.getElementById("PaO2").value;
            var pco2 = document.getElementById("PCO2").value;
            var paw = document.getElementById("PAW").value;
            document.getElementById("PAFI").value = (pao2/(fio2/100)).toFixed(2);
            document.getElementById("IO").value = paw*(fio2/pao2).toFixed(2);
            var pao2wtf = (713*fio2/100-1.25*pco2)
            document.getElementById("PAO2").value = (713*fio2/100-1.25*pco2).toFixed(2);
            document.getElementById("A-a").value = (pao2wtf-pao2).toFixed(2);
            document.getElementById("a/A").value = (pao2/pao2wtf).toFixed(2);
        }

        return false;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    
    

})(jQuery);