export default function GridLines() {
  return (
    <>
      {/* Persistent Architectural Grid Lines */}
      <div className="gutter-line gutter-left bg-gray-500/20 mix-blend-difference"></div>
      <div className="gutter-line gutter-right bg-gray-500/20 mix-blend-difference"></div>
      <div className="center-line-full bg-gray-500/20 mix-blend-difference"></div>
    </>
  );
}
