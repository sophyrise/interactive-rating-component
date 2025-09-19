import thankuIcon from "../thanku.svg";

type ResultProps = {
  selected: number;
};

function Result({ selected }: ResultProps) {
  return (
    <div className="text-center flex flex-col items-center">
      <img src={thankuIcon} alt="thank you" className="mb-6" />
      <div className="bg-darkBlue text-orange px-4 py-2 rounded-[20px] mb-6">
        You selected {selected} out of 5
      </div>
      <h2 className="text-pureWhite text-[28px] font-bold mb-3">Thank you!</h2>
      <p className="text-lightGray text-center">
        We appreciate you taking the time to give a rating. If you ever need more
        support, don't hesitate to get in touch!
      </p>
    </div>
  );
}

export default Result;

