export const links = [
  {
    id: 1,
    name: "About Us",
    submenu: true,
    sublinks: [
      {
        Head: "About Us",
        sublink: [
          { id: 11, name: "Our Company", link: "/about/ourcompany" },
          { id: 12, name: "Our Team", link: "/about/ourteam" },
          {
            id: 13,
            name: "Our Success Story",
            link: "/about/ourcompanysuccess",
          },
          { id: 14, name: "News & References", link: "/about/news" },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Product",
    submenu: true,
    sublinks: [
      {
        Head: "Product",
        sublink: [
          { id: 21, name: "Lifts", link: "/product/lift" },
          { id: 22, name: "Escalators", link: "/product/escalator" },
          { id: 23, name: "Travelator", link: "/product/travelator" },
          { id: 24, name: "Lift Spare Parts", link: "/product/LiftSparePart" },
          {
            id: 25,
            name: "Escalator Spare Parts",
            link: "/product/EscalatorSparePart",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Services",
    submenu: true,
    sublinks: [
      {
        Head: "Services",
        sublink: [
          {
            id: 31,
            name: "New Installation Services",
            link: "/services/NewInstallationServices",
          },
          {
            id: 32,
            name: "Annual Maintainence Services",
            link: "/services/AnnualMaintainenceServices",
          },
          {
            id: 33,
            name: "Breakdown Services",
            link: "/services/BreakdownServices",
          },
          // {
          //   id: 34,
          //   name: "Elevator Modernization",
          //   link: "/services/ElevatorModernization",
          // },
          {
            id: 35,
            name: "Elevator Walk",
            link: "/services/EscalatorAutowalkModernization",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    name: "Customer Services",
    submenu: true,
    sublinks: [
      {
        Head: "Customer Services",
        sublink: [
          { id: 41, name: "Your Orders", link: "/customerservices/YourOrders" },
          {
            id: 42,
            name: "Return & Refunds",
            link: "/customerservices/ReturnandRefunds",
          },
          {
            id: 43,
            name: "Manage Addresses",
            link: "/customerservices/ManageAddress",
          },
          {
            id: 44,
            name: "Payment Settings",
            link: "/customerservices/PaymentSetting",
          },
          {
            id: 45,
            name: "Account Settings",
            link: "/customerservices/AccountSetting",
          },
        ],
      },
    ],
  },
  // {
  //   id: 5,
  //   name: "Register",
  //   submenu: true,
  //   sublinks: [
  //     {
  //       Head: "Register",
  //       sublink: [
  //         {
  //           id: 51,
  //           name: "Consumer Registration",
  //           link: "/auth/consumerRegistration",
  //         },
  //         {
  //           id: 52,
  //           name: "Engineer Registration",
  //           link: "/auth/engineerRegistration",
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   id: 6,
  //   name: "Login",
  //   submenu: true,
  //   sublinks: [
  //     {
  //       Head: "Login",
  //       sublink: [
  //         { id: 61, name: "Consumer Login", link: "/auth/consumerLogin" },
  //         { id: 62, name: "Engineer Login", link: "/auth/EngineerLogin" },
  //         { id: 63, name: "Admin Login", link: "/auth/AdminLogin" },
  //       ],
  //     },
  //   ],
  // },
];
