import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import Cycles from '../Cycles/Cycles';
import Info from '../Info/Info';
import Newsletter from '../Newsletter/Newsletter';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Info></Info>
            <Cycles></Cycles>
            <AboutUs></AboutUs>
            <Reviews></Reviews>
            <Newsletter></Newsletter>
            <Footer></Footer>
        </div>
    );
};

export default Home;

// const cycles = [
//     {
//         name: "Mach City iBike 7 Speed Large Matt Black",
//         price: 10580,
//         desc: "A 7-speed bike for those who've just embarked upon their cycling adventures. The traffic, the pollution are all things of the past. Embezzled with a lightweight steel frame, a quick release front wheel, durable nylon tyres, this bike is also equipped with a 7-speed Shimano Tourney gear system with Revo Shifters for quick, breezy rides. So, hop on and go explore your city!",
//         img: "https://i.ibb.co/Z8XnJLJ/1-FG361-G0050000-A.png",
//     },
//     {
//         name: "Mach City iBike Single Speed",
//         price: 9170,
//         desc: "A 7-speed bike for those who've just embarked upon their cycling adventures. The traffic, the pollution are all things of the past. Embezzled with a lightweight steel frame, a quick release front wheel, durable nylon tyres, this bike is also equipped with a 7-speed Shimano Tourney gear system with Revo Shifters for quick, breezy rides. So, hop on and go explore your city!",
//         img: "https://i.ibb.co/FmwRpFY/trailfire-dbf-0.png",
//     },
//     {
//         name: "Mach City iBike SS 27.5T",
//         price: 9470,
//         desc: "A 7-speed bike for those who've just embarked upon their cycling adventures. The traffic, the pollution are all things of the past. Embezzled with a lightweight steel frame, a quick release front wheel, durable nylon tyres, this bike is also equipped with a 7-speed Shimano Tourney gear system with Revo Shifters for quick, breezy rides. So, hop on and go explore your city!",
//         img: "https://i.ibb.co/GWGSy5h/timpa-0.png",
//     },
//     {
//         name: "Mach City Munich 21Sp 700c",
//         price: 14030,
//         desc: "A 7-speed bike for those who've just embarked upon their cycling adventures. The traffic, the pollution are all things of the past. Embezzled with a lightweight steel frame, a quick release front wheel, durable nylon tyres, this bike is also equipped with a 7-speed Shimano Tourney gear system with Revo Shifters for quick, breezy rides. So, hop on and go explore your city!",
//         img: "https://i.ibb.co/CWQFrb9/1-FG360-G0099000-A.png",
//     },
//     {
//         name: "Roadeo A65 26T Black",
//         price: 14550,
//         desc: "A 7-speed bike for those who've just embarked upon their cycling adventures. The traffic, the pollution are all things of the past. Embezzled with a lightweight steel frame, a quick release front wheel, durable nylon tyres, this bike is also equipped with a 7-speed Shimano Tourney gear system with Revo Shifters for quick, breezy rides. So, hop on and go explore your city!",
//         img: "https://i.ibb.co/s1SPfFR/1-FPL48-G07069000-A-0.png",
//     },
//     {
//         name: "Roadeo A65 24T Orange",
//         price: 13950,
//         desc: "A 7-speed bike for those who've just embarked upon their cycling adventures. The traffic, the pollution are all things of the past. Embezzled with a lightweight steel frame, a quick release front wheel, durable nylon tyres, this bike is also equipped with a 7-speed Shimano Tourney gear system with Revo Shifters for quick, breezy rides. So, hop on and go explore your city!",
//         img: "https://i.ibb.co/F3LVgkK/ibike1.png",
//     },
//     {
//         name: "Hercules Streetcat Pro",
//         price: 7275,
//         desc: "A 7-speed bike for those who've just embarked upon their cycling adventures. The traffic, the pollution are all things of the past. Embezzled with a lightweight steel frame, a quick release front wheel, durable nylon tyres, this bike is also equipped with a 7-speed Shimano Tourney gear system with Revo Shifters for quick, breezy rides. So, hop on and go explore your city!",
//         img: "https://i.ibb.co/7bG9mzf/munich-21.png",
//     },
//     {
//         name: "Hercules Kombat ZX 24T",
//         price: 7400,
//         desc: "A 7-speed bike for those who've just embarked upon their cycling adventures. The traffic, the pollution are all things of the past. Embezzled with a lightweight steel frame, a quick release front wheel, durable nylon tyres, this bike is also equipped with a 7-speed Shimano Tourney gear system with Revo Shifters for quick, breezy rides. So, hop on and go explore your city!",
//         img: "https://i.ibb.co/s22701z/munich4.png",
//     },
//     {
//         name: "Hercules Kombat RF 26T",
//         price: 8970,
//         desc: "A 7-speed bike for those who've just embarked upon their cycling adventures. The traffic, the pollution are all things of the past. Embezzled with a lightweight steel frame, a quick release front wheel, durable nylon tyres, this bike is also equipped with a 7-speed Shimano Tourney gear system with Revo Shifters for quick, breezy rides. So, hop on and go explore your city!",
//         img: "https://i.ibb.co/Z8XnJLJ/1-FG361-G0050000-A.png",
//     },
//     {
//         name: "Hercules Flarecity 26T",
//         price: 9580,
//         desc: "A 7-speed bike for those who've just embarked upon their cycling adventures. The traffic, the pollution are all things of the past. Embezzled with a lightweight steel frame, a quick release front wheel, durable nylon tyres, this bike is also equipped with a 7-speed Shimano Tourney gear system with Revo Shifters for quick, breezy rides. So, hop on and go explore your city!",
//         img: "https://i.ibb.co/gR9CzMs/ibike5.png",
//     }
// ]

