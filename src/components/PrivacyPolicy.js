import React from 'react';
import '../styles/privacyPolicy.css'; // Importando o CSS para estilização

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container">
      <h1>Política de Privacidade</h1>
      <div className="card">
        <h2>Informações que coletamos</h2>
        <p>
          Coletamos informações pessoais identificáveis, como nome, e-mail e telefone, quando você se registra em nosso site ou preenche um formulário.
        </p>
      </div>
      <div className="card">
        <h2>Uso das informações</h2>
        <p>
          As informações que coletamos podem ser usadas para:
        </p>
        <ul>
          <li>Melhorar o atendimento ao cliente</li>
          <li>Personalizar a experiência do usuário</li>
          <li>Enviar e-mails periódicos sobre nossos serviços</li>
        </ul>
      </div>
      <div className="card">
        <h2>Segurança das informações</h2>
        <p>
          Implementamos uma variedade de medidas de segurança para manter a segurança de suas informações pessoais.
        </p>
      </div>
      <div className="card">
        <h2>Cookies</h2>
        <p>
          Utilizamos cookies para melhorar a experiência do usuário. Você pode optar por desativar os cookies nas configurações do seu navegador.
        </p>
      </div>
      <div className="card">
        <h2>Alterações na Política de Privacidade</h2>
        <p>
          Reservamo-nos o direito de atualizar esta política de privacidade a qualquer momento. Recomendamos que você revise esta página periodicamente.
        </p>
      </div>
      <div className="card">
        <h2>Contato</h2>
        <p>
          Se você tiver alguma dúvida sobre esta política de privacidade, entre em contato conosco através do e-mail: gdesempenho@hotmail.com.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
