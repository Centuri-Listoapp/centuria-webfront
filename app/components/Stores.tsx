"use client";
import { CONFIG } from "@/app/constants/globals";
import Image from "next/image";
import React from "react";

type Props = {
  extraClass?: string;
};

const Stores = ({ extraClass }: Props) => {
  const openLink = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div className={`buttons ${extraClass}`}>
      <div className="store" onClick={() => openLink(CONFIG.APP_STORE)}>
        <Image src="/apple.png" alt="app" width={30} height={30} />
        <span>Descarga en App Store</span>
      </div>
      <div className="store" onClick={() => openLink(CONFIG.PLAY_STORE)}>
        <Image src="/playstore.png" alt="app" width={30} height={30} />
        <span>Descarga en Google Play</span>
      </div>
    </div>
  );
};

export default Stores;
