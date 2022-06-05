import { useState, useContext } from "react";

export const useWaterRecordInput = (type) => {
  const [value, setValue] = useState("");
  const onChange = (event) => {
    switch (type) {
      case "alkalinity":
      case "sulfites":
      case "conductivity":
      case "ph":
      case "blowdown":
      case "boilernumber":
      case "glycol":
      case "temperature":
      case "location":
      case "freechlorine":
      case "ptsa":
      case "hardness":
        var numbers = /^[0-9]+$|^$/;
        if (String(event.target.value).match(numbers)) {
          setValue(event.target.value);
        }
        break;
      case "words":
        setValue(event.target.value);
        break;
      default:
        break;
    }
  };
  const reset = () => {
    setValue("");
  };

  return {
    type,
    value,
    onChange,
    reset,
    setValue,
  };
};
