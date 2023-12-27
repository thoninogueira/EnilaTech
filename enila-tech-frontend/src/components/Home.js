
import React from 'react';

const Home = () => {
  return (
    <div>
      <h1>Bem-vindo ao EnilaTech!</h1>
      <p>
        EnilaTech é a sua plataforma de negociações online, projetada para oferecer uma experiência
        eficiente e segura. Desenvolvida com foco na simplicidade e desempenho, a EnilaTech permite
        que usuários realizem negociações de ativos financeiros, monitorando ativos ativos, histórico
        de transações e fornecendo um painel de controle intuitivo.
      </p>
      <p>
        Recursos Principais:
      </p>
      <ul>
        <li>Negociações Ativas: Acompanhe em tempo real suas negociações ativas, fornecendo informações detalhadas sobre ativos, quantidades e preços.</li>
        <li>Histórico de Transações: Mantenha um histórico completo de suas transações passadas, proporcionando uma visão abrangente das atividades de negociação.</li>
        <li>Painel de Controle: Personalize suas preferências e configurações por meio de um painel de controle fácil de usar.</li>
        <li>Interface Intuitiva: Uma interface de usuário moderna e intuitiva, otimizada para uma experiência de navegação fluida.</li>
      </ul>
      <p>
        Tecnologias Utilizadas:
      </p>
      <ul>
        <li>Backend: Node.js com Express para construção da API.</li>
        <li>Frontend: React para uma interface de usuário dinâmica e responsiva.</li>
        <li>Persistência de Dados: Banco de dados PostgreSQL para armazenamento seguro e eficiente de informações.</li>
        <li>Ferramentas Adicionais: Jest para testes, ESLint e Prettier para garantir qualidade de código.</li>
      </ul>
      <p>
        Objetivo do Projeto:
      </p>
      <p>
        O objetivo da EnilaTech é fornecer uma plataforma robusta e confiável para facilitar negociações financeiras,
        atendendo às necessidades tanto de investidores iniciantes quanto experientes. A segurança e a facilidade de uso
        são prioridades, garantindo que os usuários possam concentrar-se nas suas estratégias de negociação.
      </p>
    </div>
  );
};

export default Home;
