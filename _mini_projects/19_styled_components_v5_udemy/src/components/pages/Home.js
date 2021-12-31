import React from 'react';
import styled from 'styled-components';

const BodyText = styled.p`
  line-height: 1.65rem;
  font-weight: 400;
`;

const Intro = styled.p`
  font-size: 1.25rem;
  line-height: 1.95rem;
`;

export default function Home() {
  return (
    <div>
      <h1>Welcome!</h1>
      <Intro>
        Pork belly nulla veniam ut, enim brisket t-bone in lorem frankfurter
        quis sunt. Capicola tenderloin tri-tip elit sirloin non. Chicken ea
        pariatur ground round shoulder. Ad turkey lorem picanha sint, in eiusmod
        in do tri-tip flank jerky. <a href="/">Get your bacon!</a>
      </Intro>
      <BodyText>
        Bacon ipsum dolor amet cupim biltong sirloin est doner tenderloin,
        voluptate picanha exercitation proident kielbasa minim. Ullamco aliqua
        fugiat, chicken non ut anim. Consectetur ad burgdoggen dolore officia
        non sunt voluptate. Pork filet mignon pork chop shoulder jerky turducken
        ipsum picanha beef corned beef est culpa voluptate. Strip steak ad pork
        loin fatback, biltong qui aliquip pastrami dolore salami quis boudin.
        Strip steak eu capicola, occaecat et pork fatback quis jerky consequat.
        Tongue pariatur turducken pork loin ut doner pork chop proident elit
        andouille chuck deserunt.
      </BodyText>
    </div>
  );
}
