const products = [
  {
    id: 21,
    name: "Lift",
  },
  {
    id: 22,
    name: "Escalator",
  },
  {
    id: 23,
    name: "Travelator",
  },
  {
    id: 24,
    name: "Lift Spare Parts",
  },
  {
    id: 25,
    name: "Escalator Spare Parts",
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
    id: 11,
    subMenu: false,
    name: "Elevator Door Operator",
    link: "",
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
