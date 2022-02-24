import React from "react";

// Asset Imports
import avatar from "../assets/images/avatar.jpg";
import arrowRight from "../assets/icons/arrow-right.png";

export default function About() {
  return (
    <section className="about-me">
      <div>
        <img className="avatar" src={avatar} alt="Donald Abua"></img>
        <article>
          <h2>About Me</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            tempore sunt, a laborum temporibus amet repellat nobis. Culpa cum
            dicta consectetur nesciunt quaerat sed veritatis animi? Eaque
            molestias aperiam consequatur distinctio, corporis doloribus quos
            architecto, deserunt animi obcaecati quia maiores fugit ut facere.
            Tempore asperiores harum consequatur, ipsum odio sed nobis
            necessitatibus vitae aperiam accusamus sequi eveniet aliquid
            assumenda porro. Sit quisquam quo ratione cupiditate unde eaque
            itaque fuga veritatis cumque voluptas aspernatur dolorem nobis velit
            consectetur architecto, repellendus deserunt iure inventore?
            Perferendis sit, voluptatem architecto mollitia laudantium dolor,
            explicabo consequatur cum fugiat sapiente molestiae nemo quasi,
            corrupti obcaecati repellat?
          </p>
          <button>
            More about me{" "}
            <span>
              <img src={arrowRight} alt=""></img>
            </span>
          </button>
        </article>
      </div>
    </section>
  );
}
