import React, { useEffect, useState } from "react";
import tw from "tailwind-styled-components";

interface ContainerProps {
  isChoice: boolean;
}
const Container = tw.div<ContainerProps>`
    flex
    items-center
    justify-center
    flex-col
    w-full
    
    ${(p) => (p.isChoice ? "bg-indigo-600" : "bg-rose-200")}

`;
const BlueContainer = tw(Container)`
text-blue-300
`;
const Test = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="Test">
      <header className="Test-header">hi</header>
      <div className="h-5 bg-slate-400 w-10"></div>
      <Container isChoice={true}>
        <span className="text-white">hi</span>
        <div>hi</div>
      </Container>
      <BlueContainer isChoice={false}>
        <span>hihihihi</span>
      </BlueContainer>
    </div>
  );
};

export default Test;
