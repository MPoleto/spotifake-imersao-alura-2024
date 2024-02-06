import React, { createElement } from "react";
import '../styles/components/_CardList.scss';

  
export function CardList() {
  
  const categories = ['Boas festas', 'Feitos para você', 'Lançamentos', 'Creators', 'Para treinar', 'Podcasts', 'Sertanejo', 'Samba e pagode', 'Funk', 'MPB', 'Rock', 'Hip Hop', 'Indie', 'Relax', 'Música Latina'];

  const cards = categories.map((category, i) => (
    createElement('a',
      { className: 'cards', key: i},
      createElement('div',
        {className: `cards card${i + 1}` },
        createElement('div',
          { className: `img-cover img${i + 1}` }, null),
        createElement('span', null, category)
      )
    )
  ));

  return(
    <div className="offer__scroll-container">
            <div className="offer__list">
              <section className="offer__list-item" id="list-item">
                {cards}
              </section>
            </div>
          </div>
  );
}