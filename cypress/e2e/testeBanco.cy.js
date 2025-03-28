var url = 'http://localhost:3000/usuarios'
describe('Testando o banco de dados via API', () => {
  
  it('Deve buscar todos os usuários', () => {
    cy.request('http://localhost:3000/usuarios').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.data).to.have.length.greaterThan(0);
      cy.log(JSON.stringify(response.body.data));
    });
  });

  it('Deve adicionar um novo usuário', () => {
    const novoUsuario = {
      nome: 'Teste',
      email: 'carlos32322@email.com',
    };

    cy.request('POST', url, novoUsuario).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('id');
      expect(response.body.nome).to.eq(novoUsuario.nome);
      expect(response.body.email).to.eq(novoUsuario.email);

      cy.log('Novo usuário adicionado:', response.body);
    });
  });
});
