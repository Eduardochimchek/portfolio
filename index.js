var swiper;

$(document).ready(function() {
    // Configuração do Swiper
    swiper = new Swiper('#project-slider', {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    // Chama a função para buscar e exibir projetos ao carregar o DOM
    fetchAndDisplayProjects();
});

// Função para buscar e exibir projetos
// Função para buscar e exibir projetos
function fetchAndDisplayProjects() {
    const githubUsername = 'Eduardochimchek';
    const githubApiUrl = `https://api.github.com/users/${githubUsername}/repos`;

    // Realiza a requisição usando jQuery
    $.get(githubApiUrl)
        .done(function(response) {
            const projectsContainer = $('#projects-container');

            // Adiciona cada projeto ao slider
            response.forEach(project => {
                const projectSlide = $('<div class="swiper-slide"></div>');
                const projectContent = `
                    <h3>${project.name}</h3>
                    <p>${project.description || 'Sem descrição'}</p>
                    <a href="${project.html_url}" target="_blank">Ver no GitHub</a>
                `;

                projectSlide.html(projectContent);
                projectsContainer.append(projectSlide);
            });

            // Atualiza o slider após adicionar os projetos
            swiper.update();
        })
        .fail(function(error) {
            console.error('Erro ao buscar projetos do GitHub', error);
        });
}