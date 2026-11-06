import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  // Bonus feature logic
  let emojis = "";
  if (minutes) {
    if (minutes < 30) {
      const cups = Math.ceil(minutes / 5);
      emojis = "☕️".repeat(cups);
    } else {
      const bentos = Math.ceil(minutes / 10);
      emojis = "🍱".repeat(bentos);
    }
  }

  return (
    <article>
      <h3>{title}</h3>
      <small>
        {date} {minutes ? `• ${emojis} ${minutes} min read` : ""}
      </small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;