import thankuIcon from "../assets/thanku.svg";

interface ResultProps {
  rating: number;
}

export default function Result({rating}: ResultProps) {
  return (
    <div className="text-center flex flex-col items-center">
      <img src={thankuIcon} alt="thank you" />
      <div className="bg-darkBlue text-orange px-4 py-2 rounded-[20px] mb-6">
        You selected {rating} out of 5
      </div>
      <h2 className="text-pureWhite text-[28px] font-bold mb-3">Thank you!</h2>
      <p className="text-lightGray text-center">
        We appreciate you taking the time to give a rating. If you ever need more
        support, don't hesitate to get in touch!
      </p>
    </div>
  );
}
