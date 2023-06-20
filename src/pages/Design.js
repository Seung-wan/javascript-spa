import designs from '../assets/jsons/design.json' assert { type: 'json' };

export const Design = () => {
  return (
    /* HTML */
    `
      <div class="design">
        <h2>디자인</h2>
        <ul>
          ${designs.data.map((design) => {
            return (
              /* HTML */
              `<li>
                <div>
                  <img class="design__image" src=${design.imgSrc} alt="logo" />
                </div>
                <div>
                  <div>${design.title}</div>
                  <div>${design.text}</div>
                  <time datetime=${design.createdAt}>${design.createdAt}</time>
                </div>
              </li>`
            );
          })}
        </ul>
      </div>
    `
  );
};
