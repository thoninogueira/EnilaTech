// Função para realizar o cadastro
async function register() {
    try {
        const emailOrCpf = document.getElementById('emailOrCpf').value;
        const password = document.getElementById('password').value;

        // Validar se os campos estão preenchidos
        if (!emailOrCpf || !password) {
            alert('Preencha todos os campos.');
            return;
        }

        // Verificar se o valor é um e-mail ou CPF
        const isEmail = validateEmail(emailOrCpf);
        const isCpf = validateCpf(emailOrCpf);

        if (!isEmail && !isCpf) {
            alert('Digite um e-mail válido ou um CPF válido.');
            return;
        }

        // Chamar a API backend para cadastro
        const response = await fetch('URL_DA_SUA_API_CADASTRO', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ emailOrCpf, password }),
        });

        // Verificar a resposta da API
        if (response.ok) {
            const data = await response.json();
            // Lógica após o cadastro bem-sucedido, como redirecionamento
            alert('Cadastro bem-sucedido! Redirecionando...');
        } else {
            // Lógica para tratamento de erro
            const errorData = await response.json();
            alert(`Erro: ${errorData.message}`);
        }
    } catch (error) {
        console.error('Erro ao realizar o cadastro:', error);
        alert('Erro ao realizar o cadastro. Tente novamente mais tarde.');
    }
}

// Função para validar e-mail
function validateEmail(email) {
    // Regexp para validar e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Função para validar CPF
function validateCpf(cpf) {
    // Remover caracteres não numéricos do CPF
    const cleanedCpf = cpf.replace(/\D/g, '');

    // Verificar se o CPF tem 11 dígitos
    if (cleanedCpf.length !== 11) {
        return false;
    }

    // Verificar se todos os dígitos são iguais (CPF inválido)
    if (/^(\d)\1+$/.test(cleanedCpf)) {
        return false;
    }

    // Algoritmo de validação do CPF
    let sum = 0;
    let remainder;

    for (let i = 1; i <= 9; i++) {
        sum += parseInt(cleanedCpf[i - 1]) * (11 - i);
    }

    remainder = (sum * 10) % 11;

    if (remainder === 10 || remainder === 11) {
        remainder = 0;
    }

    if (remainder !== parseInt(cleanedCpf[9])) {
        return false;
    }

    sum = 0;
    for (let i = 1; i <= 10; i++) {
        sum += parseInt(cleanedCpf[i - 1]) * (12 - i);
    }

    remainder = (sum * 10) % 11;

    if (remainder === 10 || remainder === 11) {
        remainder = 0;
    }

    if (remainder !== parseInt(cleanedCpf[10])) {
        return false;
    }

    return true;
}


