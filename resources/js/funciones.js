export function insertCard(astro, i, astros){
     const card = createCard(astro);
     // controlView(card);
     renderCard(card);
 }
 
 
 function createCard(astro){
     let divCard = document.createElement('div');
     divCard.classList.add('cartas');
     const {nombre, descripcion, imagenUrl} = astro;
 
     divCard.innerHTML = `
     <div class="contenido">
         <img src=${imagenUrl}/>
         <h3>${nombre}</h2>
         <p>${descripcion}</p>
     </div>`;
     return divCard;
 }
 
//  function controlView(card){
//      if (getViews(card) > 100){
//          const trendingParagraph = document.createElement('h3');
//          trendingParagraph.classList.add('more-views');
//          trendingParagraph.textContent = 'Tendencia';
//          card.appendChild(trendingParagraph);
//      }
//  }
 
 
//  function getViews(card) {
//      let paragraph = card.querySelectorAll('.view-card');
//      let paragraphViews = paragraph[0];
//      let contentView = paragraphViews.textContent
//      let viewValue = contentView.split(' ')[0];
//      return parseInt(viewValue);
//  }
 
 function renderCard(card){
     const container = document.querySelector('#containerCatalogo');
     container.appendChild(card);
 }