const products = [
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
    id: 1,
    name: "Elevator PCB",
    subMenu: true,
    subCategories: [
      { id: 17, name: "BLT Elevator PCB", link: "" },
      { id: 18, name: "Sigma Elevator PCB", link: "" },
      { id: 19, name: "KONE Elevator PCB", link: "" },
      { id: 20, name: "Mitsubishi Elevator PCB", link: "" },
    ],
  },
  {
    id: 2,
    name: "Escalator Parts",
    subMenu: true,
    subCategories: [
      { id: 21, name: "Escalator Handrail", link: "" },
      { id: 22, name: "Escalator Wheel", link: "" },
      { id: 23, name: "Escalator Step", link: "" },
    ],
  },
  {
    id: 3,
    subMenu: false,
    name: "Elevator Inverter",
    link: "",
  },
  {
    id: 4,
    subMenu: false,
    name: "Elevator Traction Machine",
    link: "",
  },
  {
    id: 5,
    subMenu: false,
    name: "Elevator Light Curtain",
    link: "",
  },
  {
    id: 6,
    subMenu: false,
    name: "Elevator Service Tool",
    link: "",
  },
  {
    id: 7,
    name: "Elevator Wheel",
    subMenu: true,
    subCategories: [
      { id: 24, name: "Door Roller", link: "" },
      { id: 25, name: "Traction Wheel", link: "" },
      { id: 26, name: "Other Wheel", link: "" },
    ],
  },
  {
    id: 8,
    subMenu: false,
    name: "Elevator Button",
    link: "",
  },
  {
    id: 9,
    subMenu: false,
    name: "Elevator Switch & Sensor",
    link: "",
  },
  {
    id: 10,
    subMenu: false,
    name: "Elevator Door Knife",
    link: "",
  },
  {
    id: 11,
    subMenu: false,
    name: "Elevator Door Operator",
    link: "",
  },
  {
    id: 12,
    name: "Electrical Series",
    subMenu: true,
    subCategories: [
      { id: 27, name: "Elevator Module", link: "" },
      { id: 28, name: "Elevator Contractor", link: "" },
      { id: 29, name: "Elevator Encoder", link: "" },
    ],
  },
  {
    id: 13,
    subMenu: false,
    name: "Elevator COP & HOP",
    link: "",
  },
  {
    id: 14,
    name: "Elevator Guide Shoe",
    subMenu: true,
    subCategories: [
      { id: 30, name: "Guide Shoe", link: "" },
      { id: 31, name: "Guide Shoe Busher", link: "" },
    ],
  },
  {
    id: 15,
    name: "Elevator Lock & Key",
    subMenu: true,
    subCategories: [
      { id: 33, name: "Door Lock", link: "" },
      { id: 34, name: "Triangular Lock", link: "" },
      { id: 35, name: "Key", link: "" },
    ],
  },
  {
    id: 16,
    name: "Other Elevator Parts",
    subMenu: true,
    subCategories: [
      { id: 36, name: "Elevator Belt", link: "" },
      { id: 37, name: "Speed Limiter", link: "" },
      { id: 38, name: "Oil Can", link: "" },
    ],
  },
];

export default products;
