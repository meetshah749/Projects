import {BarChart,XAxis,YAxis,Tooltip,Legend,Bar,CartesianGrid,} from "recharts";
import { useState } from "react";

const Chart = () => {
  const [transactions, setTransactions] = useState(
    JSON.parse(localStorage.getItem("transactions")) || []
  );
  return (
    <div className="chart">
      <BarChart width={730} height={250} data={transactions}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="category" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="amount" fill="#8884d8" />
      </BarChart>
    </div>  
  );
};
export default Chart;
