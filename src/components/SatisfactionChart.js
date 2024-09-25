import React, { useState } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, LineElement, PointElement, ArcElement } from 'chart.js';
import { Link } from 'react-router-dom';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, LineElement, PointElement, ArcElement);

const SatisfactionChart = () => {
  const [chartType, setChartType] = useState('bar'); // Estado para o tipo de gráfico

  const colors = ['#4a90e2', '#e94e77', '#f6b93b', '#4caf50', '#ff9800']; // Esquema de cores

  const data = {
    labels: ['Liderança', 'Comunicação', 'Ambiente de Trabalho', 'Oportunidades de Crescimento', 'Remuneração'],
    datasets: [
      {
        label: 'Satisfação dos Funcionários',
        data: [75, 68, 82, 70, 65],
        backgroundColor: chartType === 'pie' ? colors : colors.map(color => color + '80'), // Cores para gráfico de barras e linhas
        borderColor: chartType === 'pie' ? 'transparent' : colors,
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
          color: '#ffffff',
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
            return `${tooltipItem.dataset.label}: ${tooltipItem.raw}%`;
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
          color: '#ffffff',
        },
        ticks: {
          color: '#ffffff',
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.2)',
        },
      },
      x: {
        ticks: {
          color: '#ffffff',
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.2)',
        },
      },
    },
  };

  const renderChart = () => {
    switch (chartType) {
      case 'bar':
        return <Bar data={data} options={options} />;
      case 'line':
        return <Line data={data} options={options} />;
      case 'pie':
        return (
          <div style={{ width: '100%', maxWidth: '400px', margin: '0 auto' }}> {/* Ajuste a largura máxima */}
            <Pie data={data} options={options} />
          </div>
        );
      default:
        return <Bar data={data} options={options} />;
    }
  };

  return (
    <div className="satisfaction-chart">
      <h1>Dashboard de Satisfação dos Funcionários</h1>
      <div>
        <label htmlFor="chartType">Escolha o tipo de gráfico: </label>
        <select id="chartType" value={chartType} onChange={(e) => setChartType(e.target.value)}>
          <option value="bar">Gráfico de Barras</option>
          <option value="line">Gráfico de Linhas</option>
          <option value="pie">Gráfico de Pizza</option>
        </select>
      </div>
      {renderChart()}
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Link to="/" className="button">Voltar para a Página Inicial</Link> {/* Updated class */}
      </div>
    </div>
  );
};

export default SatisfactionChart;
