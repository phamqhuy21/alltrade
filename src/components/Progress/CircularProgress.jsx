export default function CircularProgress({
  strokeWidth,
  percentage,
  primary,
  secondary,
  width,
  height,
}) {
  const radius = 50 - strokeWidth / 2;
  const pathDescription = `
      M 50,50 m 0,-${radius}
      a ${radius},${radius} 0 1 1 0,${2 * radius}
      a ${radius},${radius} 0 1 1 0,-${2 * radius}
    `;

  const diameter = Math.PI * 2 * radius;
  const progressStyle = {
    stroke: "#2F86FA",
    strokeLinecap: "round",
    strokeDasharray: `${diameter}px ${diameter}px`,
    strokeDashoffset: `${((100 - percentage) / 100) * diameter}px`,
  };

  return (
    <svg
      className={"CircularProgressbar"}
      viewBox="0 0 100 100"
      width={width}
      height={height}
    >
      <path
        className="CircularProgressbar-trail"
        d={pathDescription}
        strokeWidth={strokeWidth}
        fillOpacity={0}
        style={{
          stroke: "#2B3139",
        }}
      />

      <path
        className="CircularProgressbar-path"
        d={pathDescription}
        strokeWidth={strokeWidth}
        fillOpacity={0}
        style={progressStyle}
      />

      <text
        className="CircularProgressbar-text"
        x={50}
        y={40}
        style={{
          fill: "#007dbc",
          fontSize: "25px",
          dominantBaseline: "central",
          textAnchor: "middle",
        }}
      >
        {`${primary}`}
      </text>
      <text
        className="CircularProgressbar-text"
        x={50}
        y={60}
        style={{
          fill: "#007dbc",
          fontSize: "10px",
          dominantBaseline: "central",
          textAnchor: "middle",
        }}
      >
        {`${secondary}`}
      </text>
    </svg>
  );
}
