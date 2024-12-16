import { Card } from "./ui/Card";
import { Cloud } from "./ui/Cloud";

export default function Roadmap() {
  return (
    <div id="roadmap" className="my-10 h-full md:px-20">
      <h1 className="mt-6 text-center text-5xl mb-4 md:text-6xl font-poppins font-bold leading-loose tracking-wider">
        Roadmap
      </h1>

      <Cloud text="01" />
      <Card
        imgPath="/img/mad_prophet.jpg"
        headingOne="Presale Launch"
        headingTwo="International Marketing Campaign"
        headingThree="Social Media Launches"
      />
      <Cloud direction="RIGHT" text="02" />
      <Card
        imgPath="/img/mad_prophet.jpg"
        headingOne="Presale Launch"
        headingTwo="International Marketing Campaign"
        headingThree="Social Media Launches"
      />
    </div>
  );
}
