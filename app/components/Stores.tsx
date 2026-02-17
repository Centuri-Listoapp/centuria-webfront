"use client";
import { CONFIG } from "@/app/constants/globals";
import Image from "next/image";
import React, { useEffect } from "react";
import { getOperatingSystem, isMobileDevice } from "../utils/utils";

type Props = {
  extraClass?: string;
  openStore?: boolean;
};

const Stores = ({ extraClass, openStore = false }: Props) => {
  const openLink = (url: string, so: string) => {
    if (isMobileDevice()) {
      window.open(`${CONFIG.WEBSITE_URL}/referred-code`);
      setTimeout(() => {
        window.open(url, "_blank");
      }, 500);
    } else {
      window.open(url, "_blank");
    }
  };

  useEffect(() => {
    if (openStore) {
      const so = getOperatingSystem();
      var url: string | undefined;
      if (so == "Android") {
        url = CONFIG.PLAY_STORE;
      } else if (so == "iOS") {
        url = CONFIG.APP_STORE;
      }
      if (url) window!.location.href = url;
    }
  }, []);

  return (
    <div className={`buttons ${extraClass}`}>
      <div className="store" onClick={() => openLink(CONFIG.APP_STORE, "iOS")}>
        <Image src="/apple.png" alt="app" width={30} height={30} />
        <span>Descarga en App Store</span>
      </div>
      <div
        className="store"
        onClick={() => openLink(CONFIG.PLAY_STORE, "Android")}
      >
        <Image src="/playstore.png" alt="app" width={30} height={30} />
        <span>Descarga en Google Play</span>
      </div>
    </div>
  );
};

export default Stores;
