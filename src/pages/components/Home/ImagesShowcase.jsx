/**
 * Component to showcase images in a scrolling marquee.
 * @returns {JSX.Element} The ImagesShowcase component.
 */
function ImagesShowcase() {
  const images = [
    {
      src: "images/fullCom/fullCom_whiteKnight/variant1.jpg",
      alt: "White Knight full commission artwork",
      key: "2",
    },

    {
      src: "images/background/bg_alteisen.jpg",
      alt: "Alteisen background artwork",
      key: "3",
    },

    {
      src: "images/fullCom/fullCom_elainaBlueWorld.jpg",
      alt: "Elaina Blue World full commission",
      key: "4",
    },

    {
      src: "images/fullCom/fullCom_crownVsHarvester/variant1.jpg",
      alt: "Crown versus Harvester commission",
      key: "5",
    },

    {
      src: "images/fullCom/fullCom_snowWhite.jpg",
      alt: "Snow White full commission",
      key: "6",
    },

    {
      src: "images/characters/char_redHood.jpg",
      alt: "Red Hood character artwork",
      key: "7",
    },

    {
      src: "images/background/bg_ryukawa.jpg",
      alt: "Ryukawa background artwork",
      key: "8",
    },

    {
      src: "images/characters/char_scarlet/variant1.jpg",
      alt: "Scarlet character artwork",
      key: "9",
    },
    {
      src: "images/characters/char_jinhsi.jpg",
      alt: "Jinhsi character artwork",
      key: "11",
    },
  ];
  return (
    <div className="imagesShowcase">
      <ul>
        {images.map((image) => (
          <li key={image.key}>
            <img src={image.src} alt={image.alt} loading="lazy" decoding="async" />
          </li>
        ))}
      </ul>
      <ul aria-hidden="true">
        {images.map((image) => (
          <li key={image.key}>
            <img src={image.src} alt="" loading="lazy" decoding="async" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ImagesShowcase;
