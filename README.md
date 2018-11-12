# react-stretchable

#### 基于react-draggable的拖拽缩放插件

##### API

<table border="1">
    <tr>
      <th colspan="3">参数</th>
      <th>说明</th>
      <th align="center">类型</th>
      <th align="center">默认值</th>
    </tr>
    <tr>
      <td colspan="3">defaultPositionX</td>
      <td>相对X轴的位移</td>
      <td align="center">number</td>
      <td align="center">0</td>
    </tr>
    <tr>
      <td colspan="3">defaultPositionY</td>
      <td>相对Y轴的位移</td>
      <td align="center">number</td>
      <td align="center">0</td>
    </tr>
    <tr>
      <td colspan="3">fixedWidth</td>
      <td>固定宽度，用于不拉伸宽度的情况下，一般使用非Number类型的宽度样式</td>
      <td align="center"></td>
      <td align="center">null</td>
    </tr>
    <tr>
      <td colspan="3">fixedHeight</td>
      <td>固定高度，用于不拉伸高度的情况下，一般使用非Number类型的高度样式</td>
      <td align="center"></td>
      <td align="center">null</td>
    </tr>
    <tr>
      <td rowspan="3">draggable</td>
      <td colspan="2">used</td>
      <td>是否使用react-draggable拖拽功能</td>
      <td align="center">boolean</td>
      <td align="center">true</td>
    </tr>
    <tr>
      <td colspan="2">options</td>
      <td>
        <a target="_blank" href="https://www.npmjs.com/package/react-draggable#draggable-api">react-draggable api</a> Invalid props: [position, defaultPosition]
      </td>
      <td align="center">object</td>
      <td align="center">-</td>
    </tr>
    <tr>
      <td colspan="2">handleCursor</td>
      <td>可拖拽区域的光标类型</td>
      <td align="center">string</td>
      <td align="center">move</td>
    </tr>
    <tr>
      <td rowspan="6">zoomable</td>
      <td colspan="2">used</td>
      <td>是否使用拉伸功能</td>
      <td align="center">boolean</td>
      <td align="center">true</td>
    </tr>
    <tr>
      <td colspan="2">direction</td>
      <td>可拉伸方向</td>
      <td align="center">array[string]</td>
      <td align="center">["top", "right-top", "right", "right-bottom", "bottom", "left-bottom", "left", "left-top"]</td>
    </tr>
    <tr>
      <td rowspan="2">width</td>
      <td>min</td>
      <td>拉伸最小宽度，如果存在即为默认</td>
      <td align="center">number</td>
      <td align="center">10</td>
    </tr>
    <tr>
      <td>max</td>
      <td>拉伸最大宽度，小于defaultWidth时，defaultWidth以此为准</td>
      <td align="center">number</td>
      <td align="center">1000</td>
    </tr>
    <tr>
      <td rowspan="2">height</td>
      <td>min</td>
      <td>拉伸最小高度，大于defaultHeight时，defaultHeight以此为准</td>
      <td align="center">number</td>
      <td align="center">10</td>
    </tr>
    <tr>
      <td>max</td>
      <td>拉伸最大高度，小于defaultHeight时，defaultHeight以此为准</td>
      <td align="center">number</td>
      <td align="center">500</td>
    </tr>
    <tr>
      <td colspan="3">onZoomStart</td>
      <td>拉伸开始时调用</td>
      <td align="center">function(param=object{direction:方向,position:位置{x,y},width:宽度,height:高度})</td>
      <td align="center">-</td>
    </tr>
    <tr>
      <td colspan="3">onZooming</td>
      <td>拉伸进行中调用</td>
      <td align="center">function(param=object{direction:方向,position:位置{x,y},width:宽度,height:高度})</td>
      <td align="center">-</td>
    </tr>
    <tr>
      <td colspan="3">onZoomEnd</td>
      <td>拉伸结束时调用</td>
      <td align="center">function(param=object{direction:方向,position:位置{x,y},width:宽度,height:高度})</td>
      <td align="center">-</td>
    </tr>
</table>