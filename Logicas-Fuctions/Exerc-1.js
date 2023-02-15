/*#1 Temperatura em Kelvin

Nas profundezas de seu laboratório de meteorologia em uma montanha, o cientista louco Kelvin estuda sobre a previsão do tempo.

Recentemente, Kelvin começou a publicar suas previsões do tempo em seu site. No entanto, há um problema: 
todas as suas previsões estão no formato de temperatura Kelvin.

Com nosso conhecimento de JavaScript, vamos converter Kelvin para Celsius e depois para Fahrenheit.

Exemplo:
283 K se converte em 10 °C, que se converte em 50 °F
[14:57]
Checklist desse exercício

[ok] - A previsão hoje é de 293 Kelvin. Para começar, crie uma variável chamada kelvin e defina-a como 293. O valor salvo em kelvin permanecerá constante. Escolha o tipo de variável com isso em mente.
[ok] - Escreva um comentário acima que explique esta linha de código
[ok] - Celsius é semelhante a Kelvin - a única diferença é que Celsius é 273 graus menos que Kelvin.
 Vamos converter Kelvin para Celsius subtraindo 273 da variável kelvin.
  Armazene o resultado em outra variável, chamada celsius.
[ok] - Use essa equação para calcular Fahrenheit, depois guarde o resultado em uma variável chamada fahrenheit.
 Fahrenheit = Celsius * (9/5) + 32

Na próxima etapa, arredondaremos o número salvo para fahrenheit. Escolha o tipo de variável que permite alterar seu valor.
[ok] - Quando você converte de Celsius para Fahrenheit, geralmente obtém um número decimal.
 Use o método Math.floor(number) para arredondar para baixo a temperatura Fahrenheit.
  Salve o resultado na variável fahrenheit.
[ok] - Use console.log para registrar a temperatura em fahrenheit no console da seguinte forma:
VALOR-DA-TEMPERATURA graus em Fahrenheit.*/

const kelvin = 293;
//constante está guardando o resultado de kelvin.
let c = 273;
let contCelsius = kelvin - c;
let celsius = contCelsius;
let fahrenheit = celsius * (9 / 5) + 32;
let fahrenheitt = 68;
let fahrenheitNumeroInteiro = Math.floor(fahrenheitt);
console.log(`A temperatura é ${fahrenheitNumeroInteiro} graus em Fahrenheit`);



