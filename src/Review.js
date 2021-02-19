import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index,setIndex] = useState(2);
  const {name,job,image,text} = people[index]

  const checker=(num)=>{
    if(num>people.length-1){return 0;}
    if(num<0){return people.length-1;}
    else{return num;}
  }

  const prev=()=>{
    setIndex((index)=>{
      let newIndex= index-1;
      return checker(newIndex);
    });
  }

  const next =()=>{
    setIndex((index)=>{
      let newIndex= index+1;
      return checker(newIndex);
    });
  }

  // const prev =()=> {
  //   if(index==0){setIndex(people.length-1)}
  //   else
  //   {setIndex(index-1);}
  // }

  // const next =()=>{
  //   if(index>people.length-1){setIndex(0)}
  //   else
  //   {setIndex(index+1);}
  // }

  const random = () =>{
    let x= Math.floor((people.length)*Math.random())
    console.log(x);
    setIndex(x)
  }



  return (
  <article className="review">
  <div className="img-container">
  <img src={image} alt={name} className="person-img"/>
  <span className="quote-icon">
    <FaQuoteRight />
  </span>
  </div>
  <h4 className="author"> {name} </h4>
  <p className="job"> {job} </p>
  <p className="info"> {text} </p>
  <div className="button-container">
    <button className="prev-btn" onClick={prev}>
      <FaChevronLeft />
    </button>
    <button className="next-btn" onClick={next}>
      <FaChevronRight />
    </button>
    </div>
    <button className="random-btn" onClick={random}>
      surprise me
    </button>
  </article>
  )};

export default Review;
