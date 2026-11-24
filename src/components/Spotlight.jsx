import AuthorCard from './AuthorCard';

// The golf interview: headline, questions and answers, author card.
// (The photos and pull quote live in SpotlightPhotos.jsx, so they can sit in their own column.)
// Props: data (the object exported from spotlight.js)
function Spotlight(props) {
  const data = props.data;

  return (
    <div className="panel panel-warm spotlight-panel">
      <span className="article-kicker">{data.kicker}</span>
      <h3 className="spotlight-headline">{data.headline}</h3>

      {/* Bold question headings, like the KOMA interview */}
      <div className="spotlight-columns">
        {data.qa.map((item, index) => (
          <div key={index} className="qa-block">
            <p className="qa-question">{item.question}</p>
            <p className="panel-text">{item.answer}</p>
          </div>
        ))}
      </div>

      <AuthorCard
        name={data.author.name}
        photo={data.author.photo}
        role={data.author.role}
      />
    </div>
  );
}

export default Spotlight;