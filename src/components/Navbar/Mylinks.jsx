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
    name: "Products",
    link: "/products",
    submenu: true,
    sublinks: [
      {
        Head: "Products",
        sublink: [
          //

          {
            id: 21,
            name: "Lift",
            link: "/product/lift",
          },
          {
            id: 22,
            name: "Escalator",
            link: "/product/escalator",
          },
          {
            id: 23,
            name: "Travelator",
            link: "/product/travelator",
          },
          {
            id: 24,
            name: "Lift Spare Parts",
            link: "/product/LiftSparePart",
          },
          {
            id: 25,
            name: "Escalator Spare Parts",
            link: "/product/EscalatorSparePart",
          },
          {
            id: 26,
            name: "Other Products",
            link: "/products",
            productCategory: "BLT Elevator PCB",
          },
          { id: 17, name: "BLT Elevator PCB", link: "/products" },
          { id: 18, name: "Sigma Elevator PCB", link: "/products" },
          { id: 19, name: "KONE Elevator PCB", link: "/products" },
          { id: 20, name: "Mitsubishi Elevator PCB", link: "/products" },
          { id: 21, name: "Escalator Handrail", link: "/products" },
          { id: 22, name: "Escalator Wheel", link: "/products" },
          { id: 23, name: "Escalator Step", link: "/products" },
          {
            id: 3,
            subMenu: false,
            name: "Elevator Inverter",
            link: "/products",
          },
          {
            id: 4,
            subMenu: false,
            name: "Elevator Traction Machine",
            link: "/products",
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
            name: "Maintainence",
            link: "/services/Maintenance",
          },
          {
            id: 33,
            name: "Annual Maintainence Services",
            link: "/services/AnnualMaintainenceServices",
          },
          {
            id: 34,
            name: "Breakdown Services",
            link: "/services/BreakdownServices",
          },
          {
            id: 35,
            name: "Elevator Modernization",
            link: "/services/EscalatorAutowalkModernization",
          },
          // {
          //   id: 36,
          //   name: "Elevator Modernization",
          //   link: "/services/ElevatorModernization",
          // },
        ],
      },
    ],
  },
  // {
  //   id: 4,
  //   name: "Customer Services",
  //   submenu: true,
  //   sublinks: [
  //     {
  //       Head: "Customer Services",
  //       sublink: [
  //         { id: 41, name: "Your Orders", link: "/customerservices/YourOrders" },
  //         {
  //           id: 42,
  //           name: "Return & Refunds",
  //           link: "/customerservices/ReturnandRefunds",
  //         },
  // {
  //   id: 43,
  //   name: "Manage Addresses",
  //   link: "/customerservices/ManageAddress",
  // },
  // {
  //   id: 44,
  //   name: "Payment Settings",
  //   link: "/customerservices/PaymentSetting",
  // },
  //       ],
  //     },
  //   ],
  // },
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
