import React from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import SideBar from '../../Components/SideBar/SideBar';

function Home() {
    return (
        <div>
            <NavBar />
            <SideBar />
            {/* <HomeContent /> */}
        </div>
    );
    //     <div>
    //         <h1>Entraste al Home</h1>
    //     </div>
    // );
}

export default Home;