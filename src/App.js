import './App.css';
import eye from './eye.jpg';
import monee from './money500.png';
import React from 'react';

const moneysrc = monee;
//'https://w7.pngwing.com/pngs/64/113/png-transparent-belarusian-ruble-russian-ruble-redenomination-currency-banknote-cash-united-states-dollar-exchange-rate.png'
const chelsrc = 'https://i.pinimg.com/originals/cd/6b/b7/cd6bb7010fa683634b722c2e3a6ba4bb.png'

function calcangle(cx, cy, ex, ey){
  const dy = ey - cy;
  const dx = ex - cx;
  const rad = Math.atan2(dy, dx);
  const deg = rad * 180 /Math.PI;
  return deg;
}

function App() {
  document.addEventListener('mousemove', (e)=>{
    const clientx = e.clientX;
    const clienty = e.clientY;
    
    const chelbox = document.getElementById('chelface');
    const rect = chelbox.getBoundingClientRect();
    const chelx = rect.left + rect.width / 2;
    const chely = rect.top + rect.height / 2;

    const angle = calcangle(clientx, clienty, chelx, chely);
    const eyes = document.querySelectorAll('.cheleye');
    eyes.forEach(eye=>{
      eye.style.transform = `rotate(${90+ angle}deg)`
    })
  })

  const [stars, setStars] = React.useState(generateStars());
  function generateStars(){
    var stars = [];
    var setleft = 0;
    var settop = 0;
    for(var i = 0; i < 50; i++){
      setleft = Math.floor(Math.random() * 95);
      settop = Math.floor(Math.random() * 25);
      var star=<img 
      alt="coin"
      src={moneysrc}
      // src='https://pngimg.com/uploads/gold/gold_PNG11020.png'
      className="star" 
      grows={ Math.random() > 0.5 ? 'false' : 'true'} 
      key={i}
      style={
        {left: (setleft)+'%',
        top: (settop)+'%',
        rotate: (Math.random() * 360)+'deg',
        opacity: (Math.floor(Math.random() * 10) / 10)}}/>
      stars.push(star)
    }
    return stars;
  }
  setTimeout(()=>{
    var resstars = stars.map(star=>{
      var resstar;
      if(star.props.style['opacity'] > 0.9 & star.props.grows === 'true'){
        resstar=<img 
        className="star" 
        alt="coin"
        src={moneysrc}
        // src='https://pngimg.com/uploads/gold/gold_PNG11020.png'
        key = {Math.random()}
        grows={'false'} 
        style={
          {left: (star.props.style['left']),
          top: (star.props.style['top']),
          rotate: (star.props.style['rotate']),
          opacity: (1)}}/>
        return resstar;
      } else if (star.props.grows === 'true') {
        resstar=<img
        className="star" 
        alt="coin"
        src={moneysrc}
        // src='https://pngimg.com/uploads/gold/gold_PNG11020.png'
        key = {Math.random()}
        grows={'true'} 
        style={
          {left: (star.props.style['left']),
          top: (star.props.style['top']),
          rotate: (star.props.style['rotate']),
          opacity: (star.props.style['opacity'] + 0.05)}}/>
        return resstar;
      }
      if(star.props.style['opacity'] < 0.1 & star.props.grows === 'false'){
        resstar=<img 
        className="star" 
        alt="coin"
        src={moneysrc}
        // src='https://pngimg.com/uploads/gold/gold_PNG11020.png'
        key = {Math.random()}
        grows={'true'} 
        style={
          {left: (star.props.style['left']),
          top: (star.props.style['top']),
          rotate: (star.props.style['rotate']),
          opacity: (0)}
        }/>
        return resstar;
      } else if (star.props.grows === 'false') {
        resstar=<img
        className="star" 
        alt="coin"
        src={moneysrc}
        // src='https://pngimg.com/uploads/gold/gold_PNG11020.png'
        key = {Math.random()}
        grows={'false'} 
        style={
          {left: (star.props.style['left']),
          top: (star.props.style['top']),
          rotate: (star.props.style['rotate']),
          opacity: (star.props.style['opacity'] - 0.05)}}/>
        return resstar;
      }
      return;
    });
    setStars(resstars);
  },125)

  return (
    <div className="App">
    <div className="chel">
      <img 
      className="chelface"
      id='chelface'
      src={chelsrc}
      alt='chel'
      />
      <img 
      style={{bottom:'184px', right:'50%'}}
      className='cheleye'
      src={eye}
      alt='eye'
      />
      <img 
      style={{bottom:'184px', right:'70%'}}
      className='cheleye'
      src={eye}
      alt='eye'
      />
    </div>
    <div className="leftCoins">
      {stars}
    </div>
    <div className="rightCoins">
      {stars}
    </div>
    <div className="leftBottomCoins">
      {stars}
    </div>
    <div className="rightBottomCoins">
      {stars}
    </div>
    <h1 align="center">SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT</h1>
            <div align="center">
            <h2>Sample parameters:</h2>
            <ul class="list1"> 
            <h3><li>Parameter</li></h3>
            <h3><li>Parameter</li></h3>
            <h3><li>Parameter</li></h3>
            <h3><li>Parameter</li></h3>
            <h3><li>Parameter</li></h3>
            <h3><li>Parameter</li></h3>
            <h3><li>Parameter</li></h3>
            </ul>
            <h2>Sample parameters:</h2>
            <ul>
              <h3><li>Parameter</li></h3>
              <h3><li>Parameter</li></h3>
              <h3><li>Parameter</li></h3>
            </ul>
            <h2>Sample parameters:</h2>
            <ul>
              <h3><li>Parameter</li></h3>
              <h3><li>Parameter</li></h3>
              <h3><li>Parameter</li></h3>
              <h3><li>Parameter</li></h3>
              <h3><li>Parameter</li></h3>
              <h3><li>Parameter</li></h3>
              <h3><li>Parameter</li></h3>
              <h3><li>Parameter</li></h3>
              <h3><li>Parameter</li></h3>
            </ul>
            <h2>SAMPLE TEXT</h2>
            <ul>
              <h3><li>Parameter</li></h3>
              <h3><li>Parameter</li></h3>
              <h3><li>Parameter</li></h3>
              <h3><li>Parameter</li></h3>
              <h3><li>Parameter</li></h3>
              <h3><li>Parameter</li></h3>
              <h3><li>Parameter</li></h3>
              <h3><li>Parameter</li></h3>
            </ul>
              <h2>Sample parameters:</h2>
              <ul>
              <h3><li>Parameter</li></h3>
              <h3><li>Parameter</li></h3>
              <h3><li>Parameter</li></h3>
              <h3><li>Parameter</li></h3>
              <h3><li>Parameter</li></h3>
              </ul>
                <h1>SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT</h1>
            </div>
    </div>
  );
}

export default App;

/*
import React from 'react';
import { useEffect } from 'react';
import { client_id, secret_key, url } from "D:/VScode/private_data";
import systems from './data/systems'
import Login from "./dataProcessing/Login";
import FetchAllEveData from './dataProcessing/FetchAllEveData';
import ProcessOrders from './dataProcessing/ProcessOrders';
import ResultCard from './ResultCard';
import './Body.css'

var token = '';
function Body() {
  const [userData, setUserData] = React.useState({
    user_capacity:null,
    user_balance:null,
    user_tax:null,
    user_system:null,
    sec:null,
    CharacterName:null,
  });
  const [results, setResults] = React.useState();
  var data;
  const [err,setErr] = React.useState(false);
  const [msg, setMsg] = React.useState('');
  const systemItems = systems.map((system) =>
    <option value={system.system_name} key={system.id}/>
  );

  const queryParams = new URLSearchParams(window.location.search);
  const auth_code = queryParams.get("code");
  var logged_in = (auth_code !== null) ? true : false;
  var pageloaded = false;

  const [stars, setStars] = React.useState(generateStars());
  function generateStars(){
    var stars = [];
    var setleft = 0;
    var settop = 0;
    var setrotate = 0;
    for(var i = 0; i < 150; i++){
      setleft = Math.floor(Math.random() * 99);
      settop = Math.floor(Math.random() * 99);
      var star=<div className="star" 
      grows={ Math.random() > 0.5 ? 'false' : 'true'} 
      key={i}
      style={
        {left: (setleft)+'%',
        top: (settop)+'%',
        opacity: (Math.floor(Math.random() * 10) / 10)}}>
      </div>
      stars.push(star)
    }
    return stars;
  }
  setTimeout(()=>{
    var resstars = stars.map(star=>{
      if(star.props.style['opacity'] > 0.9 & star.props.grows === 'true'){
        var resstar=<div className="star" 
        key = {Math.random()}
        grows={'false'} 
        style={
          {left: (star.props.style['left']),
          top: (star.props.style['top']),
          opacity: (1)}}>
        </div>
        return resstar;
      } else if (star.props.grows === 'true') {
        var resstar=<div className="star"  
        key = {Math.random()}
        grows={'true'} 
        style={
          {left: (star.props.style['left']),
          top: (star.props.style['top']),
          opacity: (star.props.style['opacity'] + 0.05)}}>
        </div>
        return resstar;
      }
      if(star.props.style['opacity'] < 0.1 & star.props.grows === 'false'){
        var resstar=<div className="star"  
        key = {Math.random()}
        grows={'true'} 
        style={
          {left: (star.props.style['left']),
          top: (star.props.style['top']),
          opacity: (0)}
        }>
        </div>
        return resstar;
      } else if (star.props.grows === 'false') {
        var resstar=<div className="star"  
        key = {Math.random()}
        grows={'false'} 
        style={
          {left: (star.props.style['left']),
          top: (star.props.style['top']),
          opacity: (star.props.style['opacity'] - 0.05)}}>
        </div>
        return resstar;
      }
    });
    setStars(resstars);
  },125)

  useEffect(() => {
    if (!pageloaded && logged_in) {
      Login(auth_code)
        .then(res => {
          if (res.user_balance !== null){
            console.log("page loaded and you logged in");
            token = res.access_token;
            setUserData(res);
            console.log(res);
          } else {
            setErr(true);
            console.log("error set");
          }
        });
    }
    return () => { pageloaded = true; }
    },[]);

  function handleSubmit(e){
    e.preventDefault();
    let user_system = systems.find(system => system.system_name === e.target[3].value);
    data = {
      volume:e.target[0].value,
      capital:e.target[1].value,
      tax:e.target[2].value,
      system:user_system.id,
      sec:e.target[4].checked,
    };
    FetchAllEveData(data, setMsg)
      .then(res=>{
        setMsg('Calculating result...');
        console.log(res);
        ProcessOrders(res.buyData, res.sellData, data)
        .then(r=>{
          setResults(r.map(i => {
            return <ResultCard 
              obj = {i}
              token = {token}
              key = {i.id}
              logged_in = {logged_in & !err ? true : false}
            />
          }))
          setMsg('');
        })
      });
    }
  return (
    <>
      <div className="Body" >
      {
        logged_in & !err ? 
        <span>Logged in as {userData.CharacterName}</span> :
        <div>
          <span>Input your data or </span>
          <a href={url}>Log in</a>
        </div>
      }
      {stars}
      <form onSubmit={handleSubmit}>
        <label htmlFor="volume">Available volume:</label><br/>
        <input defaultValue={userData.user_capacity} id="volume" name="volume" type="number"/><br/>
        <label htmlFor="capital">Available capital:</label><br/>
        <input defaultValue={userData.user_balance} id="capital" name="capital" type="number"/><br/>
        <label htmlFor="tax">Your sales tax:</label><br/>
        <input defaultValue={userData.user_tax} step={0.01} id="tax" name="tax" type="number"/><br/>
        <label htmlFor="system">Your system:</label><br/>
        <input defaultValue={userData.user_system} id="system" name="system" list="systemList"/>
        <datalist  id="systemList" name="systemList">
          {systemItems}
        </datalist><br/>
        <label htmlFor="sec">Search only in highsec:</label><br/>
        <input id="sec" name="sec" type="checkbox"/><br/>
        <button type="submit" >submit</button>
      </form>
      <p>{msg}</p>
      </div>
      {results}
    </>
  )
}

export default Body;
*/