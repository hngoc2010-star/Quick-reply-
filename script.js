const data = {
  price: [
    "Due to the increase in raw material costs, we need to adjust pricing.",
    "We are trying to absorb part of the cost to support you.",
    "Maintaining this price is not sustainable for us."
  ],

  freight: [
    "Ocean freight has increased significantly recently.",
    "This is beyond our control from shipping lines.",
    "We suggest confirming soon to lock a better rate."
  ],

  negotiate: [
    "At this price, we cannot guarantee quality.",
    "If price is the only concern, cheaper options exist.",
    "We focus on long-term stable cooperation."
  ]
};

const select = document.getElementById("situation");
const result = document.getElementById("result");

function render() {
  const value = select.value;
  const list = data[value];

  result.innerHTML = list.map(i => `• ${i}`).join("<br>");
}

// auto chạy
select.addEventListener("change", render);
render();
