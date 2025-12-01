"use client";
import React from "react";

const LinkTermsConditions = () => {
  const goTermsConditions = () => {
    window.open(
      "https://wordpress-1254678-5496451.cloudwaysapps.com/privacy-policy-2/",
      "_blank"
    );
  };

  return (
    <strong className="term-link" onClick={() => goTermsConditions()}>
      Términos y condiciones
    </strong>
  );
};

export default LinkTermsConditions;
