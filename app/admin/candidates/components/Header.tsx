"use client";
import React from "react";
import Image from "next/image";
import Button from "@/app/components/button/Button";
import authService from "@/app/services/authService";
import { useRouter } from "next/navigation";
import { logoutAction } from "@/app/utils/actions";

const Header = () => {
  const router = useRouter();

  const logout = () => {
    authService.loginData = undefined;
    logoutAction();
    router.replace("/login");
  };

  return (
    <header className="admin-header ">
      <Image src="/logo.png" alt="logo" width={120} height={37.03} />
      <Button color="text" onClick={logout}>
        Cerrar sesión
      </Button>
    </header>
  );
};

export default Header;
