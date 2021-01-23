import React, { Component } from 'react'
import Chekbox from './component/chekbox';
import Essay from './component/essay';
import Radio from './component/radio';
class App extends Component {
  render() {
    return (
      <div>
        {/* <Product />
        <Card cardImg="https://football-tribe.com/indonesia/wp-content/uploads/sites/10/2017/12/Tsubasa.png" cardTitle=
        "test1" cardText="test1"/>
        <Card cardImg="https://football-tribe.com/indonesia/wp-content/uploads/sites/10/2017/12/Tsubasa.png" cardTitle=
        "test2" cardText="test2"/>
       <Card cardImg="https://football-tribe.com/indonesia/wp-content/uploads/sites/10/2017/12/Tsubasa.png" cardTitle=
        "test3" cardText="test3"/>
        <Carousel gambar = {["https://cdn-brilio-net.akamaized.net/news/2016/08/26/92772/435911-chelsea-islan.jpg", "https://img.okezone.com/content/2018/04/14/33/1886753/sibuk-berkarier-anisa-rahma-perlu-waktu-9-tahun-selesaikan-pendidikan-ljN9zyoxRr.jpg"]}/>
         */}
         <Radio/>
         <Chekbox/>
         <Essay/>
      </div>
    )
  }
}
export default App;