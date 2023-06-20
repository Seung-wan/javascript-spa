import techs from '../assets/jsons/tech.json' assert { type: 'json' };

export const Tech = () => {
  return (
    /* HTML */
    `
      <div class="tech">
        <h2>테크</h2>
        <ul>
          ${techs.data.map((tech) => {
            return (
              /* HTML */
              `<li>
                <div>
                  <img class="tech__image" src=${tech.imgSrc} alt="logo" />
                </div>
                <div>
                  <div>${tech.title}</div>
                  <div>${tech.text}</div>
                  <time datetime=${tech.createdAt}>${tech.createdAt}</time>
                </div>
              </li>`
            );
          })}
        </ul>
      </div>
    `
  );
};
