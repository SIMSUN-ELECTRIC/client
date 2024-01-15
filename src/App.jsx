import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Homepage from "./components/Homepage/Homepage";
import OurCompany from "./CompanyPages/OurCompany/OurCompany";
import OurTeam from "./CompanyPages/OurTeam/OurTeam";
import News from "./CompanyPages/News/News";
import OurCompanySuccess from "./CompanyPages/OurCompanySuccess/OurCompanySuccess";
import Lift from "./CompanyPages/Product/Lift/Lift";
import Escalator from "./CompanyPages/Product/Escalator/Escalator";
import LiftSparePart from "./CompanyPages/Product/LiftSparePart/LiftSparePart";
import EscalatorSparePart from "./CompanyPages/Product/EscalatorSparePart/EscalatorSparePart";
import NewInstallationServices from "./CompanyPages/Services/NewInstallationServices";
import AnnualMaintainenceServices from "./CompanyPages/Services/AnnualMaintainenceServices";
import BreakdownServices from "./CompanyPages/Services/BreakdownServices";
import Shop from "./CompanyPages/shop/Shop";
import YourOrders from "./CompanyPages/customerServices/YourOrders";
import ReturnandRefund from "./CompanyPages/customerServices/ReturnandRefund";
import ManageAddress from "./CompanyPages/customerServices/ManageAddress";
import PaymentSetting from "./CompanyPages/customerServices/PaymentSetting";
import AccountSettings from "./CompanyPages/customerServices/AccountSetting";
import ConsumerRegister from "./Auth/Signup/ConsumerRegister";
import ConsumerLogin from "./Auth/ConsumerLogin";
import EngineerRegister from "./Auth/Signup/EngineerRegister";
import EngineerLogin from "./Auth/EngineerLogin";
import AdminLogin from "./Auth/AdminLogin";
import ContactUs from "./components/ContactUs";
import Cart from "./components/Cart";
import Maintenance from "./CompanyPages/Services/Maintenance";
import ElevatorModernization from "./TemplatePages/ExistingsBuilding/ElevatorModernization";
import EscalatorAutowalkModernization from "./CompanyPages/Services/EscalatorAutowalkModernization";
import AddProduct from "./CompanyPages/Product/AddProduct/AddProduct";
import Travelator from "./CompanyPages/Product/Travelator/Travelator";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ShippingAddress from "./components/Shipping";
import UserProfile from "./Auth/UserProfile";
import EngineerDetailsForm from "./components/EngineerForm";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />

          <Route path="/about/ourcompany" element={<OurCompany />} />
          <Route path="/about/ourteam" element={<OurTeam />} />
          <Route path="/about/news" element={<News />} />
          <Route
            path="/about/ourcompanysuccess"
            element={<OurCompanySuccess />}
          />

          <Route path="/product/lift" element={<Lift />} />
          <Route path="/product/escalator" element={<Escalator />} />
          <Route path="/product/travelator" element={<Travelator />} />
          <Route path="/product/LiftSparePart" element={<LiftSparePart />} />
          <Route
            path="/product/EscalatorSparePart"
            element={<EscalatorSparePart />}
          />
          <Route path="/addProduct" element={<AddProduct />} />

          <Route
            path="/services/NewInstallationServices"
            element={<NewInstallationServices />}
          />
          <Route
            path="/services/AnnualMaintainenceServices"
            element={<AnnualMaintainenceServices />}
          />
          <Route
            path="/services/BreakdownServices"
            element={<BreakdownServices />}
          />
          <Route path="/services/Maintenance" element={<Maintenance />} />
          <Route
            path="/services/ElevatorModernization"
            element={<ElevatorModernization />}
          />
          <Route
            path="/services/EscalatorAutowalkModernization"
            element={<EscalatorAutowalkModernization />}
          />

          <Route path="/shop" element={<Shop />} />

          <Route path="/customerservices/YourOrders" element={<YourOrders />} />
          <Route
            path="/customerservices/ReturnandRefunds"
            element={<ReturnandRefund />}
          />
          <Route
            path="/customerservices/ManageAddress"
            element={<ManageAddress />}
          />
          <Route
            path="/customerservices/PaymentSetting"
            element={<PaymentSetting />}
          />
          <Route
            path="/customerservices/AccountSetting"
            element={<AccountSettings />}
          />

          <Route
            path="/auth/consumerRegistration"
            element={<ConsumerRegister />}
          />
          <Route
            path="/auth/engineerRegistration"
            element={<EngineerRegister />}
          />

          <Route path="/auth/consumerLogin" element={<ConsumerLogin />} />
          <Route path="/auth/EngineerLogin" element={<EngineerLogin />} />
          <Route path="/auth/AdminLogin" element={<AdminLogin />} />
          <Route path="/auth/UserProfile" element={<UserProfile />} />

          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/EngineerDetails" element={<EngineerDetailsForm />} />
          <Route path="/shipping" element={<ShippingAddress />} />
        </Route>
      </Routes>
      <ToastContainer limit={1} />
    </>
  );
}

export default App;
