import "./SectionHeading.css";

const SectionHeading = ({ badgeText, titleText, titleHighlight }) => {
  return (
    <div className="section-heading-container">
      {badgeText && (
        <div className="section-badge">
          <span>{badgeText}</span>
        </div>
      )}
      <h2 className="section-title">
        {titleText} {titleHighlight && <span className="highlight">{titleHighlight}</span>}
      </h2>
      <div className="section-line"></div>
    </div>
  );
};

export default SectionHeading;
