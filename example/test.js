class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const testOption = {
      draggable: {
        used: false
      },
      zoomable: {
        width: {
          min: 200,//default 10 拉伸最小宽度
          max: 300//default 1000 拉伸最大宽度
        },
        height: {
          min: 300,//default 10 拉伸最小高度
          max: 500//default 500 拉伸最大高度
        }
      },
      onZoomStart: (result) => {
        console.log("onZoomStart", result);
      },
      onZoomEnd: (result) => {
        console.log("onZoomEnd", result);
      },
      onZooming: (result) => {
        console.log("onZooming", result);
      }
    }
    return <Zoomable {...testOption}>
      <div className="test"></div>
    </Zoomable>;
  }
};

ReactDOM.render(
  <App />,
  document.getElementById('Test')
);