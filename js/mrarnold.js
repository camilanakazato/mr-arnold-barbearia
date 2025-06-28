document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('desconto-form');
    const msg = document.getElementById('desconto-msg');
    if(form) {
        form.addEventListener('submit', async function(e) {
            e.preventDefault();
            const email = form.querySelector('input[type="email"]').value;
            const telefone = form.querySelector('input[type="tel"]').value;
            if(email && telefone) {
                try {
                    const res = await fetch('http://localhost:3001/api/desconto', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ email, telefone })
                    });
                    const data = await res.json();
                    if(res.ok) {
                        msg.textContent = 'Parabéns! Seu desconto de 10% está garantido. Verifique seu email e apresente o cupom na sua primeira visita.';
                        form.reset();
                    } else {
                        msg.textContent = data.error || 'Erro ao cadastrar. Tente novamente.';
                    }
                } catch (err) {
                    console.error('Erro:', err);
                    msg.textContent = 'Erro ao conectar ao servidor. Verifique se o servidor está rodando.';
                }
            }
        });
    }

    // Formulário de contato
    const contatoForm = document.querySelector('.contato-form');
    if(contatoForm) {
        contatoForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            const nome = contatoForm.querySelector('input[placeholder="Seu nome"]').value;
            const email = contatoForm.querySelector('input[placeholder="Seu e-mail"]').value;
            const telefone = contatoForm.querySelector('input[placeholder="Seu telefone"]').value;
            try {
                const res = await fetch('http://localhost:3001/api/contato', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ nome, email, telefone })
                });
                if(res.ok) {
                    alert('Contato enviado com sucesso!');
                    contatoForm.reset();
                } else {
                    alert('Erro ao enviar contato.');
                }
            } catch {
                alert('Erro ao conectar ao servidor.');
            }
        });
    }

    // Formulário de desconto Jaboque
    const jaboqueForm = document.getElementById('jaboque-form');
    const jaboqueMsg = document.getElementById('jaboque-msg');
    if(jaboqueForm) {
        jaboqueForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            const nome = jaboqueForm.querySelector('input[type="text"]').value;
            const email = jaboqueForm.querySelector('input[type="email"]').value;
            const telefone = jaboqueForm.querySelector('input[type="tel"]').value;
            try {
                const res = await fetch('http://localhost:3001/api/jaboque', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ nome, email, telefone })
                });
                if(res.ok) {
                    jaboqueMsg.textContent = 'Parabéns! Seu desconto de 15% na linha Jaboque está garantido. Verifique seu email e apresente o cupom na sua próxima visita.';
                    jaboqueForm.reset();
                } else {
                    jaboqueMsg.textContent = 'Erro ao cadastrar. Tente novamente.';
                }
            } catch {
                jaboqueMsg.textContent = 'Erro ao conectar ao servidor.';
            }
        });
    }

    // Carrossel de Produtos
    const produtos = [
        { img: 'ativadordeCachos-cavalera.jpg', nome: 'Ativador de Cachos | Cavalera', descricao: 'Realce os cachos com definição, maciez e controle de frizz. Ideal para quem quer estilo com movimento natural.' },
        { img: 'balmbyrum-cavaleira.jpg', nome: 'Balm by Rum | Cavalera', descricao: 'Hidratante multifuncional para barba e pele. Perfeito para acalmar irritações e manter os fios alinhados com um toque sofisticado.' },
        { img: 'balmclassic-cavalera.jpg', nome: 'Balm Classic | Cavalera', descricao: 'Clássico e eficaz: hidrata, suaviza e perfuma a barba, proporcionando um visual bem cuidado todos os dias.' },
        { img: 'balm-jaboque.jpg', nome: 'Balm | Jaboque', descricao: 'Nutre profundamente a barba. Um cuidado diário para quem preza conforto e aparência impecável.' },
        { img: 'gelUltraGlued-jaboque.jpg', nome: 'Gel Ultra Glued | Jaboque', descricao: 'Fixação extrema para penteados que duram o dia inteiro. Ideal para quem quer estilo com firmeza e sem frizz.' },
        { img: 'grooming-cavalera.jpg', nome: 'Grooming | Cavalera', descricao: 'Modelador versátil para barba e cabelo. Controle, hidratação e estilo num só produto.' },
        { img: 'grooming-jaboque.jpg', nome: 'Grooming | Jaboque', descricao: 'Alinha os fios sem pesar. Praticidade e elegância no cuidado diário da barba e cabelo.' },
        { img: 'leaveIn-jaboque.jpg', nome: 'Leave-In | Jaboque', descricao: 'Tratamento sem enxágue que hidrata, desembaraça e fortalece. Essencial para manter os fios saudáveis e macios.' },
        { img: 'oleo-cavaleira.jpg', nome: 'Óleo p/ Barba | Cavalera', descricao: 'Hidratação intensa com fragrância marcante. Deixa a barba macia, brilhante e com toque suave.' },
        { img: 'oleo-jaboque.jpg', nome: 'Óleo p/ Barba | Jaboque', descricao: 'Rico em óleos naturais, nutre profundamente e elimina o ressecamento da barba com leveza e estilo.' },
        { img: 'penteParaBarba.jpg', nome: 'Pente para Barba', descricao: 'Ideal para alinhar, desembaraçar e distribuir produtos uniformemente. Um acessório indispensável para manter o visual em dia.' },
        { img: 'perfume-cavalera.jpg', nome: 'Perfume Classic | Cavalera', descricao: 'Fragrância elegante e marcante. Perfeito para quem quer deixar sua identidade registrada por onde passa.' },
        { img: 'pomadaBrilhoPremium-Cavalera.jpg', nome: 'Pomada Brilho Premium | Cavalera', descricao: 'Acabamento brilhante com fixação forte. Ideal para penteados sofisticados e duradouros.' },
        { img: 'pomadaByRum-cavalera.jpg', nome: 'Pomada by Rum | Cavalera', descricao: 'Fixação e textura na medida certa, com aroma exclusivo. Um toque de personalidade para o seu penteado.' },
        { img: 'pomadaClassic-cavalera.jpg', nome: 'Pomada Classic | Cavalera', descricao: 'Firme na fixação, suave no visual. Versátil para diferentes estilos, com toque clássico e moderno.' },
        { img: 'pomadaClassic-jaboque.jpg', nome: 'Pomada Classic | Jaboque', descricao: 'Fixação média e acabamento natural. Ideal para quem busca praticidade e estilo no dia a dia.' },
        { img: 'pomadaMatte-jaboque.jpg', nome: 'Pomada Matte | Jaboque', descricao: 'Visual seco e natural com total controle. Perfeita para looks modernos e despojados.' },
        { img: 'pomadaNuvem-jaboque.jpg', nome: 'Pomada Nuvem | Jaboque', descricao: 'Textura leve como o nome sugere, com fixação suave. Ideal para modelar sem pesar.' },
        { img: 'pomadaEmPó-Jaboque.jpg', nome: 'Pomada em Pó | Jaboque', descricao: 'Volume instantâneo e fixação leve. Solução prática para levantar o visual em segundos.' },
        { img: 'posbarba-cavalera.jpg', nome: 'Pós barba | Cavalera', descricao: 'Acalma, hidrata e refresca após o barbear. Sensação suave e perfumada para finalizar com estilo.' },
        { img: 'posBarba-jaboque.jpg', nome: 'Pós barba | Jaboque', descricao: 'Evita irritações e vermelhidão com ação calmante. Um toque de cuidado que sua pele merece.' },
        { img: 'saboneteIntimo-cavalera.jpg', nome: 'Sabonete Íntimo | Cavalera', descricao: 'Higiene diária com frescor e proteção. Fórmula suave e eficaz para cuidados íntimos masculinos.' },
        { img: 'shampoo-cavalera.jpg', nome: 'Shampoo p/ barba | Cavalera', descricao: 'Limpa sem ressecar, eliminando impurezas e controle de odores. Essencial para manter a barba saudável e cheirosa.' },
        { img: 'shampoo-jaboque.jpg', nome: 'Shampoo 2 em 1 | Jaboque', descricao: 'Cuidado completo para cabelo e barba. Limpeza, hidratação e praticidade em um único produto.' },
        { img: 'shavingcream-jaboque.jpg', nome: 'Shaving Cream | Jaboque', descricao: 'Creme hidratante que facilita o deslizar da lâmina, reduzindo irritações. Proporciona um barbear preciso, suave e confortável.' },
        { img: 'tonico-cavalera.jpg', nome: 'Tônico capilar | Cavalera', descricao: 'Fortalece a raiz e estimula o crescimento dos fios. Ideal para quem busca saúde e vigor no cabelo.' },
        { img: 'shampoo-walory.jpg', nome: 'Shampoo Power Crystal | Walory', descricao: 'Limpeza profunda e brilho intenso com tecnologia profissional. Resultado de salão no seu banho diário.' },
        { img: 'pomadaUltraWhite-jaboque.jpg', nome: 'Pomada Ultra White | Jaboque', descricao: 'Fórmula suave que modela com leveza, controla o frizz e mantém o aspecto natural dos fios. Ideal para um visual alinhado e discreto no dia a dia.' }
    ];

    function formatarNomeProduto(nomeArquivo) {
        let nome = nomeArquivo.replace(/\.(jpg|jpeg|png)$/i, '');
        nome = nome.replace(/[-_]/g, ' ');
        nome = nome.replace(/jaboque|cavalera/gi, '').replace(/\s+/g, ' ');
        nome = nome.replace(/Em Pó/gi, 'Em Pó'); // Corrige nomes compostos
        nome = nome.trim();
        // Primeira letra maiúscula de cada palavra
        nome = nome.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
        return nome;
    }

    const produtosCarousel = document.getElementById('produtos-carousel');
    const prevBtn = document.getElementById('carousel-prev');
    const nextBtn = document.getElementById('carousel-next');
    let startIndex = 0;

    function renderCarousel() {
        produtosCarousel.innerHTML = '';
        for (let i = 0; i < 3; i++) {
            const idx = (startIndex + i) % produtos.length;
            const produto = produtos[idx];
            const card = document.createElement('div');
            card.className = 'produto-card';
            const nome = produto.nome || formatarNomeProduto(produto.img);
            card.innerHTML = `<h3>${nome}</h3><div class="produto-img-hover"><img src="imgs/${produto.img}" alt="${nome}"></div><div class="produto-descricao">${produto.descricao || ''}</div>`;
            produtosCarousel.appendChild(card);
        }
    }

    if (produtosCarousel) {
        let startX = null;
        let startY = null;
        let isSwiping = false;
        produtosCarousel.addEventListener('touchstart', function(e) {
            if (e.touches.length === 1) {
                startX = e.touches[0].clientX;
                startY = e.touches[0].clientY;
                isSwiping = false;
            }
        });
        produtosCarousel.addEventListener('touchmove', function(e) {
            if (startX !== null && e.touches.length === 1) {
                const dx = e.touches[0].clientX - startX;
                const dy = e.touches[0].clientY - startY;
                if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 20) {
                    isSwiping = true;
                    e.preventDefault();
                }
            }
        }, { passive: false });
        produtosCarousel.addEventListener('touchend', function(e) {
            if (startX !== null && isSwiping && e.changedTouches.length === 1) {
                const endX = e.changedTouches[0].clientX;
                const diff = endX - startX;
                if (Math.abs(diff) > 40) {
                    if (diff < 0) {
                        startIndex = (startIndex + 3) % produtos.length;
                        renderCarousel();
                    } else {
                        startIndex = (startIndex - 3 + produtos.length) % produtos.length;
                        renderCarousel();
                    }
                }
            }
            startX = null;
            startY = null;
            isSwiping = false;
        });
    }

    renderCarousel();

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            startIndex = (startIndex - 3 + produtos.length) % produtos.length;
            renderCarousel();
        });
    }
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            startIndex = (startIndex + 3) % produtos.length;
            renderCarousel();
        });
    }

    // Alternar encolher/expandir vídeo e girar seta
    const scrollBtn = document.querySelector('.scroll-down-btn');
    if (scrollBtn) {
        scrollBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const videoHero = document.querySelector('.video-hero-container');
            if (videoHero) {
                if (!videoHero.classList.contains('shrink')) {
                    // Seta para baixo: encolher vídeo e centralizar logo
                    videoHero.classList.add('shrink');
                    setTimeout(() => {
                        const logo = document.querySelector('.logo-hero');
                        if (logo) {
                            const rect = logo.getBoundingClientRect();
                            const scrollY = window.scrollY + rect.top + rect.height / 2 - window.innerHeight / 2;
                            window.scrollTo({top: scrollY, behavior: 'smooth'});
                        }
                    }, 500);
                } else {
                    // Seta para cima: expandir vídeo e rolar para o topo do vídeo
                    videoHero.classList.remove('shrink');
                    setTimeout(() => {
                        const rect = videoHero.getBoundingClientRect();
                        const scrollY = window.scrollY + rect.top;
                        window.scrollTo({top: scrollY, behavior: 'smooth'});
                    }, 500);
                }
            }
        }, true);
    }

    // Carrossel de Dicas de Cuidado
    const dicas = [
        {
            titulo: 'Lave o cabelo e a barba regularmente com produtos adequados.',
            imagem: 'dica1.jpg',
            legenda: 'Nossos profissionais indicam o Shampoo para Barba | Cavalera ou Shampoo 2 em 1 | Jaboque — limpeza eficaz que remove impurezas sem ressecar, deixando os fios saudáveis e perfumados.'
        },
        {
            titulo: 'Hidrate a pele após o barbear.',
            imagem: 'dica2.jpg',
            legenda: 'Nossos profissionais indicam o Pós-barba Classic | Cavalera e o Balm Classic | Cavalera — acalmam a pele, evitam irritações e hidratam profundamente após o barbear.'
        },
        {
            titulo: 'Visite seu barbeiro a cada 2 ou 3 semanas para manter o corte alinhado.',
            imagem: 'dica3.jpg',
            legenda: 'Nossos profissionais indicam a Pomada by Rum | Cavalera — para finalizar com estilo e controle — ou o Ativador de Cachos | Cavalera, ideal para definir, hidratar e valorizar cabelos cacheados.'
        },
        {
            titulo: 'Use óleos e balms para manter a barba macia e saudável.',
            imagem: 'dica4.jpg',
            legenda: 'Nossos profissionais indicam o Óleo Premium | Cavalera e o Balm para Barba | Jaboque — nutrem os fios, reduzem o frizz e deixam a barba com toque suave e aparência bem cuidada.'
        },
        {
            titulo: 'Autoestima começa com cuidado. E cuidado começa na escolha certa: venha viver a experiência Mr. Arnold.',
            imagem: 'dica5.jpg',
            legenda: 'Sinta-se em casa enquanto cuida do seu visual. Aqui você é sempre prioridade.'
        }
    ];

    const dicasCarousel = document.getElementById('dicas-carousel');
    const dicasPrevBtn = document.getElementById('dicas-carousel-prev');
    const dicasNextBtn = document.getElementById('dicas-carousel-next');
    const dicasCarouselIndicators = document.getElementById('dicas-carousel-indicators');
    let dicaAtual = 0;

    // Cria o slide uma única vez
    let slideEl = null;
    if (dicasCarousel) {
        slideEl = document.createElement('div');
        slideEl.className = 'dica-slide fade-in';
        dicasCarousel.appendChild(slideEl);
    }

    function renderizarDica(skipFade) {
        if (!slideEl) return;
        const dica = dicas[dicaAtual];
        slideEl.innerHTML = `
            <h3 class="dica-titulo">${dica.titulo}</h3>
            <img class="dica-img" src="imgs/${dica.imagem}" alt="${dica.titulo}">
            <div class="dica-legenda">${dica.legenda}</div>
        `;
        slideEl.classList.remove('fade-in', 'fade-out');
        if (skipFade) slideEl.classList.add('fade-in');
        // Renderizar bolinhas
        if (dicasCarouselIndicators) {
            dicasCarouselIndicators.innerHTML = '';
            dicas.forEach((_, idx) => {
                const dot = document.createElement('span');
                dot.className = 'dicas-indicator-dot' + (idx === dicaAtual ? ' active' : '');
                dot.addEventListener('click', () => {
                    if (idx !== dicaAtual) trocarDica(idx);
                });
                dicasCarouselIndicators.appendChild(dot);
            });
        }
    }

    function trocarDica(novaDica) {
        if (!slideEl) return;
        slideEl.classList.remove('fade-in');
        slideEl.classList.add('fade-out');
        setTimeout(() => {
            dicaAtual = novaDica;
            renderizarDica(true);
        }, 200);
    }

    if (dicasCarousel && dicasPrevBtn && dicasNextBtn) {
        renderizarDica(true);
        dicasPrevBtn.addEventListener('click', () => {
            trocarDica((dicaAtual - 1 + dicas.length) % dicas.length);
        });
        dicasNextBtn.addEventListener('click', () => {
            trocarDica((dicaAtual + 1) % dicas.length);
        });
    }

    // Flip card história Mr. Arnold
    const historiaCard = document.querySelector('.historia-card');
    if(historiaCard) {
        historiaCard.addEventListener('click', function() {
            historiaCard.classList.toggle('flipped');
        });
    }
});

// Efeito de encolher o vídeo ao rolar
window.addEventListener('scroll', function() {
    const videoHero = document.querySelector('.video-hero-container');
    if (!videoHero) return;
    if (window.scrollY > 40) {
        videoHero.classList.add('shrink');
    } else {
        videoHero.classList.remove('shrink');
    }
}); 