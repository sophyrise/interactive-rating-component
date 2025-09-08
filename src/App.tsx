import { useState } from "react";
import Star from "./assets/Star.svg";

export default function App() {
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const ratings = [1, 2, 3, 4, 5];

  return (
    <div className="min-h-screen w-full bg-veryDarkBlue flex justify-center items-center px-4">
      <div className="w-[327px] md:w-[412px] p-6 md:p-8 rounded-[30px] bg-veryBlack/100 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]">
        <div className="w-10 h-10 rounded-full bg-darkBlue flex items-center justify-center mb-6">
          <img src={Star} alt="star" className="w-4 h-4" />
        </div>

        <h1 className="text-pureWhite text-[24px] md:text-[28px] font-bold mb-3">How did we do?</h1>
        <p className="text-lightGray text-[14px] leading-6 mb-6">
          Please let us know how we did with your support request. All feedback is
          appreciated to help us improve our offering!
        </p>

        <div className="flex items-center justify-between mb-6">
          {ratings.map((rating) => {
            const isSelected = selectedRating === rating;
            return (
              <button
                key={rating}
                type="button"
                onClick={() => setSelectedRating(rating)}
                aria-label={`Rate ${rating}`}
                className={[
                  "w-10 h-10 md:w-12 md:h-12 rounded-full grid place-items-center",
                  "text-[14px] md:text-[16px] font-bold",
                  "transition-colors duration-200",
                  isSelected
                    ? "bg-lightGray text-pureWhite"
                    : "bg-darkBlue text-lightGray hover:bg-orange hover:text-pureWhite focus:bg-orange focus:text-pureWhite",
                ].join(" ")}
              >
                {rating}
              </button>
            );
          })}
        </div>

        <button
          type="button"
          className="w-full h-11 rounded-full bg-orange text-pureWhite uppercase tracking-[2px] text-[12px] font-bold hover:bg-pureWhite hover:text-orange transition-colors duration-200"
          disabled={selectedRating === null}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
