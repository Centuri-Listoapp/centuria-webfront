"use client";
import React from "react";

const LinkTermsConditions = () => {
  //https://wordpress-1254678-5496451.cloudwaysapps.com/privacy-policy-2/
  const goTermsConditions = () => {
    window.open("./terms-conditions", "_blank");
  };

  return (
    <strong className="term-link" onClick={() => goTermsConditions()}>
      Términos y condiciones
    </strong>
  );
};

export default LinkTermsConditions;
