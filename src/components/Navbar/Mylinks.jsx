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
          { name: "News & References", link: "/about/news" },
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
          { name: "Lifts", link: "/product/lift" },
          { name: "Escalators", link: "/product/escalator" },
          { name: "travelator", link: "/product/travelator" },
          { name: "Lift Spare Parts", link: "/product/LiftSparePart" },
          {
            name: "Escalator Spare Parts",
            link: "/product/EscalatorSparePart",
          },
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
          {
            name: "New Installation Services",
            link: "/services/NewInstallationServices",
          },
          {
            name: "Annual Maintainence Services",
            link: "/services/AnnualMaintainenceServices",
          },
          { name: "Breakdown Services", link: "/services/BreakdownServices" },
          // {
          //   name: "Elevator Modernization",
          //   link: "/services/ElevatorModernization",
          // },
          {
            name: "Elevator Walk",
            link: "/services/EscalatorAutowalkModernization",
          },
        ],
      },
    ],
  },
  {
    name: "Customer Services",
    submenu: true,
    sublinks: [
      {
        Head: "Customer Services",
        sublink: [
          { name: "Your Orders", link: "/customerservices/YourOrders" },
          {
            name: "Return & Refunds",
            link: "/customerservices/ReturnandRefunds",
          },
          { name: "Manage Addresses", link: "/customerservices/ManageAddress" },
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
          { name: "Consumer Registration", link: "/auth/consumerRegistration" },
          { name: "Engineer Registration", link: "/auth/engineerRegistration" },
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
          { name: "Consumer Login", link: "/auth/consumerLogin" },
          { name: "Engineer Login", link: "/auth/EngineerLogin" },
          { name: "Admin Login", link: "/auth/AdminLogin" },
        ],
      },
    ],
  },
];
