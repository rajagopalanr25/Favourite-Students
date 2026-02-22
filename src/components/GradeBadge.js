const gradeColor = {
  "A+": "#00d68f",
  A: "#3ecf8e",
  "B+": "#f9a825",
  B: "#fb8c00",
};

export default function GradeBadge({ grade }) {
  return (
    <span
      className="grade-badge"
      style={{
        backgroundColor: gradeColor[grade] || "#777",
      }}
    >
      {grade}
    </span>
  );
}