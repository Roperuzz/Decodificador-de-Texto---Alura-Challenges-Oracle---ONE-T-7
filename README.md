# Desafio de Criptografia de Texto

Este desafio faz parte da **Turma 7 da ONE - Oracle Next Education**, uma iniciativa da Oracle e da Alura Latam. É o meu primeiro projeto, abrangendo os 9 cursos da formação de Iniciante em Programação e os 4 cursos de Desenvolvimento Pessoal.

O desafio é uma excelente oportunidade para aplicar os conhecimentos adquiridos. Os Challenges são uma parte essencial do programa ONE, com o objetivo de desenvolver projetos incríveis e incluí-los no portfólio, demonstrando as habilidades aprendidas. Isso faz parte da abordagem **Challenge Based Learning**, criada com o apoio da Apple, que promove a resolução de problemas reais como método de aprendizado.

## Descrição do Desafio

O objetivo é criar uma aplicação que criptografa textos, permitindo a troca de mensagens secretas com outras pessoas que conheçam a chave de criptografia utilizada. As "chaves" de criptografia são as seguintes:

- A letra "e" é convertida para "enter"
- A letra "i" é convertida para "imes"
- A letra "a" é convertida para "ai"
- A letra "o" é convertida para "ober"
- A letra "u" é convertida para "ufat"

### Requisitos:

- A aplicação deve funcionar apenas com letras minúsculas.
- Não deve permitir letras com acentos ou caracteres especiais.
- Deve ser possível converter uma palavra para a versão criptografada e também revertê-la para a versão original.

### Exemplo:

- `"gato" => "gaitober"`
- `"gaitober" => "gato"`

### Funcionalidades:

- A página deve conter campos para inserção do texto a ser criptografado ou descriptografado, com a opção de escolher entre as duas funções.
- O resultado deve ser exibido na tela.

### Extras:

- Um botão que copie o texto criptografado/descriptografado para a área de transferência, com a funcionalidade semelhante ao Ctrl+C ou à opção "copiar" do menu de aplicativos.

## Implementação

Para a implementação deste desafio, utilizei o **CSS** para modificar cores, fontes, adicionar bordas e até animações. Por exemplo:

- Alterar a fonte, tamanho e cor do título.
- Adicionar uma cor, gradiente ou imagem como plano de fundo do site.
- Mudar estilos, cores e bordas dos botões, explorando a criatividade ou replicando o design proposto.

### Elementos principais da página:

- **Título do site.**
- **Campo** para o texto que será criptografado/descriptografado.
- **Botões** para realizar a criptografia/descriptografia.
- **Área** para exibir o texto resultante.

### Extra!

- Um **rodapé** com os dados da pessoa que desenvolveu o site.

Para realizar essa parte do encriptador, você pode usar tanto a tag HTML `<input>` quanto `<textarea>`. É possível ocultar e mostrar diferentes elementos dependendo do estado da aplicação, começando com uma imagem que será substituída pelo texto criptografado/descriptografado.

### Tarefas para Criptografia:

- Criar a função de criptografia.
- Ligar a função ao botão correspondente no HTML.
- Capturar o texto inserido no campo de input do HTML.
- Desenvolver a lógica da criptografia.
- Exibir o resultado do texto criptografado na tela.

### Tarefas para Descriptografia:

- Criar a função de descriptografia.
- Ligar a função ao botão correspondente no HTML.
- Capturar o texto inserido no campo de input do HTML.
- Desenvolver a lógica da descriptografia.
- Exibir o resultado do texto descriptografado na tela.

### Botão de Copiar:

Por fim, criei um botão para chamar a função que copia o texto criptografado ou descriptografado.

## Estrutura do Código HTML

O código HTML define a estrutura de uma página web para o projeto de criptografia e descriptografia de textos, desenvolvido como parte do programa ONE - Oracle Next Education. Abaixo estão os principais componentes do código:

### Estrutura Principal:

1. **Cabeçalho (`<head>`):**
   - Define as configurações da página, incluindo o charset UTF-8, a compatibilidade com Internet Explorer, e o viewport para responsividade.
   - Inclui uma referência à biblioteca `responsivevoice.js` para síntese de voz e ao arquivo de estilo `styles.css`.
   - O título da página é definido como "Criptografia e Descriptografia".

2. **Corpo da Página (`<body>`):**
   - A página começa com um header que inclui uma imagem (`<img>`) representando o logotipo e um título (`<h1>`) com o nome do projeto.
   - O conteúdo principal é organizado dentro de um elemento `<main>`, que contém:
     - **Área de Texto:** Um `<textarea>` para que o usuário insira o texto a ser criptografado ou descriptografado.
     - **Grupo de Botões:** Três botões para acionar as funções de criptografia, descriptografia e cópia do texto.
     - **Mensagem de Aviso:** Um `<h2>` para alertar o usuário sobre as restrições de entrada (usar apenas letras minúsculas, sem acentos e caracteres especiais).
     - **Área de Resultado:** Uma `<div>` com um `<p>` para exibir o texto resultante após a criptografia ou descriptografia.
   - O rodapé (`<footer>`) inclui o nome do desenvolvedor, Rodrigo Peruzzo, e um link para seu perfil no LinkedIn.

3. **Script (`<script>`):**
   - O arquivo `script.js`, que contém as funções JavaScript necessárias para a funcionalidade da página, é incluído no final do corpo para ser carregado de forma assíncrona.

## Estrutura do Código CSS

O código CSS é utilizado para estilizar a página web do projeto de criptografia e descriptografia de textos, desenvolvido como parte do programa ONE - Oracle Next Education. Abaixo estão os principais componentes e suas funções:

### Estrutura Principal:

1. **Configurações Globais (`*`):**
   - Define o `box-sizing` como `border-box` para garantir que padding e bordas sejam incluídos na largura e altura dos elementos.
   - Remove margens e padding padrão dos elementos e define a cor do texto como preta.

2. **Fontes e Corpo (`.fontes`, `body`):**
   - Define a fonte "Inter" com suporte a diferentes pesos.
   - O corpo da página (`body`) tem um fundo azul com uma imagem (`Frame01.jpg`) ajustada para cobrir todo o fundo, centralizada, e sem repetição. A cor do texto é branca para contraste.

3. **Cabeçalho (`header`, `.header-img`, `h1`):**
   - O cabeçalho tem um fundo semitransparente, com a imagem do logotipo redimensionada e o título estilizado com um gradiente metálico em azul, que se torna visível com a propriedade `background-clip: text`.

4. **Animação (`@keyframes piscar`, `h2`):**
   - Uma animação de piscar é aplicada a um texto de aviso (`h2`), que é estilizado com um gradiente vermelho metálico.

5. **Conteúdo Principal (`#content`, `.container`, `.result`):**
   - O conteúdo principal é centralizado e usa cores contrastantes (fundo claro e texto escuro) para garantir boa legibilidade.
   - A área de resultado (`.result`) tem uma borda escura, um fundo claro, e texto preto para destacar o conteúdo gerado.

6. **Rodapé (`footer`):**
   - O rodapé tem uma margem superior, padding, e uma borda superior para separação visual do restante da página. O texto é centralizado.

7. **Botões (`button`):**
   - Os botões são estilizados com um fundo azul e texto branco, e ao passar o mouse, a cor de fundo muda para um tom mais escuro de azul.

8. **Área de Texto (`.text-area`, `#inputText`, `#resultText`):**
   - A área de texto onde o usuário insere o texto a ser criptografado ou descriptografado tem um fundo escuro e bordas brancas para destaque.
   - O campo de input (`#inputText`) e a área de resultado (`#resultText`) são dimensionados para ocupar toda a largura disponível e são estilizados com bordas arredondadas e cores que garantem boa legibilidade.

## Estrutura do Código JavaScript

O código, escrito em JavaScript, implementa um encriptador e desencriptador de textos que utiliza substituições específicas de letras para converter mensagens. A lógica é baseada em dois objetos: um para substituições diretas e outro para substituições inversas.

### Substituições e Inversas

- **`substitutions`**: Um objeto que define regras de substituição para caracteres específicos. Exemplo: 'e' é substituído por 'enter'.
- **`reverseSubstitutions`**: Um objeto criado a partir do `substitutions`, com as substituições invertidas para reverter o texto criptografado ao formato original.

### Funções Auxiliares

- **`limpaAreaTexto`**: Limpa o conteúdo das áreas de exibição de texto (criptografado ou descriptografado).
- **`limpaAreaDigitada`**: Limpa o campo de entrada onde o usuário insere o texto.
- **`botaoCopiar`**: Adiciona um botão para copiar o texto exibido para a área de transferência. Atualiza o texto do botão para indicar sucesso na cópia.

### Funções de Criptografia e Descriptografia

- **`codifica`**: Criptografa o texto substituindo caracteres de acordo com o objeto `substitutions`.
- **`descriptografar`**: Descriptografa o texto substituindo códigos de volta aos caracteres originais usando o objeto `reverseSubstitutions`. Inclui validação de texto e exibição de mensagens de erro.
- **`criptografar`**: Criptografa o texto do campo de entrada e exibe o resultado. Adiciona um botão de copiar se ainda não estiver presente.

### Função de Copiar

- **`copiar`**: Copia o texto da área de exibição para a área de transferência. Atualiza o botão de copiar para mostrar um status de sucesso e redefine o estado após um curto período.

### Funcionalidade de Leitura de Texto

- **`setupTextToSpeech`**: Configura a leitura em voz alta do texto ao passar o mouse sobre elementos com a classe `hover-text`. Utiliza a biblioteca ResponsiveVoice para leitura em português brasileiro e cancela a leitura quando o mouse sai do elemento.

### Inicialização

- **`document.addEventListener('DOMContentLoaded', setupTextToSpeech)`**: Inicializa a funcionalidade de leitura de texto em voz alta quando o DOM está totalmente carregado.

## Tecnologias Utilizadas

- JavaScript, HTML e CSS. 
- [ResponsiveVoice](https://responsivevoice.org/)
