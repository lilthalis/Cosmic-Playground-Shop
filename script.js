Const panel = document.getElementById("sidePanel");
const content = document.getElementById("panelContent");

function openPanel(section){
  panel.classList.add("active");

  if(section === "music"){
    content.innerHTML = `
      <h2>Music</h2>
      <p>Albums</p>
      <p>Singles</p>
      <p>Unreleased</p>
    `;
  }

  if(section === "videos"){
    content.innerHTML = `
      <h2>Videos</h2>
      <p>Official Clips</p>
      <p>Visualizers</p>
    `;
  }

  if(section === "tour"){
    content.innerHTML = `
      <h2>Tour</h2>
      <p>No dates yet...</p>
    `;
  }

  if(section === "about"){
    content.innerHTML = `
      <h2>About</h2>
      <p>Cosmic Playground is a universe created by the artist.</p>
    `;
  }
}

function closePanel(){
  panel.classList.remove("active");
}
