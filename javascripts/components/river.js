import utilities from '../helpers/utilities.js';
import riverData from '../helpers/data/riverData.js'

const buildCard = (bear) => {
    const domString = `
    <div class="card" style="width: 18rem;">
    <img class="card-img-top" src="${bear.image}" alt="Bearvatar">
    <div class="card-body">
      <h5 class="card-title">${bear.name}</h5>
    </div>
  </div>
    `;
    return domString;
}

const addToRiver = (newBear) => {
  riverData.setRiver(newBear);
  riverToDom();
}

const riverToDom = () => {
  const river = riverData.getRiver();
  let domString = '';
  for (let i = 0; i < river.length; i++) {
    const bear = river[i];
    domString += buildCard(bear);
  }
    // bears.forEach(buildCard);
    utilities.printToDom('#river', domString);
}

export default { addToRiver };