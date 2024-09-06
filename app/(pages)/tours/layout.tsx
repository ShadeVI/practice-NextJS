function ToursLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="mb-4 p-4 bg-cyan-500 rounded-md text-gray-700">
        <h1 className="text-center">Tours Section layout</h1>
      </div>
      {children}
    </div>
  );
}
export default ToursLayout;
