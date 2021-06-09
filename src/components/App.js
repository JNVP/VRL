import React from 'react';
import '../App.scss';

function App() {
  // const [data, setData] = React.useState(null);

  // // React.useEffect(() => {
  // //   fetch('/api')
  // //     .then((res) => {
  // //       console.log(res)
  // //       return res.json()
  // //     })
  // //     .then((data) => setData(data.message));
  // // }, []);

  // React.useEffect(async () => {
  //   const response1 = await fetch('/api');
  //   const response2 = await response1.json();
  //   const data = await response2;
  //   console.log(data.message);
  //   setData(data.message);
  // }, []);

  return (
    <div className="wrapper">
    <div className="grid">
    <div className="header">header</div>
    <div className="playlist">playlist</div>
    <div className="react-player">react-player</div>
    <div className="searchbar">searchbar</div>
    <div className="alternative-videos">alternative-videos</div>
    <div className="footer">footer</div>
    </div>
    </div>
  );
}

export default App;
