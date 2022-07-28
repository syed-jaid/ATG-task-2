import './App.css';
import Circle from "./Circle";
import leftsmimg from "./Img/1st-sm-lside.png"
import phone1 from "./Img/phone1.png"
import phone2 from "./Img/phone2.png"
import s2phone1 from "./Img/s2phone1.png"
import s2phone2 from "./Img/s2phone2.png"
import s2phone3 from "./Img/s2phone3.png"
import s2phone4 from "./Img/s2phone4.png"
import s2phone5 from "./Img/s2phone5.png"
import s3phone1 from "./Img/s3phone1.png"
import s3phone2 from "./Img/s3phone2.png"
import s4phone1 from "./Img/s4phone1.png"
import s4phone2 from "./Img/s4phone2.png"
import s5phone1 from "./Img/s5phone1.png"
import s5phone2 from "./Img/s5phone2.jpg"

function App() {

  return (
    <div className="App">
      <Circle></Circle>
      <div className='main-left-right'>
        <div className='left-side-div'>
          <img className='leftsideimg' src={leftsmimg} alt="" />
          <div className='leftsiderinfo'>
            <h1 className='left-title'>ABC 23478</h1>
            <p className='left-info'>We are the best <br /> web devloper company <br /> in the word</p>
          </div>
          <div className="middel-text">
            <p className='middel-a'>Biggest Classifieds</p>
            <h1 className='middel-b'>East Asia</h1>
            <p className='middel-c'>Counrties</p>
          </div>
        </div>
        <div className='right-side-div'>
          <img className='phone1' src={phone1} alt="" />
          <img className='phone2' src={phone2} alt="" />
          <img className='s2phone1' src={s2phone1} alt="" />
          <img className='s2phone2' src={s2phone2} alt="" />
          <img className='s2phone3' src={s2phone3} alt="" />
          <img className='s2phone4' src={s2phone4} alt="" />
          <img className='s2phone5' src={s2phone5} alt="" />
          <img className='s3phone1' src={s3phone1} alt="" />
          <img className='s3phone2' src={s3phone2} alt="" />
          <img className='s4phone1' src={s4phone1} alt="" />
          <img className='s4phone2' src={s4phone2} alt="" />
          <div className='s5phonediv'>
            <img className='s5phone1' src={s5phone1} alt="" />
          </div>


        </div>
      </div>
    </div>
  );
}

export default App;