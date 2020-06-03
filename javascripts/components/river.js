import utilities from '../helpers/utilities.js';
import riverData from '../helpers/data/riverData.js';
// import fatBear from '../components/fatBearAward.js';

const river = riverData.getRiver();

const createFishingHistory = (bearIndex) => {
  let domString = `
      <p class="bear-history-summary">Success/Attempts: ${river[bearIndex].success}/${river[bearIndex].fishAttempts.length} </p>
      <p>Fishing History:  
      <ol>`;
  for (let i = 0; i < river[bearIndex].fishAttempts.length; i++) {
    domString += `<li>${river[bearIndex].fishAttempts[i]}</li>`
  };
  domString +='</ol></p>';
  return domString;
}


const fatBearList = () => {
  const fullBears = river.slice().sort((a, b) => (b.success) - (a.success));
  const topBears = fullBears.slice(0,4);
  let winners = [];
  for (let i = 0; i < topBears.length; i++) {
    if (topBears[i].success !== 0) { 
      winners.push({"name": topBears[i].name, "fish": topBears[i].success}) 
      }
    }
  if (winners.length === 4) {
    if (winners[2].fish !== winners[3].fish) {
      winners.pop();
    }
  }
  let domString = '<ul>';
  for (let i = 0; i < winners.length; i++) {
    if (i === 0 || winners[i].fish !== winners[i-1].fish) {
      let trophy = i;
    }
    else {
      let trophy = (i-1);
    }
    domString += `<li><i class="fas fa-trophy trophy${i}"></i> ${winners[i].name} (${winners[i].fish} fish)</li>`    
  }

  domString += '</ul>'

  return domString;
}
  


const addSuccessfulFishingAttempt = (event) => {
  const bearIndex = Number((event.target.id).replace('success', ''));
  river[bearIndex].success++;
  river[bearIndex].fishAttempts.push(`🐟 ${utilities.getDate()}`);
  $(`#history-area-${bearIndex}`).html(createFishingHistory(bearIndex));
  const fattestBears = fatBearList();
  $('#fat-winners').html(fattestBears); 
  // console.log(fattestBears);
}

const addFailedFishingAttempt = (event) => {
  const bearIndex = Number((event.target.id).replace('failure', ''));
  river[bearIndex].fishAttempts.push(`⛔️ ${utilities.getDate()}`);
  $(`#history-area-${bearIndex}`).html(createFishingHistory(bearIndex));
}

const buildCard = (bear, index) => {
    const domString = `
    <div class="entire-bear-card">
    <div class="card" style="width: 18rem;">
      <img class="card-img-top" src="${bear.image}" alt="Bearvatar">
      <div class="card-body">
        <h5 class="card-title">${bear.name}</h5>
      </div>

      <div id="accordion">
        <div class="card">
          <div class="card-header" id="attempt-heading-${index}">
            <h5 class="mb-0">
            <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse-attempt-${index}" aria-expanded="false" aria-controls="collapse-attempt-${index}">
                Record Fishing Attempt
              </button>
            </h5>
          </div>

          <div id="collapse-attempt-${index}" class="collapse" aria-labelledby="attempt-heading-${index}">
            <div class="card-body">
            <button type="button" class="btn btn-success" id="success${index}">Successful</button>
            <button type="button" class="btn btn-danger" id="failure${index}">Unsuccessful</button>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header" id="history-heading-${index}">
            <h5 class="mb-0">
              <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse-history-${index}" aria-expanded="false" aria-controls="collapse-history-${index}">
                View History
              </button>
            </h5>
          </div>
          <div id="collapse-history-${index}" class="collapse" aria-labelledby="history-heading-${index}">
            <div class="card-body" id="history-area-${index}">
            ${createFishingHistory(index)}
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    `;
    return domString;
}

const addToRiver = (newBear) => {
  riverData.setRiver(newBear);
  riverToDom();
}

const addFishButtonEvents = () => {
  for (let i = 0; i < river.length; i++) {
    $(`#success${i}`).click(addSuccessfulFishingAttempt);
    $(`#failure${i}`).click(addFailedFishingAttempt);
  }
}

const riverToDom = () => {
  let domString = '';
  for (let i = 0; i < river.length; i++) {
    const bear = river[i];
    domString += buildCard(bear, i);
  }
    utilities.printToDom('#river', domString);
    addFishButtonEvents();
}

export default { addToRiver };