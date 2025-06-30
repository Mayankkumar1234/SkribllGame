const players = [
  { id: 1, name: "Cyfer", points: 2720, color: "bg-red-500" },
  { id: 2, name: "Bebo mai bebo", points: 2295, color: "bg-pink-500" },
  { id: 3, name: "s a r t 🍏", points: 1670, color: "bg-green-600" },
  { id: 4, name: "Ff", points: 825, color: "bg-yellow-500" },
  { id: 5, name: "Feeling nthg", points: 555, color: "bg-gray-500" },
  { id: 6, name: "Mayank (You)", points: 120, color: "bg-purple-600" },
];

const Users = () => {
  return (
    <div className="w-1/5 bg-white text-black p-2 border-r-2 border-black  h-[25%] ">
      {players.map((player, index) => (
        <div key={player.id} className="flex items-center justify-between mb-2">
          <span className="text-sm font-bold">#{index + 1}</span>
          <div className="flex items-center space-x-2">
            <div className={`w-6 h-6 rounded-full ${player.color}`}></div>
            <span className="text-sm">{player.name}</span>
            <span className="text-xs text-gray-600">{player.points} pts</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
