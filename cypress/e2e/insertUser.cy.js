import {
  generateFullName,
  generateEmail,
  generateAddress,
  generatePhoneNumber,
  generateJobTitle,
} from '../support/functions/falsoGenerator.tsx';

describe('Insert Via Api', () => {
  it('Deve adicionar 10 novos usuários com todos os dados', () => {
    for (let i = 0; i < 10; i++) {
      // Gerar data de nascimento no intervalo correto
      const dataNascimentoFormatada = gerarDataEntre1950e1990();

      // Obter data e hora atuais no formato DIA/MÊS/ANO - HORA:MINUTO:SEGUNDOS
      const dataCriacao = new Date();
      const dataCriacaoFormatada = `${dataCriacao.getDate().toString().padStart(2, '0')}/${(dataCriacao.getMonth() + 1).toString().padStart(2, '0')}/${dataCriacao.getFullYear()} - ${dataCriacao.getHours().toString().padStart(2, '0')}:${dataCriacao.getMinutes().toString().padStart(2, '0')}:${dataCriacao.getSeconds().toString().padStart(2, '0')}`;

      // Gerar os dados do usuário
      const novoUsuario = {
        nome: generateFullName(),
        email: generateEmail(),
        endereco: generateAddress(),
        telefone: generatePhoneNumber(),
        cargo: generateJobTitle(),
        dataNascimento: dataNascimentoFormatada,
        dataCriacao: dataCriacaoFormatada,
      };

      // Fazer a requisição para inserir o usuário no banco
      cy.request('POST', 'http://localhost:3000/usuarios', novoUsuario).then((response) => {
        expect(response.status).to.eq(200);
        cy.log('Novo usuário adicionado:', response.body);
      });
    }
  });
});

// Função para gerar data entre 1950 e 1990
function gerarDataEntre1950e1990() {
  const inicio = new Date(1950, 0, 1).getTime(); // 01/01/1950
  const fim = new Date(1990, 11, 31).getTime(); // 31/12/1990
  const dataAleatoria = new Date(inicio + Math.random() * (fim - inicio));

  // Formatar a data no estilo DIA/MÊS/ANO
  return `${dataAleatoria.getDate().toString().padStart(2, '0')}/${(dataAleatoria.getMonth() + 1).toString().padStart(2, '0')}/${dataAleatoria.getFullYear()}`;
}
