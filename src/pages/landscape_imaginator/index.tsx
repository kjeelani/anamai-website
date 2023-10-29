import Header from '@/components/Header';
import LandscapeImaginator from '@/components/LandscapeImaginator';
import Navbar from '@/components/Navbar';


/*Login*/
export default function Home() {
    return (
        <div className="App">
            <Navbar active="2"></Navbar>
            <Header></Header>
            <LandscapeImaginator t="Describe your Landscape"></LandscapeImaginator>
        </div>
    )
}
