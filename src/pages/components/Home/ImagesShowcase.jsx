/**
 * Component to showcase images in a scrolling marquee.
 * @returns {JSX.Element} The ImagesShowcase component.
 */
function ImagesShowcase() {
  const images = [
    {
      src: "images/fullCom/fullCom_whiteKnight/variant1.jpg",
      alt: "fullCom_whiteKnight_variant1",
      key: "2",
    },

    { src: "images/background/bg_alteisen.jpg", alt: "bg_alteisen", key: "3" },

    {
      src: "images/fullCom/fullCom_elainaBlueWorld.jpg",
      alt: "fullCom_elainaBlueWorld",
      key: "4",
    },

    {
      src: "images/fullCom/fullCom_crownVsHarvester/variant1.jpg",
      alt: "fullCom_crownVsHarvester_variant1",
      key: "5",
    },

    {
      src: "images/fullCom/fullCom_snowWhite.jpg",
      alt: "fullCom_snowWhite",
      key: "6",
    },

    {
      src: "images/characters/char_redHood.jpg",
      alt: "char_redHood",
      key: "7",
    },

    { src: "images/background/bg_ryukawa.jpg", alt: "ryukawa", key: "8" },

    {
      src: "images/characters/char_scarlet/variant1.jpg",
      alt: "char_scarlet_variant1",
      key: "9",
    },

    {
      src: "images/fullCom/fullCom_whiteKnight/variant1.jpg",
      alt: "fullCom_whiteKnight_variant1",
      key: "10",
    },

    { src: "images/characters/char_jinhsi.jpg", alt: "char_jinhsi", key: "11" },
  ];
  return (
    <div className="bg-[#add8e6]">
      <div className="h-[80px]" />
      <div className="logos fadein">
        <div className="logos-slide">
          <div className="scroll">
            {images.map((image) => (
              <img
                key={image.key}
                src={image.src}
                alt={`Marquee ${image.key}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImagesShowcase;
