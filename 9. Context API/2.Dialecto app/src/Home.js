import { useContext, useState } from "react";
import languageContext from "./languageContext";

const content = {
  English:
    "The cat sat lazily on the windowsill, basking in the warm sunshine and occasionally twitching its tail.",
  Hindi:
    "बिल्ली खिड़की पर आलस्य से बैठी थी, गर्म धूप का आनंद ले रही थी और कभी-कभी अपनी पूंछ को हिलाती थी।",
  Marathi:
    "मांजर खिडकीवर आळशीपणे बसली, उबदार सूर्यप्रकाशात बासिंग करत आणि अधूनमधून तिची शेपटी वळवत.",
};

export const Home = () => {
  // get language context here
  const [data, setdata] = useState(content.English);
  const { setLanguage } = useContext(languageContext);

  return (
    <div>
      <div className="language-container">
        <span
          onClick={() => [setLanguage("English"), setdata(content.English)]}
        >
          English
        </span>
        <span onClick={() => [setLanguage("Hindi"), setdata(content.Hindi)]}>
          Hindi
        </span>
        <span
          onClick={() => [setLanguage("Marathi"), setdata(content.Marathi)]}
        >
          Marathi
        </span>
      </div>
      <p>{data}</p>
    </div>
  );
};
