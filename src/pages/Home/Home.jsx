import './Home.css';
import Navbar from '../../components/Navbar/Navbar';
import hero_banner from '../../assets/hero_banner.jpg';
import hero_title from '../../assets/hero_title.png';
import play_icon from '../../assets/play_icon.png';
import info_icon from '../../assets/info_icon.png';
import TitleCards from '../../components/TitleCards/TitleCards';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <div className="hero">
        <img src={hero_banner} alt="Hero Banner" className='banner-img' />
        <div className="hero-caption">
          <img src={hero_title} alt="Hero Title" className='caption-img' />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil dicta velit eum similique accusantium provident incidunt molestiae unde asperiores aut, at doloremque praesentium quisquam explicabo corporis enim libero voluptates beatae!
          </p>
          <div className="hero-btns">
            <button className='btn'>
              <img src={play_icon} alt="Play Icon" />
              Play
            </button>
            <button className='btn dark-btn'>
              <img src={info_icon} alt="Info Icon" />
              More Info
            </button>
          </div>
        </div>
      </div>
      <div className="more-cards">
        <TitleCards title="Popular on Netflix" category="now_playing" />
        <TitleCards title="Blockbuster Movies" category="top_rated" />
        <TitleCards title="Only on Netflix" category="popular" />
        <TitleCards title="Upcoming" category="upcoming" />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
