// Definindo a classe Heroi
class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque;
  
      if (this.tipo === "mago") {
        ataque = "usou magia";
      } else if (this.tipo === "guerreiro") {
        ataque = "usou espada";
      } else if (this.tipo === "monge") {
        ataque = "usou artes marciais";
      } else if (this.tipo === "ninja") {
        ataque = "usou shuriken";
      } else {
        ataque = "usou um ataque desconhecido";
      }
  
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
  
    contarHistoria() {
      console.log(`📜 História de ${this.nome}:\n`);
      console.log(`${this.nome} cresceu nas sombras da Vila Oculta da Lua, uma terra cercada por montanhas e mistérios.`);
      console.log(`Desde pequeno, foi treinado por mestres silenciosos na arte do ninjutsu, aprendendo a se mover como o vento e atacar como um raio.`);
      console.log(`Com apenas ${this.idade} anos, tornou-se o mais jovem a conquistar o título de Ninja Sombrio.`);
      console.log(`Agora, ${this.nome} viaja pelo mundo em busca de justiça, enfrentando tiranos e protegendo os inocentes, com suas shurikens afiadas e coração puro.`);
    }
  }
  
  // Criando o personagem ninja
  const ninjaLendario = new Heroi("Kazuo", 21, "ninja");
  
  // Contando a história do ninja e executando seu ataque
  ninjaLendario.contarHistoria();
  ninjaLendario.atacar();
  