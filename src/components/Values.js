import React from 'react';
import { FaLightbulb, FaHandshake, FaUsers, FaLeaf } from 'react-icons/fa';
import ValueItem from './ValueItem'; // Novo componente

const Values = () => (
  <section id="values" className="satisfaction">
    <div className="container">
      <h2>Nossos Valores</h2>
      <div className="values-grid">
        <ValueItem icon={<FaLightbulb />} title="Inovação" items={['Criatividade e novas soluções', 'Agregação de valor aos clientes']} />
        <ValueItem icon={<FaHandshake />} title="Transparência" items={['Comunicação aberta e honesta', 'Relacionamento com colaboradores e clientes']} />
        <ValueItem icon={<FaUsers />} title="Colaboração" items={['Importância do trabalho em equipe', 'Desenvolvimento de soluções eficazes']} />
        <ValueItem icon={<FaLeaf />} title="Sustentabilidade" items={['Práticas benéficas para clientes', 'Respeito ao meio ambiente e sociedade']} />
      </div>
    </div>
  </section>
);

export default Values;
