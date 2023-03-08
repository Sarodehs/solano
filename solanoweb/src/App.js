import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./components/solano_website/Login";
import ContactUs from "./components/solano_website/ContactUs";
import Home from "./components/solano_website/Home";
import Pricing from "./components/solano_website/Pricing";
import Plansummary from "./components/solano_website/Plansummary";
import Payment from "./components/solano_website/Payment";



import Dashboard from "./components/solano_admin/Dashboard";
import Users from "./components/solano_admin/Users";
import UsersView from "./components/solano_admin/UsersView";
import Tickets from "./components/solano_admin/Tickets";
import TicketsView from "./components/solano_admin/TicketsView";
import Enterprise from "./components/solano_admin/Enterprise";
import EnterpriseView from "./components/solano_admin/EnterpriseView";
import Transaction from './components/solano_admin/Transaction';


function App() {
  return (
    <>
    
    <Router>
      <Routes>
        {/* website start*/}
      <Route path='/' element={<Home />} />
      <Route path='/contactus/' element={<ContactUs />} />
      <Route path='/plansummary/' element={<Plansummary />} />
      <Route path='/payment/' element={<Payment />} />
      <Route path='/pricing/' element={<Pricing />} />
       <Route path='/login/' element={<Login />} />
         {/* website end */}

       {/* admin start */}
       <Route path='/dashboard/' element={<Dashboard />} />
       <Route path='/user/' element={<Users />} />
       <Route path='/userview/' element={<UsersView />} />
       <Route path='/ticket/' element={<Tickets />} />
       <Route path='/ticketview/' element={<TicketsView />} />
       <Route path='/enterprise/' element={<Enterprise />} />
       <Route path='/enterpriseview/' element={<EnterpriseView />} />
       <Route path='/transaction/' element={<Transaction />} />
       
      {/* admin end*/}
      </Routes>
    </Router>


  </>
  );
}

export default App;
