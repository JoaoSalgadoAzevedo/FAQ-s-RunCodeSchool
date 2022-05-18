

// export function Pesquisa(){
//     const [state, setState] = useState("")
//     return(
//         <div><input value={state} onChange={(e) => setState(e.target.value)}></input>Página pesquisa</div>
//     )
// }


//Components
// //Button
// export function Button({ children, onClick, ...props }) {
//     return <button onClick={onClick}>{children}</button>
// }

// //MainContent
// import styles from "../styles/MainContent.module.css"
// export function MainContent({ children }) {
//     return (
//         <div className={styles.mainContent}>
//             {children}
//         </div>)
// }

// //sidebar
// import { Button } from "./Button";
// import styles from "../styles/Sidebar.module.css"
// import { Link } from "react-router-dom";

// export function Sidebar({ buttons }) {
//     return (
//         <div className={styles.main}>
//             {buttons.map((b, i) => (
//                 <Link to={b.id}>
//                     <Button key={i}>
//                         {b.text}
//                     </Button>
//                 </Link>
//             ))}
//         </div>
//     )
// }

// //Pages

// export function AboutUs() {
//     return (
//         <div>
//             Sobre NOS
//         </div>
//     )
// }

// export function Home() {
//     return (
//         <div>
//             SITE
//         </div>
//     )
// }

// import styles from './styles/App.module.css';
// import { useState } from 'react';
// import { Sidebar } from './components/Sidebar';
// import { Home } from './Pages/Home';
// import { AboutUs } from './Pages/AboutUs';
// import { MainContent } from './components/MainContent';
// import { Route, Routes } from 'react-router-dom';

// const sidebarButtons = [
//   { text: "Home", id: "/" },
//   { text: "About Us", id: "/aboutus" },
// ]

// function App() {

//   return (
//     <div className={styles.App}>
//       <Sidebar
//         buttons={sidebarButtons}
//       />
//       <MainContent>
//         <Routes>
//           <Route path="/student">
//             <Route path="/student/exercises" element={<p>OLÀ ALUNO</p>}/>
//           </Route>
//           <Route path="/aboutus" element={<AboutUs />} />
//           <Route path="/" element={<Home />} />
//         </Routes>
//       </MainContent>
//     </div>
//   );
// }

// export default App;