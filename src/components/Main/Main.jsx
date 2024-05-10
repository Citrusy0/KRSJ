import { useEffect } from 'react';
import './Main.scss';

export default function Main() {

  const animate = () => {
    const circles = document.querySelectorAll('.circles li');

    circles.forEach(function (circle) {
      circle.style.width = Math.random() * 50 + 5 + 'px';
      circle.style.height = circle.style.width;
      circle.style.left = Math.random() * 100 + '%';
      circle.style.animationDelay = getRandomDelay() + 's';
      circle.style.animationDuration = getRandomDuration() + 's';
    });

    function getRandomDelay() {
      return Math.random() * 5 + 2;
    }

    function getRandomDuration() {
      return Math.random() * 10 + 2;
    }
  }

  useEffect(() => {
    animate()
  }, [])

  return (
    <div className='main'>
      <div className='bg'>
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className='content'>
        <h1>{`< This webpage is being updated >`}</h1>
        <h5>Please wait...</h5>
      </div>
      <footer>
        <p>Copyright &copy; 2024 - Property of Citrusy</p>
        <p>Template provided by <a href='https://github.com/WickyPlays' target='_blank' rel='noreferrer'>Wicky</a></p>
      </footer>
    </div>
  );
}