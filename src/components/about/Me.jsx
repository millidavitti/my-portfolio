import React from "react";
import avatar from "../../assets/images/avatar.jpg";

export default function Me(props) {
  const { css } = props;
  return (
    <section className={css.aboutMe}>
      <div>
        <img className={css.avatar} src={avatar} alt='Donald Abua' />
        <article>
          <h2>Donald Abua</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            tempore sunt, a laborum temporibus amet repellat nobis.
            <br />
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            tempore sunt, a laborum temporibus amet repellat nobis. Culpa cum
            dicta consectetur nesciunt quaerat sed veritatis animi? Eaque
            molestias aperiam consequatur distinctio, corporis doloribus quos
            architecto, deserunt animi obcaecati quia maiores fugit ut facere.
            <br />
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            tempore sunt, a laborum temporibus amet repellat nobis. Culpa cum
            dicta consectetur nesciunt quaerat sed veritatis animi? Eaque
            molestias aperiam consequatur distinctio, corporis doloribus quos
            architecto, deserunt animi obcaecati quia maiores fugit ut facere.
            <br />
            <br />
            <span>abuadonald@gmail.com</span>
          </p>
        </article>
      </div>
    </section>
  );
}
