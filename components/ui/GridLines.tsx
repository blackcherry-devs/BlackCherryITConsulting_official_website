interface GridLinesProps {
  showLeft?: boolean;
  showRight?: boolean;
  showCenter?: boolean;
}

export default function GridLines({
  showLeft = true,
  showRight = true,
  showCenter = true,
}: GridLinesProps = {}) {
  return (
    <>
      {/* Persistent Architectural Grid Lines */}
      {showLeft && (
        <div className="gutter-line gutter-left bg-gray-500/20 mix-blend-difference"></div>
      )}
      {showRight && (
        <div className="gutter-line gutter-right bg-gray-500/20 mix-blend-difference"></div>
      )}
      {showCenter && (
        <div className="center-line-full bg-gray-500/20 mix-blend-difference"></div>
      )}
    </>
  );
}
