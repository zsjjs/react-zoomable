/* @author yanjun
 * @date 2018.09
*/
import './zoomable.less';
import { Component } from 'react';
import Draggable from 'react-draggable';
import PropTypes from 'prop-types';
import Content from './content.jsx';
const defaultDragArea = "zoomable-content";

class Zoomable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      positionX: props.defaultPositionX || 0,
      positionY: props.defaultPositionY || 0
    };
  }
  componentDidMount() {
    const draggable = this.props.draggable || {};
    const cursor = draggable.handleCursor || "move";
    draggable.used !== false && (document.getElementsByClassName(defaultDragArea)[0].style.cursor = cursor);
  }
  changePosition(x, y) {
    x && this.setState({
      positionX: x
    });
    y && this.setState({
      positionY: y
    });
  }
  render() {
    const me = this;
    const { positionX, positionY } = me.state;
    const { draggable={} , className="", style={}} = me.props;
    const options = Object.assign({
      handle: `.${defaultDragArea}`
    }, draggable.options, {
      position: {
        x: positionX,
        y: positionY
      },
      onStop: (e, node) => {
        me.changePosition(node.x, node.y);
        draggable.options && typeof draggable.options.onStop === 'function' && draggable.options.onStop();
      }
    });
    return (draggable.used === false ? <div className={`transform-box ${className}`} style={{
      touchAction: "none",
      transform: `translate(${positionX}px, ${positionY}px)`,
      ...style
      }}><Content
        {...me.props}
        changePosition={me.changePosition.bind(me)}
        positionX={positionX}
        positionY={positionY}
      /></div> :
      <Draggable {...options}>
        <div style={style} className={`transform-box ${className}`}>
          <Content
            test={me} {...me.props}
            changePosition={me.changePosition.bind(me)}
            positionX={positionX}
            positionY={positionY}
          />
        </div>
      </Draggable>);
  }
}

Zoomable.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  defaultPositionX: PropTypes.number,//default 0 //主体相对移动X轴
  defaultPositionY: PropTypes.number,//default 0 //主体相对移动Y轴
  draggable: PropTypes.shape({
    used: PropTypes.bool,//default true, 是否使用react-draggable
    options: PropTypes.object,//react-draggable api, Invalid props: [position, defaultPosition],
    handleCursor: PropTypes.string //default "move" 可拖拽区域的光标类型
  }),
  zoomable: PropTypes.shape({
    used: PropTypes.bool,//default true, 是否使用拉伸功能
    direction: PropTypes.array,//["top", "right-top", "right", "right-bottom", "bottom", "left-bottom", "left", "left-top"]default all, 可拉伸方向
    borderWidth: PropTypes.number,//default 2 外围可拉伸范围
    width: PropTypes.shape({
      min: PropTypes.number,//default 10 拉伸最小宽度
      max: PropTypes.number//default 1000 拉伸最大宽度
    }),
    height: PropTypes.shape({
      min: PropTypes.number,//default 10 拉伸最小高度
      max: PropTypes.number//default 500 拉伸最大高度
    }),
    boxSync: PropTypes.bool//default false, 最外层是否需要同步宽高样式
  }),
  onZoomStart: PropTypes.func,//拉伸开始时调用,param{direction:方向,position:位置{x,y},width:宽度,height:高度}
  onZooming: PropTypes.func,//拉伸进行中调用,param同上
  onZoomEnd: PropTypes.func//拉伸结束时调用,param同上
};
export default Zoomable;