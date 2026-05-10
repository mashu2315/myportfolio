import React from "react";
import { PaintApp } from "../../components/games/PaintApp";
import { OsShell } from "../../components/os/OsShell";

export const PaintPage = () => {
  return (
    <OsShell>
      <PaintApp />
    </OsShell>
  );
};
