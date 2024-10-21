// Usuários simulados (mockados)
//Dois usuários com e-mails e senhas que simulam um banco de dados
const mockUsers = [
    { email: 'admin@example.com', password: '12345' },
    { email: 'usuario@example.com', password: 'password' }
];

// Função de login que verifica se o e-mail e a senha combinam com algum usuário do mock e retorna uma mensagem de sucesso ou erro
function login(email, password) {
    // Busca o usuário no mock
    const user = mockUsers.find(user => user.email === email && user.password === password);

    // Retorna resultado baseado na busca
    return user ? 'Login bem-sucedido!' : 'Credenciais inválidas!';
}

module.exports = login;
