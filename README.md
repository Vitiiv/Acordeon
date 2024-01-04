# README - Acordeon

## Descrição
Este projeto consiste em uma página web que implementa um componente acordeon, exibindo perguntas e respostas relacionadas a um determinado tópico. O acordeon permite que o usuário clique em uma pergunta para revelar ou ocultar a resposta correspondente.

## Pré-requisitos
Certifique-se de ter um navegador web para visualizar a página.

## Instalação
1. Clone o repositório: `git clone https://github.com/seu-usuario/nome-do-repositorio.git`
2. Navegue até o diretório do projeto: `cd nome-do-repositorio`
3. Abra o arquivo `index.html` em seu navegador.

## Estrutura do Projeto

## Estilo (CSS)
O estilo da página é definido no arquivo `style.css`. Alguns pontos-chave:

- **Fonte:** Utiliza a fonte "Roboto" do Google Fonts.
- **Cores e Layout:** Define o esquema de cores, layout e sombras para criar um visual atraente para o acordeon.
- **Animações:** Adiciona transições para uma experiência de usuário mais suave.

## Comportamento Interativo (JavaScript)
O JavaScript (`acordeon.js`) adiciona a funcionalidade de clique aos itens do acordeon, permitindo a ativação e desativação dinâmica. Ao clicar em um item, a classe "ativo" é adicionada a ele, revelando a resposta correspondente, e removida dos itens anteriores.
O comportamento interativo do acordeon é controlado pelo arquivo `acordeon.js`. Principais funcionalidades:

- **Seleção de Itens:** Identifica todos os itens de perguntas e respostas.
- **Evento de Clique:** Adiciona um ouvinte de evento de clique a cada item.
- **Ativação e Desativação:** Adiciona e remove a classe "ativo" para mostrar ou ocultar a resposta do item clicado.
- **Estilo Dinâmico:** Altera dinamicamente o estilo do item ativo para fornecer feedback visual ao usuário.

## Personalização
Sinta-se à vontade para personalizar o conteúdo das perguntas e respostas no arquivo `index.html`. Modifique as imagens no diretório `image` conforme necessário.

