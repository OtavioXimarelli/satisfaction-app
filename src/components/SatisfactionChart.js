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
        backgroundColor: 'rgba(33, 150, 243, 0.8)', // Mudado para um tom de azul
        borderColor: 'rgba(33, 150, 243, 1)', // Mudado para um tom de azul mais escuro
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    animations: {
      tension: {
        duration: 1000,
        easing: 'linear',
        from: 1,
        to: 0,
        loop: true,
      },
    },
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#ffffff', // Mudado para branco para melhor contraste
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
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            return `${tooltipItem.dataset.label}: ${tooltipItem.raw}%`; // Exibe a porcentagem no tooltip
          },
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
          color: '#ffffff', // Mudado para branco
        },
        ticks: {
          color: '#ffffff', // Mudado para branco
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.2)', // Aumentado o contraste
        },
      },
      x: {
        ticks: {
          color: '#ffffff', // Mudado para branco
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.2)', // Aumentado o contraste
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
