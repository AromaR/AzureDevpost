import logo from './logo.svg';
import './App.css';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';
class App extends Component {
  state = {
    rapes: [],
    fems:[],
    stats:[],
    api:"2a41caa52c40430b896936cc93c42527"
  }
  componentDidMount() {
    fetch('https://newsapi.org/v2/everything?q=rape&apiKey=2a41caa52c40430b896936cc93c42527',{
      mode: 'no-cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      }// no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    })
    .then(res => res.json())
    .then((data) => {
      this.setState({ rapes: data })
    })
    .catch(console.log)
    fetch('https://newsapi.org/v2/everything?q=femicide&apiKey=2a41caa52c40430b896936cc93c42527')
    .then(res => res.json())
    .then((data) => {
      this.setState({ fems: data })
    })
    .catch(console.log)
    fetch('https://newsapi.org/v2/everything?q=gender%20AND%20based%20AND%20violence&apiKey=2a41caa52c40430b896936cc93c42527')
    .then(res => res.json())
    .then((data) => {
      this.setState({ stats: data })
    })
    .catch(console.log)
  }
  render () {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the state of Gender Based Violence against women.</h1>
      </header>
          <Tabs defaultActiveK88ey="profile" id="uncontrolled-tab-example">
          <Tab eventKey="About" title="About">
    <p>If you are an activist with a day-job, this state board is for you. Keep track of all the happenings in the world of women's rights, join the rape watch and femicide watch. Sign petitions, donate to organizations and contribute to initiatives all at a single place. Feel free to suggest grassroot organizations and petitions to add to this dashboard. The rape news and other news is sourced from newsapi.org.</p>
      <p>Change the world by staying in the loop and on top of issues affecting women worldwide.</p>
      <Image src="https://image.freepik.com/free-vector/women-faces-pattern-women-s-day_23-2148421369.jpg"></Image>
      </Tab>
      <Tab eventKey="Rape-watch" title="Rape-watch">
    <ListGroup >
        {this.state.rapes.articles && this.state.rapes.articles.map((reptile) => <ListGroup.Item action href={reptile.url}>{reptile.title}</ListGroup.Item>)}
        </ListGroup>
      </Tab>
      <Tab eventKey="Femicides" title="Femicides">
      <ListGroup >
        {this.state.fems.articles && this.state.fems.articles.map((reptile) => <ListGroup.Item action href={reptile.url}>{reptile.title}</ListGroup.Item>)}
        </ListGroup>
      </Tab>
      <Tab eventKey="State of Gender Based Violence" title="State of Gender Based Violence" >
      <ListGroup >
        {this.state.stats.articles && this.state.stats.articles.map((reptile) => <ListGroup.Item action href={reptile.url}>{reptile.title}</ListGroup.Item>)}
        </ListGroup>
      </Tab>
      <Tab eventKey="Statistics" title="Statistics" ><Image src="https://brazilportal.files.wordpress.com/2016/07/violence-against-women-infographic.jpg?w=666" responsive></Image>
      <Image src="https://i1.wp.com/technewslit.com/sciencebusiness/wp-content/uploads/2020/03/EqualWomensRights_Statista.jpg?ssl=1"></Image>
      </Tab>
     <Tab eventKey="Organizations" title="Organizations" >
      <Tabs defaultActiveK88ey="profile" id="uncontrolled-tab-example">
          <Tab eventKey="India" title="India">
          <ListGroup >
          <ListGroup.Item><h3>
          The Action Northeast Trust (ANT)</h3><p>
Started in October 2000, the ANT is based in Rowmari in Lower Assam.It works in over 230 villages for furthering the pace of development in the areas falling under Chirang District of Bodoland in Lower Assam. It also works to build up the voluntary sector in the northeast region.
</p></ListGroup.Item>
<ListGroup.Item><h3>
Astitva Samajik Sansthan</h3><p>
A community based organization that was established in May 2008 in Dehradun, Uttarakhand. Astitva strives to bring about gender equality and end gender based violence in society. This is done by empowering women and youth through rights advocacy, education, skill training, job placement, and services such as childcare. Astitva also provides comprehensive support services including counselling, legal aid, medical aid, and shelter for women, youth and children facing violence. They work in Purkazi, Shahpur, Budhana and Kandhala.
</p></ListGroup.Item><ListGroup.Item>
<h3>Mahila Swarojgar Samiti</h3><p>
An organization based at Varanasi in Uttar Pradesh, India and was established in July 2000. Mahila Swarojgar Samiti works with women's groups in villages in order to set up self-help groups and income generation programmes. The aim of the project is to empower women to take control of their lives.
</p></ListGroup.Item>
</ListGroup>
      </Tab>
      </Tabs>
      </Tab>
      <Tab eventKey="Petitions" title="Petitions" >
      <ListGroup><ListGroup.Item action href="https://www.change.org/p/andr%C3%A9s-manuel-l%C3%B3pez-obrador-stop-femicide-in-mexico">STOP FEMICIDE IN MEXICO</ListGroup.Item></ListGroup>
      </Tab>
      <Tab eventKey="Initiatives" title="Initiatives" >
      
      </Tab>
    </Tabs>
    <header className="App-header">
        <h3>We may add more tabs to this page.</h3>
      </header>
    </div>
  );
  }
}

export default App;
