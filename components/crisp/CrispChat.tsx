"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("9eea103d-e706-45e4-a035-fcbb570e1012");
  }, []);

  return null;
};
