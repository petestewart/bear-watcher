import utilities from '../helpers/utilities.js';
import riverData from '../helpers/data/riverData.js';
import river from '../components/river.js';

const addToRiverEvent = (e) => {
    e.preventDefault();
    const newBearObject = {
        name: (e.srcElement.form[0].value),
        image: (e.srcElement.form[1].value),
        fishAttempts: [],
        success: 0
    }
    river.addToRiver(newBearObject);
    makeForm();
}

const makeForm = () => {
    const river=riverData.getRiver();
    const newBearNumber = river.length + 1;
    const domString = `
    <form id="create-bear-form" >
    <div id="form-title">
      Enter information below to add a new bear to the database:
    </div>
    <div class="form-group">
      <label for="formInputName">Bear name</label>
      <input type="text" class="form-control" id="formInputName" value="Bear ${newBearNumber}">
    </div>
    <div class="form-group">
    <label for="formInputURL">Image URL</label>
    <input type="text" class="form-control" id="formInputURL" value="https://pbs.twimg.com/profile_images/739220138679894017/MJa0Bu4j_400x400.jpg">
    <small id="formURLHelp" class="form-text text-muted">Images must be GIF, JPG, or PNG.</small>
    </div>
    <button type="submit" class="btn btn-primary" id="submit-button">Submit</button>
  </form>
    `
    utilities.printToDom('#form', domString);
    document.querySelector('#submit-button').addEventListener('click', addToRiverEvent)
}

export default { makeForm };