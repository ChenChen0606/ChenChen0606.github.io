import type { ReactNode } from 'react';

interface SectionProps {
  id: string;
  wrapClassName?: string;
  children: ReactNode;
}

export default function Section({ id, wrapClassName = '', children }: SectionProps) {
  return (
    <section id={id} className="section">
      <div className={`wrap ${wrapClassName}`.trim()}>{children}</div>
    </section>
  );
}
