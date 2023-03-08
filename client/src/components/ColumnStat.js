import "./css/cloumnstat.css";
import { ResponsiveContainer, XAxis, YAxis, CartesianGrid, Legend, Tooltip, BarChart, Bar} from "recharts";
const pdata = [
  {
    name: "jeux video",
    ventes: 13,
    stock: 10
  },
  {
    name: "manga",
    ventes: 15,
    stock: 12
  },
  {
    name: "cosplay",
    ventes: 5,
    stock: 10
  },
  {
    name: "figurire",
    ventes: 10,
    stock: 5
  }
];
function ColumnStat() {
  return (
    <div className="columnstat">
      <div className="bar">
        <ResponsiveContainer width="100%" aspect={3}>
          <BarChart
            width={500}
            height={300}
            data={pdata}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: -28
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar  dataKey="ventes" fill="#4b9e21" />
            <Bar  dataKey="stock" fill="#1783e5" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
export default ColumnStat;
