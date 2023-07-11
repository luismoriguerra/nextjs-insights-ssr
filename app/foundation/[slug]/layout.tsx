export default function FoundationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="foundation-layout">
      {children}
    </div>
  );
}
