import React from "react";
import { SnakeGame } from "../../components/games/SnakeGame";
import { OsShell } from "../../components/os/OsShell";

export const SnakePage = () => {
  return (
    <OsShell>
      <SnakeGame />
    </OsShell>
  );
};
