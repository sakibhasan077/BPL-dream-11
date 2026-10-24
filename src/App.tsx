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

// Fetch data once at module load: creating the promise inside the component
// would re-fetch and re-suspend <Suspense> on every state change.
const playerPromise: Promise<PlayerInfoType[]> = getData();

function App() {
  // State
  const [choosePlayer, setChoosePlayer] = useState<PlayerInfoType[]>([])
  return (
    <Suspense fallback = {<li>Loading...</li>}>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <Players playerData = {playerPromise} choosePlayer = {choosePlayer} setChoosePlayer = {setChoosePlayer}></Players>
    </Suspense>
  );
}

export default App;
