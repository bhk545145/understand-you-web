import type { ReleaseStatus } from "@/types/site";

const statusLabels: Record<ReleaseStatus, string> = {
  development: "开发进展",
  submitted: "已提交审核",
  released: "已发布",
  archived: "版本归档",
  beta: "公测版本",
};

const datePrefixes: Record<ReleaseStatus, string> = {
  development: "进展更新于",
  submitted: "送审于",
  released: "发布于",
  archived: "归档于",
  beta: "公测于",
};

export function releaseStatusLabel(status: ReleaseStatus) {
  return statusLabels[status];
}

export function releaseDateLabel(
  releaseDate: string | null,
  status: ReleaseStatus,
) {
  if (!releaseDate) {
    return status === "archived" ? "归档日期未记录" : "状态日期未记录";
  }

  const date = new Date(`${releaseDate}T00:00:00`);
  if (Number.isNaN(date.getTime())) {
    return status === "archived" ? "归档日期未记录" : "状态日期未记录";
  }

  const formatted = new Intl.DateTimeFormat("zh-CN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);

  return `${datePrefixes[status]} ${formatted}`;
}
