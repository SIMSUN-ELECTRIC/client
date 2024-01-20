import React from "react";

const Item = (props) => {
  return (
    <ul className={props.class}>
      <h1 className="mb-1 font-semibold sm:text-2xl ">{props.title}</h1>
      {props.Links.map((link) => (
        <li key={link.name}>
          <a
            className="text-gray-400 hover:text-red-400 duration-300
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
