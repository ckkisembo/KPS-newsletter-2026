import { useState, useRef } from 'react';
import { formatText } from '../utils/formatText';
import AuthorCard from './AuthorCard';

// Shows one article at a time, with a tab for each.
// Props: articles (array from articles.js) and author (object from articles.js)
function ArticleTabs(props) {
  // Same idea as currentPage in App.jsx: state remembers which article is showing
  const [activeId, setActiveId] = useState(props.articles[0].id);
  const panelRef = useRef(null);

  const article = props.articles.find(a => a.id === activeId);
  const companion = props.articles.find(a => a.id !== activeId);

  function showArticle(id) {
    setActiveId(id);
    // Bring the top of the article back into view after switching
    panelRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <div className="panel panel-light" ref={panelRef}>

      <span className="article-kicker">{props.author.column}</span>

      {/* Tabs */}
      <div className="article-tabs" role="tablist">
        {props.articles.map(a => (
          <button
            key={a.id}
            type="button"
            role="tab"
            aria-selected={a.id === activeId}
            className={`article-tab ${a.id === activeId ? 'active' : ''}`}
            onClick={() => setActiveId(a.id)}
          >
            {a.tab}
          </button>
        ))}
      </div>

      {/* Headline and byline */}
      <h3 className="article-title">{article.title}</h3>
      <p className="article-byline">By {props.author.name}</p>

      {/* The article text — CSS flows it into as many columns as the space allows */}
      <div className="article-body">
        {article.paragraphs.map((text, index) => (
          <p key={index}>{formatText(text)}</p>
        ))}
      </div>

      {/* Author card, with a link to the companion piece */}
      <AuthorCard
        name={props.author.name}
        photo={props.author.photo}
        role={article.signoff ? `${props.author.column} · ${article.signoff}` : props.author.column}
        email={props.author.email}
      >
        <button
          type="button"
          className="companion-link"
          onClick={() => showArticle(companion.id)}
        >
          Read the companion piece: {companion.title} →
        </button>
      </AuthorCard>

    </div>
  );
}

export default ArticleTabs;
