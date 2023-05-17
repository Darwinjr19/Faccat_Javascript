
function Exercicio14() {
    alert("Digite um numero para validar se e maior ou menor");
    let numero = prompt("Digite um numero:")

    if (numero > 10) {
        alert("E MAIOR QUE 10");
    } else {
        alert("E MENOR QUE 10");
    }
}

function Exercicio15() {
    alert("Digite um numero se negativo ou positivo");
    let numero = prompt("Digite um numero:");
    if (numero > 0) {
        alert(numero + " é Positivo");
    } else {
        alert(numero + " é Negativo");
    }
}

function Exercicio16() {
    alert("Adicionar a quantidade de maças vendidas");
    let maca = parseFloat(prompt("Quantas maças foi comprada:"));

    if (maca < 6) {
        soma = maca * 1.30;
        alert(" Valor pago: " + soma.toFixed(2));

    } else {
        soma = maca * 1;
        alert("O valor pago: " + soma.toFixed(2));
    }
}

function Exercicio17() {
    alert("Leer a nota de um aluno e saber a media aritimetica");

    let nota1 = parseFloat(prompt("Digite a primeira a nota:"));
    let nota2 = parseFloat(prompt("Digie a segunda nota:"));
    let media = (nota1 + nota2) / 2;

    if (media >= 6) {
        alert("A sua nota é: " + media + " APROVADO!!!");
    } else {
        alert("A sua nota é: " + media + " REPROVADO");
    }

}

function Exercicio18() {
    alert(" Ler  o  ano  atual  e  o  ano  de  nascimento  de  uma  pessoa");

    let anoAtual = parseInt(prompt("Digite o ano Atual:"));
    let anoNascimento = parseInt(prompt("Ano de Nascimento:"));

    resultado = anoAtual - anoNascimento;

    if (resultado < 18) {
        alert("Você tem " + resultado + " é não podera votar");
    } else {
        alert("Você tem " + resultado + " é podera votar");
    }
}

function Exercicio19() {
    alert(" Ler dois valores e escrever o maior deles");

    let numero1 = parseFloat(prompt("Digite um numero:"));
    let numero2 = parseFloat(prompt("Digite outro numero:"));

    if (numero1 == numero2) {
        alert("Valores iguais");
    }
    else if (numero1 > numero2) {
        alert("O número maior é: " + numero1);
    }
    else {
        alert("O número menor é: " + numero2);
    }

}

function Exercicio20() {
    alert("Leer dois valores e colocar em ordem crescente:");

    let numero1 = parseInt(prompt("Digite um número:"));
    let numero2 = parseInt(prompt("Digite outro número:"));

    if (numero1 > numero2) {

        maior = numero1;
        menor = numero2;

        alert("Ordem crescente é:" + menor + " " + maior);
    } else if (numero2 > numero1) {
        maior = numero2;
        menor = numero1;

        alert("Ordem crescente é: " + menor + " " + maior)
    }

}

function Exercicio21() {
    alert("Ler a hora de início e a hora de fim de um jogo de Xadrez ");

    let horaInicial = parseInt(prompt("Digite a hora que iniciou:"));
    let HoraTerminada = parseInt(prompt("Digite a hora que terminou:"));
    let hora = 24;

    if (horaInicial > HoraTerminada) {

        duracao = hora - horaInicial + HoraTerminada;
        alert("A duração foi de: " + duracao);
    } else {
        duracao = HoraTerminada - horaInicial;
        alert("A duração foi de: " + duracao);
    }
}

function Exercicio22() {
    alert("A jornada de trabalho semanal de um funcionário é de 40 horas. O funcionário que trabalhar mais de  40  horas  receberá  hora  extra,  cujo  cálculo  é  o  valor  da  hora  regular  com  um  acréscimo  de  50%. Escreva um algoritmo que leia o número de horas trabalhadas em um mês, o salário por hora e escreva o salário total do funcionário, que deverá ser acrescido das horas extras, caso tenham sido trabalhadas");

    let salarioHora = parseFloat(prompt("Digite seu salario por hora:"));
    let horasTrabalhadas = parseFloat(prompt("Digite as horas trabalhadas no mês:"));

    if (horasTrabalhadas <= 160) {
        salarioTotal = salarioHora * horasTrabalhadas;
        alert("O salario total do funcionario no mês é de:" + salarioTotal);
    }
    else {
        horasExtras = horasTrabalhadas - 160;
        salarioHoraExtra1 = (horasExtras * salarioHora);
        salarioHoraExtra2 = (salarioHoraExtra1 * 50 / 100);
        salarioExtraTotal = (salarioHoraExtra1 + salarioHoraExtra2);
        salarioTotal = (salarioHora * 160 + salarioExtraTotal);
        alert("O salario final do funcionario é de: " + salarioTotal);
    }
}

function Exercicio23() {
    alert("Tendo como dados de entrada o nome, a altura e o sexo (M ou F) de uma pessoa, calcule e mostre seu peso ideal, utilizando as seguintes fórmulas: ");

    let nome = prompt("Digit seu Nome:");
    let altura = parseFloat(prompt("Digite sua altura:"));
    let sexo = prompt("Digite sua sexualidade M ou F");

    if (sexo == 'M') {
        peso = (72.7 * altura) - 58;
        alert("Seu peso ideal " + nome + " é de: " + peso.toFixed(2));
    }
    else {
        peso = (62.1 * altura) - 44.7;
        alert("Seu peso ideal " + nome + " é de: " + peso.toFixed(2));
    }
}

function Exercicio24() {
    alert("Ler o salário fixo e o valor das vendas efetuadas pelo vendedor de uma empresa. Sabendo-se que ele  recebe  uma  comissão  de  3%  sobre  o  total  das  vendas  até  R$  1.500,00  mais  5%  sobre  o  que ultrapassar este valor, calcular e escrever o seu salário total. ");
    let salarioFixo = parseFloat(prompt("Salario Fixo: "));
    let valorVendas = parseFloat(prompt("Valor das vendas: "));

    if (valorVendas <= 1500) {
        comissao = valorVendas * 0.03;
    }
    else {
        comissao = (1500 * 0.03) + ((valorVendas - 1500) * 0.05)
    }
    let salariototal = salarioFixo + comissao + valorVendas;
    alert("Salario Total: " + salariototal);

}

function Exercicio25() {
    alert(" Faça um  algoritmo para ler: número da  conta do cliente, saldo, débito e  crédito. Após,  calcular e escrever o saldo atual (saldo atual = saldo - débito + crédito). Também testar se saldo atual for maior ou igual a zero escrever a mensagem 'Saldo Positivo', senão escrever a mensagem 'Saldo Negativo'. ");
    let numeraDaConta = parseInt(prompt("Leer o numero da conta:"));
    let saldo = parseFloat(prompt("Digite seu saldo: "));
    let debito = parseFloat(prompt("Informe o débito: "));
    credito = parseFloat(prompt("Informe o crédito: "));

    saldoAtual = (saldo - debito + credito);

    if (saldoAtual >= 0) {
        alert("Seu saldo é de: " + saldoAtual + " Saldo Positivo");
    }
    else {

        alert("Seu saldo é de: " + saldoAtual + "Saldo Negativo");
    }
}

function Exercicio26() {
    alert("Faça  um  algoritmo  para  ler:  quantidade  atual  em  estoque,  quantidade  máxima  em  estoque  e quantidade  mínima  em  estoque  de  um  produto.  Calcular  e  escrever  a  quantidade  média  ((quantidade média = quantidade máxima + quantidade mínima)/2). Se a quantidade em estoque for maior ou igual a  quantidade  média  escrever  a  mensagem  'Não  efetuar  compra',  senão  escrever  a  mensagem  'Efetuar compra'. ");
    let quantidadeAtualEstoque = parseInt(prompt("Quantidade atual no estoque: "));
    let quantidadeMaxima = parseInt(prompt("Quantidade Maxima no estoque: "));
    let quantidadeMinima = parseInt(prompt("Quantidade minima no estoque"));

    quantidadeMedia = (quantidadeMaxima + quantidadeMinima) / 2;

    if (quantidadeAtualEstoque >= quantidadeMedia) {
        alert("Não efetuar a compra...." + quantidadeMedia);
    }
    else {
        alert("Efetuar a compra." + quantidadeMedia);
    }
}

function Exercicio27() {
    alert("Ler um valor e escrever se é positivo, negativo ou zero.");
    let valor = parseInt(prompt("Digite um numero: "));

    if (valor > 0) {
        alert("POSITIVO");
    }
    else if (valor == 0) {
        alert("VALOR E 0");
    }
    else {
        alert("VALOR NEGATIVO");
    }
}

function Exercicio28() {
    alert("Ler 3 valores (considere que não serão informados valores iguais) e escrever o maior deles. ");
    let valor1 = parseInt(prompt("Digite um valor: "));
    let valor2 = parseInt(prompt("Digite outro valor: "));
    let valor3 = parseInt(prompt("Digite outro valor: "));

    if (valor1 > valor2 && valor1 > valor3) {
        alert(valor1 + " E o maior");
    }
    else if (valor2 > valor1 && valor2 > valor3) {
        alert(valor2 + " E o maior");
    }
    else {
        alert(valor3 + " E o maior");
    }
}


function Exercicio29() {
    alert(" Ler 3 valores considere  que  não  serão  informados  valores  iguais) e  escrever  a  soma  dos  2 maiores. ");
    let valor1 = parseInt(prompt("Digite o primeiro valor:"));
    let valor2 = parseFloat(prompt("Digite o segundo valor: "));
    let valor3 = parseFloat(prompt("Digite o terceiro valor: "));
    let soma;

    if (valor1 > valor2 && valor1>valor3) {
        // o valor 1 e o maior
        
        if (valor2> valor3) {
            soma = valor1 + valor2;    

        }else{
            soma = valor1 + valor3;
        }
    }
    else if(valor2 > valor1 && valor2 > valor3){
        // o valor2 eo maior
        if (valor1 > valor3) {
            soma = valor2 + valor1;
        }else{
            soma = valor2+valor3;
        }
    }
    else
    {
      //O valor3 e o maior
        if (valor2>valor1) {
            soma = valor3 + valor2;
        }
        else{
            soma = valor3 + valor1;
        }
    }
    alert("A soma dos dois maiores valores é: " + soma);

}
function Exercicio30() {

    alert("Ler 3 valores (considere que não serão informados valores iguais) e escrevê-los em ordem crescente.");


    var valor1 = parseFloat(prompt("Digite o primeiro valor:"));
    var valor2 = parseFloat(prompt("Digite o segundo valor:"));
    var valor3 = parseFloat(prompt("Digite o terceiro valor:"));
    var menor,maior,meio;

    if (valor1 > valor2 && valor1 > valor3) {
        maior = valor1;        
        if (valor2 > valor3) {
            meio = valor2;
            menor = valor3;
        }
        else {
            meio = valor3;
            menor = valor2;
        }
    } else if (valor2 > valor1 && valor2 > valor3) {
        maior = valor2;
        if (valor1 > valor3) {
            meio = valor1;
            menor = valor3;
        } else {
            meio = valor3;
            menor = valor1;
        }

    }else{
        maior = valor3
        if (valor1> valor2) {
            meio = valor1;
            menor = valor2
        }else{
            meio = valor2;
            menor = valor1;
        }
    }
    alert("Ordem crescente seria: " + menor + " , "+ meio +" , "+ maior);
}


function Exercicio31() {
    alert("Ler 3 valores (A, B e C) representando as medidas dos lados de um triângulo e escrever se formam ou não um triângulo. OBS: para formar um triângulo, o valor de cada lado deve ser menor que a soma dos outros 2 lados. ");
    let a = parseInt(prompt("Digite o valor A:"));
    let b = parseFloat(prompt("Digite o valor B"));
    let c = parseInt(prompt("Digite o valo C"));

    if (a < b + c && b < a + c && c < a + b) {
        alert("Os valores formam um triângulo.");
    }
    else{
        alert("Os valores não formam um triângulo.");
    }
}

function Exercicio32() {
    let time1 = prompt("Digite o nome do time1: ");
    let gol1 = parseInt(prompt("Digie a quantidade de gol no time1: "));
    let time2 = prompt("Digie o nome do outro time: ");
    let gol2 = parseInt(prompt("Digie a quantidade de gol no time2: "));

    if (gol1 > gol2) {
        alert(time1 + " VENCEU!!!");
    }
    else{
        alert(time2 + " VENCEU!!!");
    }

}

function Exercicio33() {
    let numero1 = parseInt(prompt("Digite o número: "));
    let numero2 = parseInt(prompt("Digite o segundo número:"));
    
    if (numero1 == numero2) {
        alert(" Números iguais");
    }
    else if (numero1> numero2) {
        alert(numero1 + " É o maior ");
    }
    else{
        alert(numero2 + " É o maior");
    }
}
function Exercicio35() {
    alert("Escreva um algoritmo que leia o número de litros vendidos e o tipo de combustível (codificado da  seguinte forma: A-álcool, G-gasolina), calcule e imprima o valor a ser pago pelo cliente sabendo-se que o preço do litro da gasolina é R$ 3,30 e o preço do litro do álcool é R$ 2,90.");
    let litros = parseFloat(prompt("Digite a quantidade em litros: "));
    let combustivel = prompt("Digite o tipo de Combusivel 'G'-GASOLINA é 'A'-ALCOOL:");
    let preco = 0;

    if (combustivel == 'A') {
        //ALCOOL
        preco = litros * 2.90
        if (combustivel<=20) {
            preco = 2.90 * litros * 3/100; 
        }
        else{
            preco = 2.90 * litros * 5/100;
        }
    }
    else if (combustivel == 'G') {
        //GASOLINA
        preco = litros * 3.30;
        if (combustivel<=20) {
            preco = 2.90 * litros * 4/100; 
        }
        else{
            preco = 3.30 * litros * 6/100;
        }
    }
    alert("O preço a pagar é: " + preco.toFixed(2));
}


function Exercicio38() {
    alert(`Faça um algoritmo para ler um número que é um código de usuário. Caso este código seja
    diferente de um código armazenado internamente no algoritmo (igual a 1234) deve ser apresentada a
    mensagem 'Usuário inválido!'. Caso o Código seja correto, deve ser lido outro valor que é a senha. Se
    esta senha estiver incorreta (a certa é 9999) deve ser mostrada a mensagem ‘senha incorreta’. Caso a
    senha esteja correta, deve ser mostrada a mensagem 'Acesso permitido'.`)

    let CodigoUsuario = parseInt(prompt("Digite o codigo de usuario: "));

    if (CodigoUsuario !== 1234) {
        alert("Usuario inválido");
    }
    else{
        let senha = parseInt(prompt("Digite a senha: "));
        if (senha !== 9999) {
            alert("senha incorreta");
        }
        else{
            alert("Acesso permitido");
        }
    }

   
}

function Exercicio40() {
    alert(`Faça um algoritmo para ler: a descrição do produto (nome), a quantidade adquirida e o preço
    unitário. Calcular e escrever o total (total = quantidade adquirida * preço unitário), o desconto e o total
    a pagar (total a pagar = total - desconto)`);

    let descriçãoProduto = prompt("Nome do Produto: ");
    let quantidade = parseInt(prompt("Quantidade do produto: "));
    let preco = parseFloat(prompt("Preço Unitário: "));
    let desconto;
    let total = quantidade * preco

    if (quantidade <=5) {
        
        desconto = total * 0.02;
        //alert("O desconto sera é: " + total); 
    }
    else if(quantidade > 5 && quantidade < 10 ){
        desconto = total * 0.03
        //alert("O desconto sera é: " + total);
    }
    else{
        desconto = total * 0.1;
    }
    let totalPagar = total - desconto;

    alert("Descrição do Produto: " + descriçãoProduto);
    alert("Preço Unitario: " + preco.toFixed(2));
    alert("Total: " + total.toFixed(2));
    alert("Desconto: " + desconto.toFixed(2));
    alert("Total a Pagar:" + totalPagar.toFixed(2));
}

function Exercicio41() {
    alert(`Faça um algoritmo para ler as 3 notas obtidas por um aluno nas 3 verificações e a média dos
    exercícios que fazem parte da avaliação. Calcular a média de aproveitamento, usando a fórmula abaixo
    e escrever o conceito do aluno de acordo com a tabela de conceitos mais abaixo:`);
    let nota1 = parseFloat(prompt("Digite a nota 1: "));
    let nota2 = parseFloat(prompt("Digite a nota 2: "));
    let nota3 = parseFloat(prompt("Digite a nota 3: "));
    let mediaDosExercicio = parseInt(prompt("Digite a media dos Exercicios: "));

    let mediaAproveitamento = (nota1 + nota2 * 2 + nota3 * 3 + mediaDosExercicio) /7;

    if (mediaAproveitamento >= 9) {
        alert("Nota (A) ")
    }
    else if(mediaAproveitamento >= 7.5 && mediaAproveitamento <9){
        alert("Nota (B) ");
    }
    else if (mediaAproveitamento >= 6 && mediaAproveitamento <7.5) {
        alert("Nota (C)");
    }
    else{
        alert("Nota (D) ");
    }
}

function Exercicio42() {
    let numeroEmpregados = parseInt(prompt("Digite o número(código) do empregado: "));
    let anoNascimento = parseFloat(prompt("Digite o Ano do seu nascimento: "));
    let anoIngresso = parseFloat(prompt("Ano do seu Ingresso na empresa: "));
    let idade = anoIngresso - anoNascimento;
    let tempoTrabalho = anoNascimento - anoIngresso

    if (idade >=65 || tempoTrabalho >=30 || (idade>=60 && tempoTrabalho>=25 )) {
        alert("Idade: " + idade);
        alert("Tempo trabalho: " + tempoTrabalho);
        alert("Requer aposentatoria");
    }
    else{
        alert("Idade: " + idade);
        alert("Tempo trabalho: " + tempoTrabalho);
        alert("Não requer aposentatoria");
    }
}



















