class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const testOption = {
      zoomable: {
        width: {
          min: 200,//default 10 拉伸最小宽度
          max: 300//default 1000 拉伸最大宽度
        },
        height: {
          min: 200,//default 10 拉伸最小高度
          max: 300//default 500 拉伸最大高度
        }
      }
    }
    return <Zoomable {...testOption}>
      <div style={{
        width: "100%",
        height: "100%",
        background: "#cccccc"
      }}></div>
    </Zoomable>;
  }
};

ReactDOM.render(
  <App />,
  document.getElementById('Test')
);