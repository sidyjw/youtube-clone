import React from "react";
import DrawerYt from "./DrawerYt";
import Header from "./Header";

export default function Home() {
  return (
    <>
      <DrawerYt header={<Header />} />
    </>
  );
}
