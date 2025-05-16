import './App.css';
import { useState } from 'react';
import html2canvas from 'html2canvas';

function App() {

  // MVP Features
  // 1. Live Preview
  // 2. Download Image

  // 1. Live Preview
  // Algorithm
  // step 1: create state variables
  // step 2: create function to update value
  // step 3: use the updated values in preview

  //2. Download Image
  // Algorithm
  // step 1: create function to download image
  // step 2: call the function when download button is clicked
  // step 3: use html2canvas to convert html to image
  // step 4: save the image to local storage

  //v2 features
  // Dynamic Background Image

  // Dynamic Background Image
  // Algorithm
  // step 1: create state variable for background image
  // step 2: create function to update background image
  // step 3: use the updated background image in preview
  // step 4: add input field to select background image

  //Dynamic font Styles
  // Algorithm
  // step 1: create state variables for font styles
  // step 2: create function to update font styles
  // step 3: use the updated font styles in preview
  // step 4: create a demo of font styles

  const [greeting, setGreeting] = useState("")
  const [msg, setMsg] = useState("")
  const [name, setName] = useState("")
  const [fontStyle, setFontStyle] = useState('Arial');  // New state for font style
  const [fontColor, setFontColor] = useState('#000'); // New state for font color

  const imgPath = {
    bg: "/assets/images/bg.png",
    bg2: "/assets/images/bg2.jpeg",
    bg3: "/assets/images/bg3.jpeg"
  }
  const [selectedImage, setSelectedImage] = useState(imgPath.bg)

  const handleDownload = () => {
    const div = document.querySelector('.preview');

    html2canvas(div).then((canvas) => {
      // Create a PNG image from the canvas
      const img = canvas.toDataURL("image/png");

      // Create an anchor element to trigger the download
      const link = document.createElement('a');
      link.href = img;
      link.download = 'preview-image.png';  // Name of the downloaded file
      link.click();
    });
  };

  return (
    <section>
      <div className='container'>
        <div className="color"></div>
        <div className="color"></div>
        <div className="color"></div>
        <div className="box">
          <div className="square" style={{ "--i": 0 }}></div>
          <div className="square" style={{ "--i": 1 }}></div>
          <div className="square" style={{ "--i": 2 }}></div>
          <div className="square" style={{ "--i": 3 }}></div>
          <div className="square" style={{ "--i": 4 }}></div>
        </div>
        <h1>POST GENERATOR</h1>
        <div className='row'>
          <div className='col-md-6'>
            {/* create post start */}
            <div className='card'>
              <div className='card-header'>Create Post</div>
              <div className='card-body'>
                <label htmlFor='greeting'>Greeting:</label>
                <input type='text' id='greeting' placeholder='Enter Greeting' onChange={(e) => {
                  setGreeting(e.target.value)
                }}></input><br />
                <label htmlFor='msg'>Message:</label>
                <input type='text' id='msg' placeholder='Enter Message' onChange={(e) => {
                  setMsg(e.target.value)
                }}></input><br />
                <label htmlFor='name'>Name:</label>
                <input type='text' id='name' placeholder='Enter Name' onChange={(e) => {
                  setName(e.target.value)
                }}></input><br />
              </div>
            </div>
            {/* create post end */}
            {/* background images start */}
            <div className='card mt-3'>
              <div className='card-header'>Background Image</div>
              <div className='card-body'>
                <div className='img-holder'>
                  <img src={imgPath.bg} alt='' style={{border: selectedImage == imgPath.bg ? '2px solid #008080' : '' }} onClick={() => { setSelectedImage(imgPath.bg) }} />
                  <img src={imgPath.bg2} alt='' style={{ border: selectedImage == imgPath.bg2 ? '2px solid #008080' : '' }} onClick={() => { setSelectedImage(imgPath.bg2) }} />
                  <img src={imgPath.bg3} alt='' style={{ border: selectedImage == imgPath.bg3 ? '2px solid #008080' : '' }} onClick={() => { setSelectedImage(imgPath.bg3) }} />
                </div>
              </div>
            </div>

            <div className='card mt-3 mb-3'>
              <div className='card-header'>Style</div>
              <div className='card-body'>
                {/* Font Style Selection */}
                <div className='font-style mt-2'>
                  <label htmlFor="fontStyle">Font Style:</label>
                  <select id="fontStyle" value={fontStyle} onChange={(e) => setFontStyle(e.target.value)}>
                    <option value="Arial">Arial</option>
                    <option value="Times New Roman">Times New Roman</option>
                    <option value="Courier New">Courier New</option>
                    <option value="Georgia">Georgia</option>
                    <option value="Verdana">Verdana</option>
                    <option value="Saleha">Saleha</option>
                    <option value="Arabic">Arabic</option>
                    <option value="Darkland">Darkland</option>
                  </select>
                </div>
                {/* Font Style Selection end */}

                {/* Font Color Selection */}
                <div className='font-color mt-2'>
                  <label htmlFor="fontColor">Font Color:</label>
                  <input
                    type="color"
                    id="fontColor"
                    value={fontColor}
                    onChange={(e) => setFontColor(e.target.value)}
                  />
                </div>
                {/* Font Color Selection end */}
                <p style={{ fontFamily: fontStyle, color: fontColor, fontSize: '30px', textAlign: 'center', margin: '10px 0 -10px' }}>FONT STYLE DEMO</p>
              </div>
            </div>
          </div>
          {/* background images end */}
          <div className='col-md-6'>
            <div className='card'>
              <div className='card-header'>Preview</div>
              <div className='card-body'>
                <div className='preview' style={{ backgroundImage: `url(${selectedImage})` }}>
                  <h2 style={{ fontFamily: fontStyle, color: fontColor }}>{greeting}</h2>
                  <p style={{ fontFamily: fontStyle, color: fontColor }}>{msg}</p>
                  <h4 style={{ fontFamily: fontStyle, color: fontColor }}>{name}</h4>
                </div>
                <button onClick={handleDownload}>Download</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className='sk'>Designed And Developed BY SHAIBAAZ KARBELKAR &reg; &copy; &trade;</p>
    </section>
  );
}

export default App;
