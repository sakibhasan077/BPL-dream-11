import Flag from "../../assets/image/originFlag.png";
import UserIcon from "../../assets/image/userIcon.png";
import type { PlayerInfoType } from "../../type";

interface PlayerCartType {
  playerData: PlayerInfoType;
}

const AvailablePlayerInfo = ({ playerData }: PlayerCartType) => {
  console.log(playerData);
  return (
    <div>
      <div>
        <div className="border-2 border-[#e7e7e7] rounded-[10px] p-6">
          <div>
            <img
              className="rounded-[10px] h-60"
              src={playerData.playerImage}
              alt={`${playerData.playerName} Image`}
            />
          </div>

          <h3 className="flex gap-4 mt-6.25 items-center">
            <img className="w-6 h-6" src={UserIcon} alt="User Icon " />
            <span className="text-[20px] font-semibold">
              {playerData.playerName}
            </span>
          </h3>

          <div className="flex justify-between items-center mt-4">
            <div className="flex gap-2 items-center">
              <img className="w-5 h-5 " src={Flag} alt="Origin Flag" />
              <span className="text-[#898989] ">{playerData.playerOrigin}</span>
            </div>
            <p className="bg-[#f3f3f3] px-4 py-2 rounded-[10px] text-[#131313] text-[14px] ">
              {playerData.playerType}
            </p>
          </div>

          <hr className="text-[#e7e7e7] mt-4 mb-4" />

          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold  text-[#131313] ">Rating:</h3>
            <span className="text-[#131313b5]">{playerData.rating}</span>
          </div>

          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold  text-[#131313] ">Batting Style: </h3>
            <span className="text-[#131313b5]">{playerData.battingStyle}</span>
          </div>

          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold  text-[#131313] ">
              Price: ${playerData.price}
            </h3>
            <button
              className={`px-4 py-2.25 border-2 border-[#e7e7e7] rounded-[10px]  cursor-pointer bg-green-700 text-white font-bold "hover:bg-green-900 `}
            >
              Choose Player
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailablePlayerInfo;
