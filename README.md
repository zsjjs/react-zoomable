# react-zoomable

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
      <td>默认相对X轴的位移</td>
      <td align="center">number</td>
      <td align="center">0</td>
    </tr>
    <tr>
      <td colspan="3">defaultPositionY</td>
      <td>默认相对Y轴的位移</td>
      <td align="center">number</td>
      <td align="center">0</td>
    </tr>
    <tr>
      <td colspan="3">defaultWidth</td>
      <td>默认宽度</td>
      <td align="center">number</td>
      <td align="center">100</td>
    </tr>
    <tr>
      <td colspan="3">defaultHeight</td>
      <td>默认高度</td>
      <td align="center">number</td>
      <td align="center">100</td>
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
      <td>拉伸最小宽度</td>
      <td align="center">number</td>
      <td align="center">10</td>
    </tr>
    <tr>
      <td>max</td>
      <td>拉伸最大宽度</td>
      <td align="center">number</td>
      <td align="center">1000</td>
    </tr>
    <tr>
      <td rowspan="2">height</td>
      <td>min</td>
      <td>拉伸最小高度</td>
      <td align="center">number</td>
      <td align="center">10</td>
    </tr>
    <tr>
      <td>max</td>
      <td>拉伸最大高度</td>
      <td align="center">number</td>
      <td align="center">500</td>
    </tr>
</table>