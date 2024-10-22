// testando todos os cenáriosque eu defini no roteiro de teste
const login = require('./login');

test('Login com e-mail e senha corretos deve retornar sucesso', () => {
    const result = login('admin@example.com', '12345');
    expect(result).toBe('Login bem-sucedido!');
});

test('Login com e-mail correto e senha incorreta deve retornar erro', () => {
    const result = login('admin@example.com', 'wrongpassword');
    expect(result).toBe('Credenciais inválidas!');
});

test('Login com e-mail inexistente deve retornar erro', () => {
    const result = login('nonexistent@example.com', '12345');
    expect(result).toBe('Credenciais inválidas!');
});

test('Login com campos vazios deve retornar erro', () => {
    const result = login('', '');
    expect(result).toBe('Credenciais inválidas!');
});

test('Login com e-mail inválido e senha curta deve retornar erro', () => {
    const result = login('invalidemail', 'abc');
    expect(result).toBe('Credenciais inválidas!');
});
test('Login com e-mail correto e senha curta deve retornar erro', () => {
    const result = login('admin@example.com', 'abc');
    expect(result).toBe('Credenciais inválidas!');
});

test('Login com e-mail correto e senha vazia deve retornar erro', () => {
    const result = login('admin@example.com', '');
    expect(result).toBe('Credenciais inválidas!');
});
