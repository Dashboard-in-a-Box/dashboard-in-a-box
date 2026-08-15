import KpiCard from "../components/ui/KpiCard";

export default function Dashboard() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-slate-900 dark:text-white">
          Dashboard
        </h1>

        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          Overview of your management data
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <KpiCard
          title="Total Revenue"
          value="$124,500"
          trend={{ value: "+12.5%", positive: true }}
          description="vs last month"
        />

        <KpiCard
          title="Active Customers"
          value="1,248"
          trend={{ value: "+8.2%", positive: true }}
          description="vs last month"
        />

        <KpiCard
          title="Open Tasks"
          value="37"
          trend={{ value: "-4.1%", positive: true }}
          description="vs last week"
        />

        <KpiCard
          title="Issues"
          value="8"
          trend={{ value: "+2", positive: false }}
          description="this week"
        />
      </div>
    </div>
  );
}