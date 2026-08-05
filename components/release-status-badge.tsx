import { releaseStatusLabel } from "@/lib/release-presentation";
import type { ReleaseStatus } from "@/types/site";

export default function ReleaseStatusBadge({ status }: { status: ReleaseStatus }) {
  return (
    <span className={`release-status release-status-${status}`}>
      {releaseStatusLabel(status)}
    </span>
  );
}
