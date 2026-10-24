import type { PlayerInfoType } from "../../type";

interface SelectedPlayerInfoType {
  playerData: PlayerInfoType;
  onRemove: (id: number) => void;
}

const SelectedPlayerInfo = ({ playerData, onRemove }: SelectedPlayerInfoType) => {
  return (
    <div className="flex items-center justify-between border-2 border-[#e7e7e7] rounded-[10px] p-4 pr-6">
      <div className="flex items-center gap-4">
        <img
          className="w-16 h-16 rounded-[10px] object-cover"
          src={playerData.playerImage}
          alt={`${playerData.playerName} Image`}
        />
        <div>
          <h3 className="text-[18px] font-semibold text-[#131313]">
            {playerData.playerName}
          </h3>
          <p className="text-[14px] text-[#898990] mt-1">
            {playerData.battingStyle} Bat
          </p>
        </div>
      </div>
      <button
        onClick={() => onRemove(playerData.id)}
        aria-label={`Remove ${playerData.playerName}`}
        className="text-[#f00e0e] cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 6h18" />
          <path d="M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2" />
          <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
          <path d="M10 11v6" />
          <path d="M14 11v6" />
        </svg>
      </button>
    </div>
  );
};

export default SelectedPlayerInfo;
