// ========================================
// PERSONALIZE AQUI: Coloque a data de início do namoro
// Formato: Ano, Mês (0-11), Dia, Hora, Minuto, Segundo
// Exemplo: new Date(2023, 0, 15, 20, 30, 0) = 15 de Janeiro de 2023 às 20:30
// ========================================

const dataInicioNamero = new Date(2025, 6, 12, 23, 0, 0); // MUDE ESTA LINHA!

// ========================================
// Não precisa mexer no código abaixo
// ========================================

function atualizarCronometro() {
    const agora = new Date();
    const diferenca = agora - dataInicioNamero;
    
    // Calcular anos, meses, dias, horas, minutos e segundos
    const anos = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 365.25));
    const meses = Math.floor((diferenca % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44));
    const dias = Math.floor((diferenca % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);
    
    // Atualizar os elementos na página
    document.getElementById('years').textContent = anos;
    document.getElementById('months').textContent = meses;
    document.getElementById('days').textContent = dias;
    document.getElementById('hours').textContent = horas;
    document.getElementById('minutes').textContent = minutos;
    document.getElementById('seconds').textContent = segundos;
}

// Atualizar o cronômetro a cada segundo
setInterval(atualizarCronometro, 1000);

// Executar uma vez quando a página carregar
document.addEventListener('DOMContentLoaded', atualizarCronometro);

// Adicionar efeitos interativos às fotos polaroid
document.addEventListener('DOMContentLoaded', function() {
    const polaroids = document.querySelectorAll('.polaroid-photo');
    
    polaroids.forEach(polaroid => {
        // Efeito de hover mais suave
        polaroid.addEventListener('mouseenter', function() {
            this.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease, z-index 0s';
            this.style.zIndex = '10';
        });
        
        polaroid.addEventListener('mouseleave', function() {
            this.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease, z-index 0.3s';
            this.style.zIndex = '1';
        });
        
        // Efeito de clique
        polaroid.addEventListener('click', function() {
            this.style.transform = 'rotate(0deg) scale(1.05)';
            setTimeout(() => {
                this.style.transform = this.getAttribute('style').includes('rotate') ? 
                    this.getAttribute('style').match(/rotate\([^)]*\)/)[0] : 'rotate(0deg)';
            }, 200);
        });
    });
    
    // Animação suave para as frases
    const quotes = document.querySelectorAll('.quote-card');
    quotes.forEach((quote, index) => {
        quote.style.opacity = '0';
        quote.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            quote.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            quote.style.opacity = '1';
            quote.style.transform = 'translateY(0)';
        }, index * 200);
    });
});

// Função para criar corações flutuantes (efeito especial)
function criarCoracaoFlutuante() {
    const coracao = document.createElement('div');
    coracao.innerHTML = '❤️';
    coracao.style.position = 'fixed';
    coracao.style.left = Math.random() * 100 + 'vw';
    coracao.style.top = '100vh';
    coracao.style.fontSize = Math.random() * 20 + 10 + 'px';
    coracao.style.opacity = '0.7';
    coracao.style.pointerEvents = 'none';
    coracao.style.zIndex = '1000';
    coracao.style.transition = 'all 3s ease-out';
    
    document.body.appendChild(coracao);
    
    // Animar o coração para cima
    setTimeout(() => {
        coracao.style.top = '-50px';
        coracao.style.opacity = '0';
        coracao.style.transform = 'rotate(360deg)';
    }, 100);
    
    // Remover o coração após a animação
    setTimeout(() => {
        document.body.removeChild(coracao);
    }, 3100);
}

// Criar corações flutuantes ocasionalmente
setInterval(criarCoracaoFlutuante, 5000);
