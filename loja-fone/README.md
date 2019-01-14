# HTML5

É uma lingugagem de marcação que tem as seguintes responsabilidades:

- Conteúdo;
- Semântico (tags);
- Estrutura;


* `<h1>` - heading 1 - 6
Usamos ele quando queremos definir títulos

- `a` - Link (a - anchor)
Usamos ela para definir a navegação do usuário. Se você tem um texto que você quer que o usuário clique e ele vá para outro lugar você pode usar essa tag junto com o atributo `href`. Exemplo de um `a` que o usuário é direcionado para o site da collabcode.training:
```
<a href="http://collabcode.training">collabcode.training</a>
```

- `nav` - (Navegação)
Defina dentro dela quais serão opções navegáveis do site, a título de organização pois não impacta no resultado final:

```
<nav><a href=#>Arquivo</a></nav>
```

- `title` - (Título das abas do navegador)
Para ficar mais fácil de identificar qual o conteúdo de certas páginas coloca-se dentro da tag `title` um nome que represente o conteúdo

```
<title>Página de Login | site do Luxu</title>
```


# CSS

É uma linguagem de estilo, isso quer dizer que ela tem as seguintes responsabilidades:

-  Visual

- `inherit` - (Propriedade do CSS que herda do pai os estilos do mesmo, geralmente na tag <a> onde é utilizado pois geralmente a propriedade <link> qdo é cor utiliza o padrão do navegador, daí herdando vem a cor do pai)

- `float` - Novo contexto e nunca esconde o conteúdo e o width/height são definidos pelo conteúdo

- `overflow` - Recalcula o contexto. Quando usamos dentro do pai dois filhos com float o pai some pois o float cria um novo contexto, mas o pai não sabe disso e acaba sumindo, para ajustar isso usamos `overflow` que recalcula para o pai e mostra o mesmo.

- `margin` - Espaçamento do elemento em relação a outros elementos. (Respiro externo)

- `padding` - Espaçamento dentro do próprio elemento. (Respiro interno)

Exemplo de uso para qdo temos 2 valores iguais. top/bottom right/left (10px 20px)
Exemplo de uso para qdo temos 1 valor igual. top right/left bottom (10px 20px 30px)

- `clear` - Quando queremos "limpar" o `float` usamos ele, daí o elemento a ser limpo caí abaixo do elemento não limpo, no exemplo criamos 2 <nav>s e elas ficaram um do lado da outra, como queríamos a segunda embaixo aplicamos `clear:right`, daí o que está a direita caiu.

- `display` - inline: deixa os elementos na mesma linha e o width e height não funcionam.

- `display` - block: não deixa na mesma linha e podemos definir o width e height

- `line-height` - Alinha verticalmente qdo tem uma linha de texto dentro da caixa

- `position: absolute` - Cria um novo contexto, movendo o elemento na tela de forma absoluta e manda para trás ou some os outros elementos da página e quem define a largura e altura é o conteúdo. Por isso junto com o `position: absolute` utilizamos mais propriedades, sendo: top/bottom(mexe com o eixoX) e o left/right (mexe com o eixoY)

- `vertical-align` - Alinha dois ou mais elementos que tenham o `display: inline-block`. Pode ser alinhado pelo: top, baseline

- `box-sizing` - do tipo `border-box` Soma dentro do elemento a width e height com o elemento de dentro.

- toda regra do css que começa com '-' é uma variação de alguma outra classe, ou seja, complementa outra regra.

- `Description list <dl>` - Lista a descriçao dos produtos.

- `Description title <dt>` - Título da descrição.

- `Define Description <dd>` - Definição da descrição.

- `transform` - Posicionamento da tela de algum elemento, qdo negativo vai para esquerda e qdo não vai para direita.

- `transition` - Acontece para 'animar' um elemento que tenha uma alteração de inicio e fim. ex.: `transform: translateX(0)` até `transform: translateX(-88%)`.
Sintaxe: transition: transform 200ms linear
