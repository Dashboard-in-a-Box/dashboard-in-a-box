import type { ReactNode } from "react";
import Card from "./Card";

type KpiCardProps = {
  title: string;
  value: string | number;
  description?: string;
  icon?: ReactNode;
  trend?: {
    value: string;
    positive?: boolean;
  };
};

export default function KpiCard({
  title,
  value,
  description,
  icon,
  trend,
}: KpiCardProps) {
  return (
    <Card>
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
            {title}
          </p>

          <p className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white">
            {value}
          </p>

          {(description || trend) && (
            <div className="mt-2 flex items-center gap-2 text-sm">
              {trend && (
                <span
                  className={
                    trend.positive
                      ? "font-medium text-emerald-600"
                      : "font-medium text-red-600"
                  }
                >
                  {trend.value}
                </span>
              )}

              {description && (
                <span className="text-slate-500 dark:text-slate-400">
                  {description}
                </span>
              )}
            </div>
          )}
        </div>

        {icon && (
          <div className="rounded-lg bg-slate-100 p-2 text-slate-600 dark:bg-slate-800 dark:text-slate-300">
            {icon}
          </div>
        )}
      </div>
    </Card>
  );
}