
const getFrame = () => {

  const date = new Date();

  if (date.getMonth() + 1 != 6) {
    console.log('test mode');
    return 'cc-0-0';
  }

  const day = date.getDate();

  if (day !== 2 && day !== 3) {
    console.log('test mode');
    return 'cc-0-0';
  }

  if (date > new Date('2022-06-02 09:00') && date < new Date('2022-06-02 10:30')) { return 'cc-1-1' }
  if (date > new Date('2022-06-02 11:15') && date < new Date('2022-06-02 13:00')) { return 'cc-1-2' }
  if (date > new Date('2022-06-02 14:15') && date < new Date('2022-06-02 16:00')) { return 'cc-1-3' }
  if (date > new Date('2022-06-02 16:45') && date < new Date('2022-06-02 18:45')) { return 'cc-1-4' }
  if (date > new Date('2022-06-03 09:15') && date < new Date('2022-06-03 10:30')) { return 'cc-2-1' }
  if (date > new Date('2022-06-03 11:15') && date < new Date('2022-06-03 13:00')) { return 'cc-2-2' }
  if (date > new Date('2022-06-03 14:15') && date < new Date('2022-06-03 16:00')) { return 'cc-2-3' }
  if (date > new Date('2022-06-03 16:45') && date < new Date('2022-06-03 19:00')) { return 'cc-2-4' }

}

(function () {

  console.log('init')

  const frame = document.getElementById('cc-frame');

  const block = getFrame()

  frame.setAttribute('src', `/${block}.html`)

})();
