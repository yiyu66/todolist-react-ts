import React, { useState } from "react";

interface IProps {
  people: {
    name: string;
    img: string;
    age: number;
    note?: string;
  }[];
}

const AddToList: React.FC<IProps> = () => {
  const [input, setInput] = useState({
    name: "",
    age: "",
    note: "",
    img: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <div className="AddToList">
      <input
        type="text"
        onChange={handleChange}
        className="AddToList-input"
        name="name"
        value={input.name}
        placeholder="Name"
      />
      <input
        type="text"
        onChange={handleChange}
        className="AddToList-input"
        name="age"
        value={input.age}
        placeholder="Age"
      />
      <input
        type="text"
        onChange={handleChange}
        className="AddToList-input"
        name="img"
        value={input.img}
        placeholder="Image Url"
      />
      <textarea onChange={handleChange} className="AddToList-input" name="note" value={input.note} placeholder="Note" />
    </div>
  );
};

export default AddToList;
