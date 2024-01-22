import React from "react";

const Item = (props) => {
  return (
    <ul>
      <h1 className="mb-1 font-semibold text-xl md:text-xl ">{props.title}</h1>
      {props.Links.map((link) => (
        <li key={link.name}>
          <a
            className="text-gray-400 text-xs md:text-lg hover:text-red-400 duration-300
           cursor-pointer leading-6"
            href={link.link}
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Item;
