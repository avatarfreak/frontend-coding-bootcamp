const next = document.querySelector("button.next");
const prev = document.querySelector("button.prev");
const slider = document.querySelector(".slider-img");
const quote = document.querySelector(".quote");
const author = document.querySelector("cite.name");
const designation = document.querySelector(".designation");

let testimonials = [
  {
    img: "image-tanya.jpg",
    quote:
      "“ I’ve been interested in coding for a while but never taken the jump, until now.  I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”",
    author: "Tanya Sinclair",
    designee: "UX Engineer",
  },

  {
    img: "image-john.jpg",
    quote:
      "“ If you want to lay the best foundation possible I’d recommend taking this course.  The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”",
    author: "John Tarkpor",
    designee: "Junior Front-end Developer",
  },
];

let idx = 0;
let len = testimonials.length;
next.addEventListener("click", () => {
  if (idx < len - 1) idx++;
  else {
    idx = 0;
  }
  return view();
});

prev.addEventListener("click", () => {
  if (idx <= 0) {
    idx = len - 1;
  } else {
    idx--;
  }
  return view();
});

function view() {
  slider.setAttribute("src", `images/${testimonials[idx].img}`);
  slider.setAttribute("alt", `${testimonials[idx].author}`);
  quote.textContent = `${testimonials[idx].quote}`;
  author.textContent = `${testimonials[idx].author}`;
  designation.textContent = `${testimonials[idx].designee}`;
}
