import React from "react";

const ListGroup = ({ genders, OnGenderSelect, selectedGender }) => {
  return (
    <ul className="list-group" style={{display: "flex"}}>
      {genders.map((gender) => (
        <li
        style={{cursor: "pointer"}}
          onClick={() => OnGenderSelect(gender)}
          key={gender}
          className={
            gender === selectedGender
              ? "list-group-item active"
              : "list-group-item"
          }
        >
          {gender}
        </li>
      ))}
    </ul>
  );
};

export default ListGroup;
