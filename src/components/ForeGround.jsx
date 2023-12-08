import { useRef } from "react";
import Card from "./Card";

const ForeGround = () => {
  const ref = useRef(null);

  const data = [
    {
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing Sandip.",
      filesize: ".9mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "blue",
      },
    },
    {
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing Sandip.",
      filesize: ".9mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "green",
      },
    },
  ];
  return (
    <div
      ref={ref}
      className="fixed top-0 left -0 z-[3] w-full h-full flex gap-5 flex-wrap p-5"
    >
      {data.map((item, index) => (
        <Card data={item} key={index} reference={ref} />
      ))}
    </div>
  );
};

export default ForeGround;
