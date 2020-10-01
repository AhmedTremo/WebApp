import React, { Component } from 'react';
//import ReactTypingEffect from 'react-typing-effect';
import gif from '../images/92hY.gif';
import Social from '../components/Social'
class Home extends Component {
render() {
return (
<div className="condiv home">


{<img src= {gif} className="center" alt = "gif of a conveyer" ></img>}
{/* <h1 className="subtopic">About the project</h1> */}
{/* <h4>Hey there,</h4> */}
<h1>The Industrial Digitisation 4.0</h1>
<h3>A project by GUC students </h3>
<p>The 18th Century was the spark that ignited the first industrial revolution, where factories 
    and automobiles were powered by steam. The second industrial revolution graced the world mid the 19th century. 
    It was the beginning of a global mass production, and the third industrial revolution followed closely mid 
    the 20th century, right after the second world war. It was the era of the emergence of computer driven
    systems. The 21st century has witnessed, and still is witnessing, a remarkable and a rapid progression regarding
    technology, which is why the fourth industrial revolution is aiming to introduce and aid the prevailing of automated 
    systems. With augmented reality, Artificial Intelligence, Machine Learning, Big data platforms, and more leading 
    this transitional phase, there is certainly a lot to look forward to in the near future.
</p>
<br></br>
{/* <ReactTypingEffect className="typingeffect" text={'Welcome to the digitisation of industry project of 2020'} speed={70}  cursor = {false}> eraseDelay= {20000}</ReactTypingEffect> */}
<br></br>
<br></br>
{/* <ReactTypingEffect className = "typingeffect" cursor = {false}></ReactTypingEffect> */}
{/* <ReactTypingEffect className="typingeffect" text={'  '} speed={70}/> */}
<Social />
</div>
)
}
}
export default Home