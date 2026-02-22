import { useContext } from "react";
import { StudentContext } from "../context/StudentContext";
import GradeBadge from "../components/GradeBadge";

export default function StudentListPage() {
  const { studentsData, addFavourite, isFavourite } =
    useContext(StudentContext);

  return (
    <div className="page">
      <header className="page-header">
        <span className="page-icon">🎓</span>
        <div>
          <h2 className="page-title">All Students</h2>
          <p className="page-subtitle">
            View all students & add favourites
          </p>
        </div>
      </header>

      <div className="grid">
        {studentsData.map((student) => {
          const fav = isFavourite(student.id);

          return (
            <div
              key={student.id}
              className={`card ${fav ? "card-fav" : ""}`}
            >
              <div className="card-top">
                <div className="avatar">{student.name[0]}</div>
                <GradeBadge grade={student.grade} />
              </div>

              <h3 className="student-name">{student.name}</h3>
              <p className="roll-no">{student.roll}</p>

              <button
                className={`btn ${fav ? "btn-disabled" : "btn-active"}`}
                disabled={fav}
                onClick={() => addFavourite(student)}
              >
                {fav ? "✓ Added" : "♡ Add to Favourite"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}