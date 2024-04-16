import React, { FC } from "react";
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { BookIcon, TemplateIcon } from "@site/static/icons";
import Link from "@docusaurus/Link";
import "./styles.css";

interface LanguagesProps {
  languages?: string[];
}

const Languages: FC<LanguagesProps> = (props) => {
  return (
    <>
      {Object.entries(props.languages).length > 0 && (
        <div className="languages">
          {Object.entries(props.languages).map(([_, language], key) => (
            <div
              className="language button button--outline button--primary button--disabled"
              key={key}
            >
              {language}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

const LibrariesSection: FC = () => {
  const { siteConfig } = useDocusaurusContext()
  const bookList = siteConfig.customFields.bookList as any[]
  return (
    <div className="libraries__cards" >
      {bookList.map(({ id, name, desc, tags, to, icon }) => (
        <Link className="libraries__card" to={to} key={id}>
        <div className="libraries__section">
          <div className="libraries__head">
            <div className="libraries__icon">
              {id === 'template' ? <TemplateIcon /> : icon ? <img src={icon} /> : <BookIcon />}
            </div>
            <Languages languages={tags} />
          </div>
          <h3 className="libraries__header">{name}</h3>
          <p className="libraries__desc">{desc}</p>
        </div>
      </Link>
      ))}
    </div>
  )
};

export default function HomepageFeatures(): JSX.Element {
  return (
    <div className="homepage">
      <div className="homepage__section">
        <div className="homepage__container">
          <LibrariesSection />
        </div>
      </div>
    </div>
  );
}
