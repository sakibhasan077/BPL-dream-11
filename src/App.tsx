import { Suspense, useState } from "react";
import HeroSection from "./component/hero-section/HeroSection";
import Navbar from "./component/navbar/Navbar";
import Players from "./component/players/players";
import type { PlayerInfoType } from "./type";

// Fetch Data from API
const getData = async (): Promise<PlayerInfoType[]> => {
  const res = await fetch("/playersData.json");

  if (!res.ok) {
    throw new Error("Failed to fetch player data");
  }

  const data: PlayerInfoType[] = await res.json();

  return data;
};

function App() {
  // State
  const [choosePlayer, setChoosePlayer] = useState<PlayerInfoType[]>([])
  console.log(choosePlayer);
  return (
    <Suspense fallback = {<li>Loading...</li>}>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <Players playerData = {getData()} choosePlayer = {choosePlayer} setChoosePlayer = {setChoosePlayer}></Players>
    </Suspense>
  );
}

export default App;
