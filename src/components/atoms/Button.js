import React from "react";

const Button = ({ label, text, href, onClick, variant = "primary", type = "button", fullWidth = false }) => {
  const content = label || text; // permite usar ambas props

  const classNames = `btn btn-${variant} ${fullWidth ? "w-100" : ""}`;

  // Si hay un href, usamos <a>. Si no, usamos <button>
  return href ? (
    <a href={href} onClick={onClick} className={classNames}>
      {content}
    </a>
  ) : (
    <button type={type} onClick={onClick} className={classNames}>
      {content}
    </button>
  );
};

export default Button;