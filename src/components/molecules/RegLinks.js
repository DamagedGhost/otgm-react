import React from "react";
import TextLink from "../atoms/TextLink";

const RegLinks = () => {
  return (
    <div className="position-absolute top-0 end-0 m-3">
      <TextLink to="login" label="Iniciar sesión" color="primary" />
      <span className="text-secondary"> | </span>
      <TextLink to="registro" label="Registrar usuario" color="secondary" />
    </div>
  );
};

export default RegLinks;
