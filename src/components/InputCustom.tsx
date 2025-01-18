import { TextField } from "@mui/material";

type InputProps = {
  variant: "outlined" | "filled" | "standard";
  bordeColor?: string;
  labelColor?: string;
  textColor?: string;
  label?: string;
  bg?: string;
}

export default function InputCustom({variant, bordeColor, labelColor, textColor, label, bg}: InputProps) {
  return (
    <TextField
      label={label}
      variant={variant}
      sx={{
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: bordeColor, // Color del borde
          },
          "&:hover fieldset": {
            borderColor: bordeColor, // Color del borde al pasar el mouse
          },
          "&.Mui-focused fieldset": {
            borderColor: bordeColor, // Color del borde cuando está enfocado
          },
        },
        "& .MuiInputLabel-root": {
          color: labelColor,        // Color del texto de la etiqueta
        },
        "& .MuiInputLabel-root.Mui-focused": {
          color: labelColor,        // Color de la etiqueta cuando está enfocada
        },
        "& .MuiOutlinedInput-input": {
          color: textColor,        // Color del texto ingresado
          backgroundColor: bg,      // Fondo del campo de texto
        },
      }}
    />
  )
}
