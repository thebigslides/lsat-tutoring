// ==========================================
// ALWAYS START PAGE AT THE TOP
// ==========================================

if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

window.addEventListener("load", () => {
  window.scrollTo(0, 0);
});

// ==========================================
// SCROLL REVEAL ANIMATIONS
// ==========================================

const revealElements = document.querySelectorAll(
  ".hero-text, .score-card, .proof-bar, .section, .cta, footer"
);

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12,
  }
);

revealElements.forEach((element) => {
  element.classList.add("reveal");
  revealObserver.observe(element);
});


// ==========================================
// STAGGERED CARD ANIMATIONS
// ==========================================

const cards = document.querySelectorAll(".card");

const cardObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const card = entry.target;

        setTimeout(() => {
          card.classList.add("visible");
        }, Number(card.dataset.delay || 0));

        cardObserver.unobserve(card);
      }
    });
  },
  {
    threshold: 0.15,
  }
);

cards.forEach((card, index) => {
  card.classList.add("card-reveal");
  card.dataset.delay = index * 120;

  cardObserver.observe(card);
});


// ==========================================
// NAVBAR SCROLL EFFECT
// ==========================================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    navbar.classList.add("navbar-scrolled");
  } else {
    navbar.classList.remove("navbar-scrolled");
  }
});


// ==========================================
// BUTTON PRESS EFFECT
// ==========================================

const buttons = document.querySelectorAll(
  ".primary-button, .secondary-button, .nav-button"
);

buttons.forEach((button) => {
  button.addEventListener("mousedown", () => {
    button.classList.add("button-pressed");
  });

  button.addEventListener("mouseup", () => {
    button.classList.remove("button-pressed");
  });

  button.addEventListener("mouseleave", () => {
    button.classList.remove("button-pressed");
  });
});


// ==========================================
// SCORE CARD ENTRANCE
// ==========================================

const scoreCard = document.querySelector(".score-card");

if (scoreCard) {
  const scoreObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          scoreCard.classList.add("score-active");
          scoreObserver.unobserve(scoreCard);
        }
      });
    },
    {
      threshold: 0.4,
    }
  );

  scoreObserver.observe(scoreCard);
}
