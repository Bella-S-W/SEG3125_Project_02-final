import './App.css';
import {Suspense} from 'react';
import Home from './Pages/Home';
import Header from './Components/Header';
import Family_card from './Pages/Family_card';
import Discussion_page from './Pages/Discussion_page';
import Subscribe_plan from './Pages/Subscribe_plan';
import Support_page from './Pages/Support_page';
import Stark_tree_with_title from './Components/familyTree/Stark_tree_with_title';
import Arryn_tree_with_title from './Components/familyTree/Arryn_tree_with_title';
import Tully_tree_with_title from './Components/familyTree/Tully_tree_with_title';
import Targaryen_tree_with_title from './Components/familyTree/Targaryen_tree_with_title';
import Baratheon_tree_with_title from './Components/familyTree/Baratheon_tree_with_title';
import Lannister_tree_with_title from './Components/familyTree/Lannister_tree_with_title';
import Tyrell_tree_with_title from './Components/familyTree/Tyrell_tree_with_title';
import Martell_tree_with_title from './Components/familyTree/Martell_tree_with_title';
import Payment_page from './Pages/Payment_page';
import Pay_page from './Pages/Pay_page';
import Pay_success_page from './Pages/Pay_success_page';
import './i18n';


import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'
import { HashRouter as Router, Routes,Route} from "react-router-dom";


function App() {
  return (
    <Suspense fallback = "loading">
    <div>
      <Router basename="/">
        <Header/>
        <Routes>
            <Route exact path ="/" element={<Home/>}/>
            <Route path="/Family_card" element={<Family_card/>}/>
            <Route path="/Discussion_page" element={<Discussion_page/>}/>
            <Route path="/Subscribe_plan" element={<Subscribe_plan/>}/>
            <Route path="/Support_page" element={<Support_page/>}/>
            <Route path="/Payment_page" element={<Payment_page/>}/>
            <Route path="/Pay_page" element={<Pay_page/>}/>
            <Route path="/Pay_success_page" element={<Pay_success_page/>}/>
            <Route path="/Stark_tree_with_title" element={<Stark_tree_with_title/>}/>
            <Route path="/Arryn_tree_with_title" element={<Arryn_tree_with_title/>}/>
            <Route path="/Tully_tree_with_title" element={<Tully_tree_with_title/>}/>
            <Route path="/Targaryen_tree_with_title" element={<Targaryen_tree_with_title/>}/>
            <Route path="/Baratheon_tree_with_title" element={<Baratheon_tree_with_title/>}/>
            <Route path="/Lannister_tree_with_title" element={<Lannister_tree_with_title/>}/>
            <Route path="/Tyrell_tree_with_title" element={<Tyrell_tree_with_title/>}/>
            <Route path="/Martell_tree_with_title" element={<Martell_tree_with_title/>}/>
        </Routes>

      </Router>
    </div>
    </Suspense>
  );
}

export default App;
