import { use, useState } from "react";
import type { PlayerInfoType } from "../../type";
import AvailablePlayerInfo from "./AvailablePlayerInfo";
import SelectedPlayerInfo from "./SelectedPlayerInfo";

interface PlayerCartType {
  playerData: Promise<PlayerInfoType[]>;
  choosePlayer: PlayerInfoType[],
  setChoosePlayer: React.Dispatch<React.SetStateAction<PlayerInfoType[]>>;
  credit: number;
  setCredit: React.Dispatch<React.SetStateAction<number>>;
}

const MAX_PLAYERS = 6;

const Players = ({ playerData,choosePlayer,setChoosePlayer,credit,setCredit }: PlayerCartType) => {
  const [playerOption, setPlayerOption] = useState<boolean>(false);
  const data = use(playerData);
  const handleSelect = () => {
    setPlayerOption(true);
  };
  const handleAvailable = () => {
    setPlayerOption(false);
  };
  const handleRemove = (id: number) => {
    const removedPlayer = choosePlayer.find((player) => player.id === id);
    // Refund the removed player's price back to the credit
    if (removedPlayer) {
      setCredit((prev) => prev + removedPlayer.price);
    }
    setChoosePlayer((prev) => prev.filter((player) => player.id !== id));
  };
  return (
    <section className="container mx-auto mt-24 font-sora">
      {/* Heading and buttons */}
      <div className="flex justify-between items-center">
        <h2 className="text-[28px] font-bold text-[#131313]">
          {playerOption
            ? `Selected Player (${choosePlayer.length}/${MAX_PLAYERS})`
            : "Available Players"}
        </h2>
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
            Selected Player
          </button>
        </div>
      </div>

      {/* Player Carts  */}
      {!playerOption ? (
        <div className="grid grid-cols-3 gap-4 mt-9">
          {data.map((item) => (
            <AvailablePlayerInfo
              key={item.id}
              playerData={item}
              choosePlayer={choosePlayer}
              setChoosePlayer={setChoosePlayer}
              credit={credit}
              setCredit={setCredit}
              isFull={choosePlayer.length >= MAX_PLAYERS}
            ></AvailablePlayerInfo>
          ))}
        </div>
      ) : (
        <div className="mt-9">
          {choosePlayer.length === 0 ? (
            <p className="text-[#898990]">
              No player selected yet. Pick players from the Available tab.
            </p>
          ) : (
            <div className="flex flex-col gap-4">
              {choosePlayer.map((player) => (
                <SelectedPlayerInfo
                  key={player.id}
                  playerData={player}
                  onRemove={handleRemove}
                />
              ))}
            </div>
          )}
          <button
            onClick={handleAvailable}
            className="mt-6 px-5 py-2.5 rounded-[10px] border-2 border-[#E7FE29] bg-[#E7FE29] text-[#131313] font-bold cursor-pointer"
          >
            Add More Player
          </button>
        </div>
      )}
    </section>
  );
};

export default Players;
