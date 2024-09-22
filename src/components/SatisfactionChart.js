import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Link } from 'react-router-dom';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const SatisfactionChart = () => {
  const data = {
    labels: ['Liderança', 'Comunicação', 'Ambiente de Trabalho', 'Oportunidades de Crescimento', 'Remuneração'],
    datasets: [
      {
        label: 'Satisfação dos Funcionários',
        data: [75, 68, 82, 70, 65],
        backgroundColor: 'rgba(129, 199, 132, 0.8)',
        borderColor: 'rgba(129, 199, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#e0e0e0',
        },
      },
      title: {
        display: true,
        text: 'Satisfação dos Funcionários com a Gestão da Empresa',
        color: '#ffffff',
        font: {
          size: 18,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        title: {
          display: true,
          text: 'Porcentagem de Satisfação',
          color: '#e0e0e0',
        },
        ticks: {
          color: '#e0e0e0',
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
      },
      x: {
        ticks: {
          color: '#e0e0e0',
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
      },
    },
  };

  return (
    <div className="satisfaction-chart">
      <h1>Dashboard de Satisfação dos Funcionários</h1>
      <Bar data={data} options={options} />
      <Link to="/" className="back-button">Voltar para a Página Inicial</Link>
    </div>
  );
};

export default SatisfactionChart;
