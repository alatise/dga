import { FiClock, FiUsers, FiMonitor } from "react-icons/fi";
import type { Program } from "../../types/content";
import { Card } from "../ui/Card";

export function ProgramCard({ program }: { program: Program }) {
  const hasDetails = program.duration || program.format || program.audience;

  return (
    <Card className="flex h-full flex-col">
      <h3 className="text-lg font-semibold text-ink">{program.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">{program.summary}</p>

      {hasDetails && (
        <dl className="mt-5 space-y-2 border-t border-line pt-4 text-sm text-ink-muted">
          {program.duration && (
            <div className="flex items-center gap-2">
              <FiClock aria-hidden size={14} />
              <dt className="sr-only">Duration</dt>
              <dd>{program.duration}</dd>
            </div>
          )}
          {program.format && (
            <div className="flex items-center gap-2">
              <FiMonitor aria-hidden size={14} />
              <dt className="sr-only">Format</dt>
              <dd>{program.format}</dd>
            </div>
          )}
          {program.audience && (
            <div className="flex items-center gap-2">
              <FiUsers aria-hidden size={14} />
              <dt className="sr-only">Audience</dt>
              <dd>{program.audience}</dd>
            </div>
          )}
        </dl>
      )}
    </Card>
  );
}
