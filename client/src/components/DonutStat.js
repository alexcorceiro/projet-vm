import React from 'react';
import { VictoryPie , VictoryLegend} from 'victory';
import"./css/DonutStat.css"

const DonutStat = () => {
    const data = [
        { x: 'pas de commentaire', y: 40 },
        { x: 'avis positif', y: 20 },
        { x: 'avis negatif', y: 10 },
      ];

  const colorScale = ['#eb7a34', '#36A2EB', '#FFCE56', '#33A314'];

  const style = {
    labels: {
      fontSize: 15,
      fontWeight: 'bold',
      fill: '#FFFFFF', // couleur des labels
    },
  };

  const calculatePercentage = (datum, data) => {
    const total = data.reduce((acc, cur) => acc + cur.y, 0);
    const percentage = ((datum.y / total) * 100).toFixed(2);
    return `${percentage}%`;
  };

  return (
    <div className='donut'>
      <VictoryPie
        data={data}
        colorScale={colorScale}
        innerRadius={75}
        style={style}
        labelRadius={({ innerRadius }) => innerRadius + 20} // définit la distance entre les labels et le centre du graphique
        labels={({ datum }) => `${calculatePercentage(datum, data)}`}
      />
       <VictoryLegend
        x={0} y={0}
        orientation="horizontal"
        gutter={20}
        colorScale={colorScale}
        data={data.map(({x}) => ({name: x}))}
        style={{ labels: { fontSize: 18 } }}
      />
    </div>
  );
};

export default DonutStat;
