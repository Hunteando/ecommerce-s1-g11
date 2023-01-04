import React from "react";
import s from "./InputFormulario.module.css";

export default function InputFormulario({
  label,
  placeholder,
  tipo,
  onChange,
  value,
  estiloError,
  name,
  id,
  mostrarError,
  msjError,
  onBlur,
  estilos,
  estilosLabel,
  rows,
}) {
  return (
    <div className={`${s.contenedor} ${estilos && estilos}`}>
      <label
        className={`${estilosLabel && s.estilosLabel} ${
          estiloError && s.error
        }`}
        htmlFor={id}
      >
        {label}
      </label>
      <input
        type={tipo}
        rows={rows && rows}
        placeholder={placeholder}
        onChange={onChange ? onChange : undefined}
        onBlur={onBlur}
        value={value}
        className={`${s.input} ${estiloError && s.error}`}
        name={name}
        id={id}
      />
      {mostrarError && (
        <div className={`${s.msjError} ${s.error}`}>{msjError}</div>
      )}
    </div>
  );
}
