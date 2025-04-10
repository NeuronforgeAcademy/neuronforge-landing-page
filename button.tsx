export function Button({ children, className }: any) {
  return <button className={`px-4 py-2 font-medium rounded ${className}`}>{children}</button>;
}
