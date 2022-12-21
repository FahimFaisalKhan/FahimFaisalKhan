import { useContext } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { MyLoader } from "../contexts/LoaderContext";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import About from "../Pages/About/About";
import Blogs from "../Pages/Blogs/Blogs";
import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home/Home";
import ProjectDetail from "../Pages/ProjectDetail/ProjectDetail";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/:id" element={<ProjectDetail />} />
    </Route>
  )
);
