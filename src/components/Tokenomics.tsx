import PartnershipGrid from "./PartnershipGrid";
import { TokenInfoCard } from "./TokenInfoCard";

export default function Tokenomics() {
  return (
    <div
      id="tokenomics"
      className="my-10 h-full md:px-20 flex flex-col justify-center items-center"
    >
      <h1 className="my-10 text-center text-5xl mb-4 md:text-6xl font-poppins font-bold leading-loose">
        Tokenomics
      </h1>

      <div className="my-10 flex flex-col md:flex-row gap-8 justify-center items-center">
        <TokenInfoCard
          title="Token Supply"
          value="1.000.000.000"
          bgColor="bg-yellow-400"
        />
        <TokenInfoCard
          title="Token Address"
          value="Cs5qn4ePDqnK6tuStJpSUmk7f9TbrvU68nsWhF4hmoon"
          bgColor="bg-white"
          isCopyable={true}
          truncate={true}
        />
      </div>

      <PartnershipGrid />
    </div>
  );
}
