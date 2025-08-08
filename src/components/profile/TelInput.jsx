import { useState } from "react";
import { MuiTelInput } from "mui-tel-input";

export default function TelInput() {
  const [value, setValue] = useState("");

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <div className="flex items-center gap-2 mt-4 bg-[#F5F6F7] rounded-md">
      <MuiTelInput
        value={value}
        onChange={handleChange}
        placeholder="Enter your number"
        sx={{
          "& .MuiOutlinedInput-notchedOutline": { border: "none" },
          "&:hover .MuiOutlinedInput-notchedOutline": { border: "none" },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": { border: "none" },
          backgroundColor: "transparent",
          boxShadow: "none",
          padding: "4px 0",
          height: "48px",
          "& .MuiInputBase-root": {
            height: "40px",
            alignItems: "center",
            padding: "0 8px",
          },
          "& .MuiInputAdornment-root": {
            paddingLeft: "4px",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
          },
          "& .MuiIconButton-root": {
            padding: "0",
            height: "32px",
            width: "32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          },
          "& .MuiTelInput-Flag": {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          },
        }}
        className="bg-transparent flex-1"
      />
    </div>
  );
}
