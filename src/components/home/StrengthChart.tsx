import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { strengthSeries } from "@/data/catalog";

/** Isolated so Recharts only loads when the home chart mounts. */
export function StrengthChart() {
  const chartData = [
    { day: strengthSeries[0].label.en, control: strengthSeries[0].value, dosed: strengthSeries[1].value },
  ];
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={chartData}>
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="control" fill="var(--color-muted)" name="Control" />
        <Bar dataKey="dosed" fill="var(--color-brand)" name="Dosed" />
      </BarChart>
    </ResponsiveContainer>
  );
}

