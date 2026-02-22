import { useContext } from "react";
import { StudentContext } from "../context/StudentContext";
import GradeBadge from "../components/GradeBadge";

export default function FavouritesPage() {
  const { favourites, removeFavourite } = useContext(StudentContext);

  return (
    <div className="page">
      <header className="page-header">
        <span className="page-icon">⭐</span>
        <div>
          <h2 className="page-title">Favourite Students</h2>
          <p className="page-subtitle">
            {favourites.length === 0
              ? "No favourites yet"
              : `${favourites.length} favourite student(s)`}
          </p>
        </div>
      </header>

      {favourites.length === 0 ? (
        <div className="empty">
          <div className="empty-icon">🌟</div>
          <p>Add students to favourites from the list</p>
        </div>
      ) : (
        <div className="grid">
          {favourites.map((student) => (
            <div key={student.id} className="card card-fav">
              <div className="card-top">
                <div className="avatar avatar-glow">
                  {student.name[0]}
                </div>
                <GradeBadge grade={student.grade} />
              </div>

              <h3 className="student-name">{student.name}</h3>
              <p className="roll-no">{student.roll}</p>

              <button
                className="btn btn-remove"
                onClick={() => removeFavourite(student.id)}
              >
                ✕ Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}