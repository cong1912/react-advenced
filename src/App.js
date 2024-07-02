import SplitScreen from './components/split-screen';

const LeftSideComp = () => {
  return (
    <h2>left</h2>
  )
}

const RightSideComp = () => {
  return (
    <h2>right</h2>
  )
}

function App() {


  return (
    <SplitScreen leftWidth={1} rightWidth={3} >
      <LeftSideComp/>
      <RightSideComp/>
    </SplitScreen>
  );
}

export default App;
