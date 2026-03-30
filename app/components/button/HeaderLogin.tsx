"use client";
import React from "react";
import Button from "./Button";
import { useRouter } from "next/navigation";

const HeaderLogin = () => {
  const router = useRouter();

  const goLogin = () => {
    router.push("/login");
  };

  return (
    <Button color="text" onClick={goLogin}>
      Iniciar sesión
    </Button>
  );
};

export default HeaderLogin;
