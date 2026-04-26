async function loadData() {
  const res = await fetch("/api/message");
  const data = await res.json();

  const output = document.getElementById("output");
  output.innerHTML = "";

  data.forEach(item => {
    const p = document.createElement("p");
    p.innerText = item.text;
    output.appendChild(p);
  });
}

async function sendMessage() {
  const input = document.getElementById("msgInput");

  await fetch("/api/message", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ text: input.value })
  });

  input.value = "";
  loadData();
}

loadData();