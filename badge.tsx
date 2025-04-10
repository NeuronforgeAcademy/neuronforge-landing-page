export function Badge({ children, className }: any) {
  return <span className={`inline-block text-xs font-semibold uppercase tracking-wide ${className}`}>{children}</span>;
}
