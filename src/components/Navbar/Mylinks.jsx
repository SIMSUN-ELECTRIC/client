export const links = [
  {
    name: "About Us",
    submenu: true,
    sublinks: [
      {
        Head: "About Us",
        sublink: [
          { name: "Our Company", link: "/about/ourcompany" },
          { name: "Our Team", link: "/about/ourteam" },
          { name: "Our Success Story", link: "/about/ourcompanysuccess" },
          { name: "News & Reference", link: "/about/news" },
          { name: "Add Product", link: "/addProduct" },
        ],
      },
    ],
  },
  {
    name: "Product",
    submenu: true,
    sublinks: [
      {
        Head: "Product",
        sublink: [
          { name: "Lift", link: "/product/lift" },
          { name: "Esclators", link: "/product/esclator" },
          { name: "Lift Spare Parts", link: "/product/LiftSparePart" },
          { name: "Escalator Spare Parts", link: "/product/EsclatorSparePart" },
        ],
      },
    ],
  },
  {
    name: "Services",
    submenu: true,
    sublinks: [
      {
        Head: "Services",
        sublink: [
          { name: "New Installation Serivces", link: "/services/NewInstallationServices" },
          { name: "Annual Maintainence Services", link: "/services/AnnualMaintainenceServices" },
          { name: "Breakdwon Services", link: "/services/BreakdownServices" },
          { name: "Elevator Moderinazation", link: "/services/ElevatorModerinazation" },
          { name: "Elevator Walk", link: "/services/EscalatorAutowalkModernization" },
        ],
      },
    ],
  },
  {
    name: "Coustomer Serivces",
    submenu: true,
    sublinks: [
      {
        Head: "Coustomer Serivces",
        sublink: [
          { name: "Your order", link: "/customerservices/YourOrders" },
          { name: "Return & Refunds", link: "/customerservices/ReturnandRefunds" },
          { name: "Manage Address", link: "/customerservices/ManageAddress" },
          { name: "Payment Setting", link: "/customerservices/PaymentSetting" },
          { name: "Account Setting", link: "/customerservices/AccountSetting" },
        ],
      },
    ],
  },
  {
    name: "Register",
    submenu: true,
    sublinks: [
      {
        Head: "Register",
        sublink: [
          { name: "Cousumer Registration", link: "/auth/consumerRegistration" },
          { name: "Engneer Registration", link: "/auth/engineerRegistration" },
          { name: "Admin Registration", link: "/auth/adminRegistration" },

        ],
      },
    ],
  },
  {
    name: "Login",
    submenu: true,
    sublinks: [
      {
        Head: "Login",
        sublink: [
          { name: "Cousumer login", link: "/auth/consumerLogin" },
          { name: "Engneer login", link: "/auth/EngineerLogin" },
          { name: "Admin login", link: "/auth/AdminLogin" },
        ],
      },
    ],
  },
  
];
