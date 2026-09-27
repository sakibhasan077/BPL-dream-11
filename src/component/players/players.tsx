const Players = () => {
  return (
    <main className="container mx-auto mt-24">
      {/* Heading and buttons */}
      <div className="flex justify-between items-center">
        {/* heading */}
        <h2 className="text-[28px] font-bold text-[#131313]">Available Players</h2>
        {/* Buttons */}
        <div className="text-[rgba(19,19,19,0.6)] border border-[rgba(19,19,19,0.1)] rounded-xl">
          <button className="py-3.5 px-7">Available</button>
          <button className="py-3.5 px-7">Selected(0)</button>
        </div>
      </div>
    </main>
  );
};

export default Players;