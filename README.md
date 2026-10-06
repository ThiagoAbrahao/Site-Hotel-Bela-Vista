Hotel Bela Vista - Landing Page 🏨

Este repositório contém o código-fonte da landing page desenvolvida para o Hotel Bela Vista, localizado em Brasília. O site foi projetado para ser responsivo, moderno e focado em conversão (reservas via WhatsApp), apresentando a infraestrutura, acomodações e localização privilegiada do hotel.

💻 Tecnologias Utilizadas

HTML5: Estrutura semântica e marcação do site.

Tailwind CSS (via CDN): Estilização rápida, utilitária e design responsivo (Mobile-First) sem necessidade de build complexo.

JavaScript (Vanilla): Controle do menu mobile (sanduíche) e lógica dos mini-carrosséis interativos nos cards de infraestrutura.

SVG Inline: Ícones leves e escaláveis integrados diretamente no código para otimizar o carregamento.

✨ Funcionalidades Principais

Navegação Inteligente: Menu sticky com transição suave que se adapta automaticamente entre dispositivos móveis e desktops.

Carrosséis de Imagens: Galerias deslizantes implementadas nos cards de "Conectividade & Lazer", "Suítes Premium" e "Gastronomia".

Integração com Google Maps: Mapa embutido (iframe) mostrando a localização exata no Paranoá.

CTA Integrado (WhatsApp): Botões de reserva na seção principal e um botão flutuante persistente que redirecionam o usuário diretamente para o atendimento do hotel.

📂 Estrutura de Arquivos

Para que o site funcione corretamente, certifique-se de que seu diretório local siga esta estrutura, baseada nos caminhos do código:

/
├── index.html       # Arquivo principal do site
├── script.js        # Script contendo a função moveMiniCarousel e lógica do menu
└── partes/          # Diretório de assets visuais
    ├── favicon.png
    ├── logo.png
    ├── localizacao.jpg
    ├── estudo2.png
    ├── quartoluxo.png
    ├── quarto2.jpg
    ├── quarto3.jpg
    ├── quarto4.jpg
    ├── restaurante1.JPG
    ├── restaurante2.jpg
    ├── restaurante3.jpg
    └── restaurante4.jpg


🚀 Como executar o projeto

Como o projeto utiliza tecnologias front-end estáticas e o Tailwind via CDN, a execução é imediata:

Faça o download ou clone este repositório.

Certifique-se de que a pasta partes/ com as imagens correspondentes esteja no mesmo nível do arquivo index.html.

Abra o arquivo index.html diretamente em qualquer navegador atualizado.

Dica para desenvolvimento: Abra a pasta no VS Code e utilize a extensão Live Server para testar as transições e o JavaScript em tempo real.

👨‍💻 Desenvolvedor

Desenvolvido por Thiago Domingos Abrahão de Lima

Contato: (61) 9 8140-4302

Projeto desenvolvido visando alta conversão e excelente experiência do usuário (UX).
