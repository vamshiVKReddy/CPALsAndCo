interface SectionLabelProps {
  children?: React.ReactNode;
  light?: boolean;
}

export function SectionLabel({ children = "CPALS & Co", light = false }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-2 mb-3">
      <div
        className={`h-px w-8 ${light ? "bg-blue-400" : "bg-blue-600"}`}
        aria-hidden="true"
      />
      <span
        className={`text-xs font-semibold uppercase tracking-widest ${
          light ? "text-blue-300" : "text-blue-600"
        }`}
      >
        {children}
      </span>
    </div>
  );
}
