jQuery(document).ready(function($) {
    $(document).on('click', '.next-btn', function() {
        $(this).toggleClass('active');
        $('.herosection').toggleClass('exterminador');

        if ($(this).hasClass('active')) {
            // Atualizar para Exterminador
            $('h1').text('Exterminador');
            $('.description').text(
                'Exterminador é um estrategista militar brilhante e um assassino mortal. Conhecido por sua habilidade em combate e com armas, ele é um mercenário altamente treinado e formidável. Apesar de seus métodos implacáveis, ele possui um código moral, o que o torna um anti-herói complexo e fascinante.'
            );
        } else {
            // Voltar para Deadpool
            $('h1').text('DEADPOOL');
            $('.description').text(
                'Deadpool é conhecido por ser um combatente habilidoso, mestre no uso de armas de fogo e espadas, e por sua personalidade caótica e imprevisível. Ele atua como mercenário, aceitando missões que variam de salvar o mundo a fazer tarefas absurdas, sempre com um toque cômico. Apesar de seu exterior cínico e violento, Deadpool ocasionalmente demonstra um lado mais humano, protegendo inocentes e lutando por boas causas – embora, claro, sempre do seu jeito único e cheio de piadas.'
            );
        }
    });
});
