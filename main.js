jQuery(document).ready(function($){
    $(document).on('click', '.next-btn', function(){
        $(this).toggleClass('active');
        $('.herosection').toggleClass('exterminador');

        $('h1').text('Exterminador');
    });
    
    $(document).on('click', '.next-btn.active', function(){

        $('h1').text('DEADPOOL');
    });  
});