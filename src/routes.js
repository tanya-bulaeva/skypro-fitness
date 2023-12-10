import { Routes, Route } from "react-router-dom";
import { MainPage } from "./pages/mainPage/Main";
import CourseInfo from "./pages/description/description";
import { PersonalPage } from "./pages/personal/personalPage";
import SignUpPage from "./pages/sign-up/signup";
import WorkoutPage from "./pages/Workout/WorkoutPage";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";
import SignInPage from "./pages/log-in/login";

export const AppRoutes = ({user}) => {
    return (
      <Routes>
        <Route path="/Login" element={<SignInPage />} />
        <Route path="/SignUp" element={<SignUpPage />} />
        <Route element={<ProtectedRoute isAllowed={Boolean(user)} />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/CourseInfo/:id" element={<CourseInfo />} />
          <Route path="/PersonalPage/:id" element={<PersonalPage />} />
          <Route path="/WorkoutPage/:id" element={<WorkoutPage />} />
      </Route>
  

        
      </Routes>
    );
  };