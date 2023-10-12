let btn_sup = document.getElementById("sub");
let btn_diss = document.querySelectorAll(".Dismiss");
let email_in = document.getElementById("Email");
let form = document.querySelector(".text");
let spanin = document.createElement("span");

btn_sup.addEventListener("click", () => {
  const reg = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/gi;
  if (reg.test(email_in.value) === true) {
    document.getElementById("span1").textContent = email_in.value;
    document.getElementById("span2").textContent = email_in.value;
    email_in.value = "";

    document.querySelectorAll(".success")[0].classList.remove("-left-full");

    document.querySelectorAll(".success")[1].classList.remove("-left-full");
    document.querySelectorAll(".success")[1].classList.add("left-1/2");

    document
      .querySelectorAll(".success")[0]
      .classList.remove("-translate-x-full");

    document
      .querySelectorAll(".success")[1]
      .classList.remove("-translate-x-[300%]");

    document.querySelectorAll(".success")[1].classList.add("-translate-x-1/2");

    document.querySelector(".main").classList.remove("laptop:flex");
    document.querySelector(".main").classList.add("laptop:hidden");
  } else if (email_in.value.length >= 1 && reg.test(email_in.value) === false) {
    spanin.innerText = "Valid email required";
    spanin.classList.add(
      "text-Tomato-0",
      "absolute",
      "right-0",
      "mr-7",
      "font-bold",
      "text-[16px]"
    );
    form.append(spanin);
    email_in.classList.add(
      "ring-2",
      "ring-Tomato-0",
      "text-Tomato-0",
      "bg-Tomato-0",
      "bg-opacity-30"
    );
  }
});
btn_diss.forEach((e) => {
  e.addEventListener("click", () => {
    document.querySelectorAll(".success")[0].classList.add("-translate-x-full");
    document
      .querySelectorAll(".success")[1]
      .classList.add("-translate-x-[300%]");
    document.querySelectorAll(".success")[1].classList.add("-left-full");
    document.querySelector(".main").classList.remove("laptop:hidden");
    document.querySelector(".main").classList.add("laptop:flex");
  });
});

email_in.addEventListener("focus", () => {
  spanin.remove();
  email_in.classList.remove(
    "ring-2",
    "ring-Tomato-0",
    "text-Tomato-0",
    "bg-Tomato-0",
    "bg-opacity-30"
  );
});
