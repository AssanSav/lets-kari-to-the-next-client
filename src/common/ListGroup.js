import React from "react";

const ListGroup = ({ genders, OnGenderSelect, selectedGender }) => {
  return (
    <ul class="list-group">
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
