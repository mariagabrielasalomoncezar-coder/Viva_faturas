export default function StatCard({
  label,
  value,
  tone = "default",
}: {
  label: string;
  value: string | number;
  tone?: "default" | "warning" | "danger" | "success";
}) {
  const toneClasses: Record<string, string> = {
    default: "text-ink-900",
    warning: "text-status-pending",
    danger: "text-status-overdue",
    success: "text-status-paid",
  };

  return (
    <div className="rounded-2xl border border-ink-200 bg-white p-5">
      <p className="text-sm font-medium text-ink-500">{label}</p>
      <p className={`mt-2 text-2xl font-bold ${toneClasses[tone]}`}>{value}</p>
    </div>
  );
}
