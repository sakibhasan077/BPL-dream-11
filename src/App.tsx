import { Suspense } from "react";
import HeroSection from "./component/hero-section/HeroSection";
import Navbar from "./component/navbar/Navbar";
import Players from "./component/players/players";
import type { PlayerInfoType } from "./type";

const getData = async (): Promise<PlayerInfoType[]> => {
  const res = await fetch("/playersData.json");

  if (!res.ok) {
    throw new Error("Failed to fetch player data");
  }

  const data: PlayerInfoType[] = await res.json();

  return data;
};

function App() {
  return (
    <Suspense fallback = {<li>Loading...</li>}>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <Players playerData = {getData()}></Players>
    </Suspense>
  );
}

export default App;
