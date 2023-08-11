let myImage = document.querySelector("img");

myImage.onclick = () => {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/fox2.png") {
    myImage.setAttribute("src","images/fox.png" );
  } else {
    myImage.setAttribute("src","images/fox2.png" );
  }
};

  let myButton = document.querySelector('button');
  let myHeading = document.querySelector('h1');
  
  function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = 'The Fox Browser, ' + myName;
    }
  }
  
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'The Fox Browser, ' + storedName;
  }
  
  myButton.onclick = function() {
    setUserName();
  }