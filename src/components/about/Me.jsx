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
            I am motivated, task-oriented, efficient, and my knowledge of the
            front-end web development industry is comprehensive and current. My
            enthusiasm and commitment to excellence have served me well in
            learning the fundamentals and advanced concepts in front edn
            development. I I have extensive experience with vanilla JavaScript,
            having had the chance to significantly develop my front-end
            development skills while working on little side projects.
            <br />
            <br />
            When I'm not thinking and writing code, I do what I've always loved
            doing before I decided to start a career in Front-end development
            i.e make music on my laptop. To be precise I produce instrumentals
            (Afro-beats). You can say I'm music producer 😎.
            <br />
            <br />
            Apart from making and grooving to my own instrumentals, I consume
            any content on human psychology I find interesting. Jordan B.
            Peterson inspires me in that aspect. I also spending a lot of time
            on Quora (answered a few simple questions too)
            <br />
            <br />
            Lastly, I create graphics with Adobe Illustrator. I usually create
            graffiti and head shot illustrations. Once in a while I attempt
            replicating logos. That's about it! Adios amigo(s) 😏
            <br />
            <br />
            <span>abuadonald@gmail.com</span>
          </p>
        </article>
      </div>
    </section>
  );
}
