// import React, { createContext, useContext, useState, useEffect } from "react";

// const EnrolledCoursesContext = createContext();

// export const useEnrolledCourses = () => useContext(EnrolledCoursesContext);

// export const EnrolledCoursesProvider = ({ children }) => {
//   const [enrolledCourses, setEnrolledCourses] = useState(() => {
//     const saved = localStorage.getItem("enrolledCourses");
//     return saved ? JSON.parse(saved) : [];
//   });

//   useEffect(() => {
//     localStorage.setItem("enrolledCourses", JSON.stringify(enrolledCourses));
//   }, [enrolledCourses]);

//   const enroll = (course) => {
//     setEnrolledCourses((prev) => {
//       if (prev.find((c) => c.id === course.id)) return prev;
//       return [...prev, course];
//     });
//   };

//   return (
//     <EnrolledCoursesContext.Provider value={{ enrolledCourses, enroll }}>
//       {children}
//     </EnrolledCoursesContext.Provider>
//   );
// };

// import React, { createContext, useContext, useState, useEffect } from "react";

// const EnrolledCoursesContext = createContext();

// export const useEnrolledCourses = () => useContext(EnrolledCoursesContext);

// export const EnrolledCoursesProvider = ({ children }) => {
//   const [enrolledCourses, setEnrolledCourses] = useState(() => {
//     const saved = localStorage.getItem("enrolledCourses");
//     return saved ? JSON.parse(saved) : [];
//   });

//   useEffect(() => {
//     localStorage.setItem("enrolledCourses", JSON.stringify(enrolledCourses));
//   }, [enrolledCourses]);

//   const enroll = (course) => {
//     setEnrolledCourses((prev) => {
//       if (prev.find((c) => c.id === course.id)) return prev;
//       return [...prev, course];
//     });
//   };

//   const remove = (id) => {
//     setEnrolledCourses((prev) => prev.filter((c) => c.id !== id));
//   };

//   return (
//     <EnrolledCoursesContext.Provider value={{ enrolledCourses, enroll, remove }}>
//       {children}
//     </EnrolledCoursesContext.Provider>
//   );
// };


import React, { createContext, useContext, useState, useEffect } from "react";

const EnrolledCoursesContext = createContext();

export const useEnrolledCourses = () => useContext(EnrolledCoursesContext);

export const EnrolledCoursesProvider = ({ children }) => {
  const [enrolledCourses, setEnrolledCourses] = useState(() => {
    const saved = localStorage.getItem("enrolledCourses");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("enrolledCourses", JSON.stringify(enrolledCourses));
  }, [enrolledCourses]);

  const enroll = (course) => {
    setEnrolledCourses((prev) => {
      if (prev.find((c) => c.id === course.id)) return prev;
      return [...prev, course];
    });
  };

  const remove = (id) => {
    setEnrolledCourses((prev) => prev.filter((c) => c.id !== id));
  };

  return (
    <EnrolledCoursesContext.Provider value={{ enrolledCourses, enroll, remove }}>
      {children}
    </EnrolledCoursesContext.Provider>
  );
};
