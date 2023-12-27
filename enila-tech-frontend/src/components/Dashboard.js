import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <header>
        <h1>Bem-vindo ao Dashboard</h1>
        <button>Logout</button>
      </header>
      <main>
        {/* Conteúdo principal do dashboard */}
        <section className="widget">
          <h2>Seção 1</h2>
          <p>Conteúdo da Seção 1...</p>
        </section>
        <section className="widget">
          <h2>Seção 2</h2>
          <p>Conteúdo da Seção 2...</p>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
