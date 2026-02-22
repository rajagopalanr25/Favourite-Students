import { createContext, useState } from "react";

export const StudentContext = createContext();

const studentsData = [
  { id: 1, name: "Keerthivasan", roll: "CS-101", grade: "A+" },
  { id: 2, name: "Venkat", roll: "CS-102", grade: "A" },
  { id: 3, name: "Vishu karthick", roll: "CS-103", grade: "B+" },
  { id: 4, name: "Karthikeya", roll: "CS-104", grade: "A" },
  { id: 5, name: "Nirmal Kumar", roll: "CS-105", grade: "B" },
  { id: 6, name: "Kavya", roll: "CS-106", grade: "A+" },
  { id: 7, name: "Praveen", roll: "CS-107", grade: "B+" },
  { id: 8, name: "Akash", roll: "CS-108", grade: "A" },
];

export function StudentProvider({ children }) {
  const [favourites, setFavourites] = useState([]);

  const addFavourite = (student) => {
    setFavourites((prev) =>
      prev.some((s) => s.id === student.id) ? prev : [...prev, student]
    );
  };

  const removeFavourite = (id) => {
    setFavourites((prev) => prev.filter((s) => s.id !== id));
  };

  const isFavourite = (id) => favourites.some((s) => s.id === id);

  return (
    <StudentContext.Provider
      value={{
        favourites,
        studentsData,
        addFavourite,
        removeFavourite,
        isFavourite,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
}