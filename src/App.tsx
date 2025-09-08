import { useState } from "react";
import Star from "./assets/Star.svg";
import thanku from "./assets/thanku.svg";

export default function App() {
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const ratings = [1, 2, 3, 4, 5];

  return (
    <div className="min-h-screen w-full bg-veryDarkBlue flex justify-center items-center px-4">
      <div className="w-[327px] h-[360px] md:w-[412px] md:h-[416px] p-6 md:p-8 rounded-[30px] bg-veryBlack/100 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] flex flex-col">
        {!submitted ? (
          <>
            <div className="w-10 h-10 rounded-full bg-darkBlue flex items-center justify-center mb-6">
              <img src={Star} alt="star" className="w-4 h-4" />
            </div>

            <div className="flex flex-col gap-6">
              <h1 className="text-pureWhite text-[28px] md:text-[28px] font-bold leading-tight">How did we do?</h1>
              <p className="text-lightGray text-[15px] leading-6">
                Please let us know how we did with your support request. All feedback is
                appreciated to help us improve our offering!
              </p>
              <div className="flex items-center justify-between">
                {ratings.map((rating) => {
                  const isSelected = selectedRating === rating;
                  return (
                    <button
                      key={rating}
                      type="button"
                      onClick={() => setSelectedRating(rating)}
                      aria-label={`Rate ${rating}`}
                      className={[
                        "w-12 h-12 rounded-full grid place-items-center",
                        "text-[14px] font-bold",
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
                onClick={() => setSubmitted(true)}
                className="w-full h-12 rounded-full bg-orange text-pureWhite uppercase tracking-[2px] text-[12px] font-bold hover:bg-pureWhite hover:text-orange transition-colors duration-200 disabled:opacity-50"
                disabled={selectedRating === null}
              >
                Submit
              </button>
            </div>
          </>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center text-center">
            <img src={thanku} alt="Thank you" className="mb-6 w-[162px] h-auto" />
            <div className="mb-4">
              <span className="px-4 py-2 rounded-full bg-darkBlue text-orange text-[14px]">You selected {selectedRating} out of 5</span>
            </div>
            <h2 className="text-pureWhite text-[24px] font-bold mb-2">Thank you!</h2>
            <p className="text-lightGray text-[15px] leading-6 px-2">
              We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
