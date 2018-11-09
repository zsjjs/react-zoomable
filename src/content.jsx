import {Component} from 'react';
import './zoomable.less';
import Handle from './handle';

const defaultProps = {
  used: true,
  direction: ["top", "right-top", "right", "right-bottom", "bottom", "left-bottom", "left", "left-top"],
  borderWidth: 2
};

class Content extends Component {
  constructor(props) {
    super(props);
    const {
      defaultWidth,
      defaultHeight,
      zoomable: {
        width = {},
        height = {}
      } = {}
    } = props;
    this.state = {
      isdrawing: 0,
      direction: "",
      width: this.defaultSize(defaultWidth, width.min, width.max),
      height: this.defaultSize(defaultHeight, height.min, height.max),
      position: {
        x: props.defaultPositionX,
        y: props.defaultPositionY
      },
      coordinate: {
        x: 0,
        y: 0
      },
      change: {
        x: 0,
        y: 0
      },
      reverseX: false,
      reverseY: false
    };
  }

  defaultSize(defaultSize=100, min, max) {
    if (min && defaultSize < min) {
      return min;
    } else if (max && defaultSize > max) {
      return max;
    } else {
      return defaultSize;
    }
  }

  componentDidMount() {
    document.documentElement.onmousemove = (event) => {
      const {isdrawing, direction} = this.state;
      if (isdrawing) {
        direction.split("-").forEach(item => Handle[`${item}Move`](this, event));
      }
    };
    document.documentElement.onmouseup = () => {
      Handle.mouseupHandle(this);
    };
  }

  boxStyle(props) {
    let padding = [{
      top: 0
    }, {
      right: 0
    }, {
      bottom: 0
    }, {
      left: 0
    }];
    const borderWidth = props.used ? `${props.borderWidth}px` : 0;
    props.direction.forEach(item => {
      padding = padding.map(direction => {
        if (typeof direction === 'object') {
          const key = Object.keys(direction)[0];
          if (item.indexOf(key) > -1) {
            return borderWidth;
          }
        }
        return direction;
      });
    });
    return {
      padding: padding.map(item => {
        if (typeof item === 'object') {
          return item[0];
        }
        return item;
      }).join(" ")
    };
  }

  render() {
    const me = this;
    const {children, zoomable} = me.props;
    const props = Object.assign({}, defaultProps, zoomable);
    return <div className="zoomable-box" style={me.boxStyle(props)}>
      <div className="zoomable-content" style={{
        width: Handle.calculation(me, "width"),
        height: Handle.calculation(me, "height")
      }}>
        {children}
      </div>
      {props.used && props.direction.map(item => {
        let border = props.borderWidth;
        item.indexOf('-') > -1 && ++border;
        return <div
          key={item}
          className={`zoom-bar ${item}-bar`}
          style={{
            width: `${border}px`,
            height: `${border}px`
          }}
          onMouseDown={Handle.mousedownHandle.bind(me, item)}
        ></div>;
      })}
    </div>;
  }
}

export default Content;