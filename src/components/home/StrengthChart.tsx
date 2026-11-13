import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { strengthSeries } from "@/data/catalog";

/** Isolated so Recharts only loads when the home chart mounts. */
export function StrengthChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={strengthSeries}>
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="control" fill="var(--color-muted)" name="Control" />
        <Bar dataKey="dosed" fill="var(--color-brand)" name="Dosed" />
      </BarChart>
    </ResponsiveContainer>
  );
}
