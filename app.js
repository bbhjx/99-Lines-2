window.addEventListener('DOMContentLoaded', function () {
  let btnDiv = document.createElement('div')
  let button = document.createElement('button');
  let btnText = document.createTextNode('Sing!');


  document.body.appendChild(btnDiv);
  btnDiv.appendChild(button);
  button.appendChild(btnText);

  button.addEventListener('click', function () {
    let songTxt;
    let songTxtDone;
    let songTxtAlmostDone;


    let friends = ['Tay', 'Zion', 'Kennedy', 'Londen', 'Jared'];

    for (let i = 0; i < friends.length; i++) {
      let friendDiv = document.createElement('div');
      friendDiv.className = 'friend';
      document.body.appendChild(friendDiv);
      let friendName = document.createElement('h3');
      let friendNameTxt = document.createTextNode(friends[i].toUpperCase() + ':');
      friendName.appendChild(friendNameTxt);
      friendDiv.appendChild(friendName);



      for (let n = 99; n > 0; n--) {
        if (n === 1) {
          let songDone = document.createElement('p');
          let theSongTxtDone = document.createTextNode(n + " line of code in the file, " + n + " line code. " + friends[i] + " strikes one out, clears it all out, no more lines of code in the file.");
          songDone.appendChild(theSongTxtDone);
          friendDiv.appendChild(songDone);
        } else if (n === 2) {
          let songAlmostDone = document.createElement('p');
          let theSongTxtAlmostDone = document.createTextNode(n + " lines of code in the file, " + n + " lines of code. " + friends[i] + " strikes one out, clears it all out, " + [n - 1] + " line code in the file.");
          songAlmostDone.appendChild(theSongTxtAlmostDone);
          friendDiv.appendChild(songAlmostDone);
        } else {
          let song = document.createElement('p');
          let theSongTxt = document.createTextNode(n + " lines of code in the file, " + n + " lines of code. " + friends[i] + " strikes one out, clears it all out, " + [n - 1] + " lines code in the file.");
          song.appendChild(theSongTxt);
          friendDiv.appendChild(song);
        }
      }

    }
  })
})









