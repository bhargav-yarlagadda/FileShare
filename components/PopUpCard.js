import { FaTimes } from "react-icons/fa";

export const PopUpCard = ({ message, handler }) => {
  return (
    <div className="absolute top-20 md:right-2 max-w-96 p-4 border border-red-500 bg-red-600 text-white rounded-lg shadow-lg flex items-start gap-3 animate-slideFromRight transition-all">
      <div className="flex-grow">
        <p className="font-medium">{message}</p>
      </div>
      <button
        onClick={() => handler(false)}
        className="text-white hover:text-gray-300"
        aria-label="Close Alert"
      >
        <FaTimes />
      </button>
    </div>
  );
};