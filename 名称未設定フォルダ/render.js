'use strict';
{
  function Panel(props) {
    return(
      <ul>
        <li >{props.id}</li>
      </ul>
    );
  }
  //Boardは大文字
  function Board(props) {
    const items = props.items.map(item => {
      return(
        <Panel
          items={items}
          key = {item.id}
        />
      );
    });
    return(
      <ul>
        {items}
      </ul>
    );
  }
  class App extends React.Component {
    constructor() {
      super();
      this.state = {
        items: [
          {id: 'イチゴ', count: 0, color:'tomato',price: 150},
          {id: 'りんご', count: 0, color:'skyblue',price: 100},
          {id: 'メロン', count: 0, color:'limegreen',price: 1200},
          {id: 'パイナップル', count: 0, color:'gray',price: 200},
          {id: 'さくらんぼ', count: 0, color:'pink',price: 300},
          {id: 'ぶどう', count: 0, color:'silver',price: 700},
          ],
        total: 0,
        totalPrice: 0
      };
    }
    render() {
      
      return(
        <div className="container">
          <board 
            items = {this.items}
          />
        </div>
      );
    }
  }

  ReactDOM.render(
    <App/>,
    document.getElementById('root')
  );
}


