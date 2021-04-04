import About from "./pages/about/About";
import Experience from "./pages/experience/Experience";
import Hobbies from "./pages/hobbies/Hobbies";

export const routes = [
  { path: "/about", component: About, label: "Quem sou eu" },
  { path: "/experience", component: Experience, label: "O que eu faço" },
  { path: "/hobbies", component: Hobbies, label: "Hobbies" },
  { path: "/", component: About },
];
