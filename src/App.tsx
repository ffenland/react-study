import React from "react";
import tw from "tailwind-styled-components";

const Container = tw.div`
    flex
    items-center
    justify-center
    flex-col
    w-full
    bg-indigo-600

`;
const BlueContainer = tw(Container)`
text-blue-300
`;
const App = () => {
  return (
    <div className="App">
      <header className="App-header">hi</header>
      <div className="h-5 bg-slate-400 w-10"></div>
      <Container>
        <span className="text-white">hi</span>
        <div>hi</div>
      </Container>
      <BlueContainer>
        <span>hihihihi</span>
      </BlueContainer>
    </div>
  );
};

export default App;
