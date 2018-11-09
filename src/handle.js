const defaultValue = {
  minWidth: 10,
  maxWidth: 1000,
  minHeight: 10,
  maxHeight: 500
};
class Handle {
  static mousedownHandle(direction) {//zoomable开始拉伸,this指向Content
    document.body.classList.add("user-select-none");
    this.setState({
      isdrawing: 1,
      direction: direction,
      coordinate: {
        x: event.clientX,
        y: event.clientY
      },
      position: {
        x: this.props.defaultPositionX,
        y: this.props.defaultPositionY
      },
      reverseX: direction.indexOf("left") > -1,
      reverseY: direction.indexOf("top") > -1
    });
  }
  static mouseupHandle(me) {//zoomable结束拉伸
    document.body.classList.remove("user-select-none");
    me.setState({
      isdrawing: 0,
      width: this.calculation(me, "width"),
      height: this.calculation(me, "height"),
      direction: "",
      change: {
        x: 0,
        y: 0
      }
    });
  }
  static topMove(me, event) {//zoomable向上拉伸
    const { coordinate, change, position } = me.state;
    const { changePosition } = me.props;
    const changeY = event.clientY - coordinate.y;
    me.setState({
      change:{
        x: change.x,
        y: changeY
      }
    }, () => {
      const npositionY = this.offset(me, position.y, changeY, "height");
      changePosition(null, npositionY);
    });
  }
  static rightMove(me, event) {//zoomable向右拉伸
    const { coordinate, change } = me.state;
    me.setState({
      change:{
        x: event.clientX - coordinate.x,
        y: change.y
      }
    });
  }
  static bottomMove(me, event) {//zoomable向下拉伸
    const { coordinate, change } = me.state;
    me.setState({
      change:{
        x: change.x,
        y: event.clientY - coordinate.y
      }
    });
  }
  static leftMove(me, event) {//zoomable向左拉伸
    const { coordinate, change, position } = me.state;
    const { changePosition } = me.props;
    const changeX = event.clientX - coordinate.x;
    me.setState({
      change:{
        x: changeX,
        y: change.y
      }
    }, () => {
      const npositionX = this.offset(me, position.x, changeX, "width");
      changePosition(npositionX);
    });
  }
  static width(me) {//获取最新的width,minWidth,maxWidth
    const {zoomable= {}} = me.props;
    const minWidth = (zoomable.width || {}).min || defaultValue.minWidth;
    const maxWidth = (zoomable.width || {}).max || defaultValue.maxWidth;
    const { width, change, reverseX } = me.state;
    const nwidth = reverseX ? width - change.x : width + change.x;
    return {
      res: nwidth,
      min: minWidth,
      max: maxWidth
    };
  }
  static height(me) {//获取最新的height,minHeight,maxHeight
    const {zoomable= {}} = me.props;
    const minHeight = (zoomable.height || {}).min || defaultValue.minHeight;
    const maxHeight = (zoomable.height || {}).max || defaultValue.maxHeight;
    const { height, change, reverseY } = me.state;
    const nheight = reverseY ? height - change.y : height + change.y;
    return {
      res: nheight,
      min: minHeight,
      max: maxHeight
    };
  }
  static calculation(me, type) {//根据拉伸实时宽高,min宽高,max宽高得到实际宽高
    const result = this[type](me);
    if (result.res < result.min) {
      return result.min;
    }else if (result.res > result.max) {
      return result.max;
    }
    return result.res;
  }
  static offset(me, basic, change, type) {//根据拉伸实时translate,min宽高,max宽高得到实际translate
    const result = this[type](me);
    const n = me.state[type];
    let nposition = basic + change;
    if (change > n - result.min) {
      nposition = basic + n - result.min;
    }else if (change < n - result.max) {
      nposition = basic + n - result.max;
    }
    return nposition;
  }

}
export default Handle;