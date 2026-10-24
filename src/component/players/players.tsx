import { use, useState } from "react";
import type { PlayerInfoType } from "../../type";
import AvailablePlayerInfo from "./AvailablePlayerInfo";

interface PlayerCartType {
  playerData: Promise<PlayerInfoType[]>;
  choosePlayer: PlayerInfoType[],
  setChoosePlayer: React.Dispatch<React.SetStateAction<PlayerInfoType[]>>;
}

const Players = ({ playerData,choosePlayer,setChoosePlayer }: PlayerCartType) => {
  const [playerOption, setPlayerOption] = useState<boolean>(false);
  const data = use(playerData);
  const handleSelect = () => {
    setPlayerOption(true);
  };
  const handleAvailable = () => {
    setPlayerOption(false);
  };
  return (
    <section className="container mx-auto mt-24 font-sora">
      {/* Heading and buttons */}
      <div className="flex justify-between items-center">
        {/* heading */}
        <h2 className="text-[28px] font-bold text-[#131313]">
          Available Players
        </h2>
        {/* Buttons */}
        <div className="text-[rgba(19,19,19,0.6)] border border-[rgba(19,19,19,0.1)] rounded-xl overflow-hidden">
          <button
            className={`py-3.5 px-7 ${playerOption || "bg-[#E7FE29] text-black font-bold"}`}
            onClick={handleAvailable}
          >
            Available
          </button>
          <button
            className={`py-3.5 px-7 ${playerOption && "bg-[#E7FE29] text-black font-bold"}`}
            onClick={handleSelect}
          >
            Selected(0)
          </button>
        </div>
      </div>

      {/* Player Carts  */}
      {!playerOption ? (
        <div className="grid grid-cols-3 gap-4 mt-9">
          {data.map((item) => (
            <AvailablePlayerInfo playerData={item} choosePlayer= {choosePlayer}  setChoosePlayer = {setChoosePlayer}></AvailablePlayerInfo>
          ))}
        </div>
      ) : (
        <div className="mt-9"></div>
      )}
    </section>
  );
};

export default Players;
