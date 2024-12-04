const TermsServiceNavLins = [
  "General",
  "Payment, Cancelation & Refund",
  "Copyright & Usage",
  "Commission process",
];

/**
 * Component for displaying the Terms and Conditions hero section.
 */
function TermsAndConditionsHero() {
  return (
    <div>
      <div className="h-[300px] relative">
        <img
          src="images/fullCom/fullCom_preciousBean.jpg"
          alt="Precious Bean"
          className="object-cover w-full h-full"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(51, 51, 51, 0.38) 100%)",
          }}
        />
      </div>
      <div className="m-10 flex flex-col items-center gap-8">
        <h1 className="fadein w-auto mx-auto text-center text-h1 text-textPrimary font-title font-semibold tracking-wide">
          Terms and Conditions
        </h1>
        <ul className="fadein flex gap-10 mx-auto w-auto text-center text-textSecondary font-title">
          {TermsServiceNavLins.map((link) => (
            <li key={link}>{link}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TermsAndConditionsHero;
