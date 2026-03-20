const input = document.getElementById("input");
const result = document.getElementById("result");

function generateResponse(text) {
  text = text.toLowerCase();

  let responses = [];

  // PRICE ISSUE
  if (text.includes("price") || text.includes("expensive") || text.includes("high")) {
    responses = [
      {
        type: "Soft",
        text: "We understand your concern regarding pricing. However, due to recent increases in raw material costs, we have had to adjust slightly."
      },
      {
        type: "Firm",
        text: "At this price level, maintaining the expected quality would not be possible. We prefer to be transparent rather than compromise standards."
      },
      {
        type: "Strategic",
        text: "Instead of focusing only on price, we believe consistency and reliability will bring you better long-term value."
      }
    ];
  }

  // FREIGHT ISSUE
  else if (text.includes("freight") || text.includes("shipping")) {
    responses = [
      {
        type: "Soft",
        text: "Freight rates have increased significantly due to market conditions, which is beyond our control."
      },
      {
        type: "Firm",
        text: "Shipping lines are adjusting rates globally, and unfortunately, we must follow the market."
      },
      {
        type: "Strategic",
        text: "We recommend confirming soon to secure the current rate before further increases."
      }
    ];
  }

  // NEGOTIATION
  else {
    responses = [
      {
        type: "Soft",
        text: "We truly appreciate your interest and will try our best to support your target."
      },
      {
        type: "Firm",
        text: "At your requested level, it would not be sustainable for us to proceed."
      },
      {
        type: "Strategic",
        text: "If you can confirm the order today, I will push internally for the best possible support."
      }
    ];
  }

  render(responses);
}

function render(list) {
  result.innerHTML = "";

  list.forEach(item => {
    const div = document.createElement("div");
    div.className = "card";

    div.innerHTML = `
      <h3>${item.type}</h3>
      <p>${item.text}</p>
      <button onclick="copyText('${item.text}')">Copy</button>
    `;

    result.appendChild(div);
  });
}

function copyText(text) {
  navigator.clipboard.writeText(text);
  alert("Copied!");
}

// auto detect khi nhập
input.addEventListener("input", () => {
  generateResponse(input.value);
});
