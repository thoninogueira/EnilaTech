
// Função para realizar o login
async function login() {
    try {
        const email = document.getElementById('emailCpf').value;
        const password = document.getElementById('password').value;

        // Validar se os campos estão preenchidos
        if (!email || !password) {
            alert('Preencha todos os campos.');
            return;
        }

        // Chamar a API backend para autenticação
        const response = await fetch('URL_DA_SUA_API_LOGIN', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        // Verificar a resposta da API
        if (response.ok) {
            const data = await response.json();
            // Lógica após o login bem-sucedido, como redirecionamento
            alert('Login bem-sucedido! Redirecionando...');
        } else {
            // Lógica para tratamento de erro
            const errorData = await response.json();
            alert(`Erro: ${errorData.message}`);
        }
    } catch (error) {
        console.error('Erro ao realizar o login:', error);
        alert('Erro ao realizar o login. Tente novamente mais tarde.');
    }
}


// Restante do seu script JavaScript (funções de exibição/ocultação de formulários)
// ...

// Função para ocultar todos os formulários
function hideAllForms() {
    document.getElementById('login').classList.add('hidden');
    document.getElementById('registration').classList.add('hidden');
    document.getElementById('forgot-password-form').classList.add('hidden');
}

// Função para exibir o formulário de cadastro e ocultar os outros formulários
function showRegistrationForm() {
    hideAllForms();
    document.getElementById('registration').classList.remove('hidden');
}

document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault();
    // Lógica para processar o formulário de cadastro aqui
    console.log('Formulário enviado!');
});

// Função para exibir o formulário de login e ocultar os outros formulários
function showLoginForm() {
    hideAllForms();
    document.getElementById('login').classList.remove('hidden');
}

// Função para exibir o formulário de recuperação de senha e ocultar os outros formulários
function showForgotPasswordForm() {
    hideAllForms();
    document.getElementById('forgot-password-form').classList.remove('hidden');
}

// Função para enviar e-mail de recuperação de senha
async function sendPasswordResetEmail() {
    try {
        const cpfCnpj = document.getElementById('cpfCnpj').value;
        const fullName = document.getElementById('fullName').value;
        const email = document.getElementById('forgot-email').value;

        // Validar se os campos estão preenchidos
        if (!cpfCnpj || !fullName || !email) {
            alert('Preencha todos os campos.');
            return;
        }

        // Outras validações específicas, se necessário...

        // Chamar a API backend para enviar e-mail de recuperação
        const response = await fetch('URL_DA_SUA_API_RECUPERACAO_SENHA', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ cpfCnpj, fullName, email }),
        });

        // Verificar a resposta da API
        if (response.ok) {
            // Lógica após o envio bem-sucedido, como exibir uma mensagem ao usuário
            alert('Um e-mail de recuperação foi enviado.');
        } else {
            // Lógica para tratamento de erro
            const errorData = await response.json();
            alert(`Erro: ${errorData.message}`);
        }
    } catch (error) {
        console.error('Erro ao enviar e-mail de recuperação:', error);
        alert('Erro ao enviar e-mail de recuperação. Tente novamente mais tarde.');
    }
}
