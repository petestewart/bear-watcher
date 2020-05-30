import utilities from '../helpers/utilities.js';
import riverData from '../helpers/data/riverData.js'

const river = riverData.getRiver();


const addSuccessfulFishingAttempt = (event) => {
  const bearIndex = Number((event.target.id).replace('success', ''));
  river[bearIndex].fishAttempts++;
  river[bearIndex].success++;
  console.log(river);
}

const addFailedFishingAttempt = (event) => {
  const bearIndex = Number((event.target.id).replace('failure', ''));
  river[bearIndex].fishAttempts++;
  console.log(river);
}

const buildCard = (bear, index) => {
    const domString = `
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

          <div id="collapse-attempt-${index}" class="collapse" aria-labelledby="attempt-heading-${index}" data-parent="#accordion">
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
          <div id="collapse-history-${index}" class="collapse" aria-labelledby="history-heading-${index}" data-parent="#accordion">
            <div class="card-body">
              FISHING HISTORY WILL GO HERE
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