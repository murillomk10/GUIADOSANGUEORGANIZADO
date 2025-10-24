import './homep.scss'
import Cabecalho from '../components/cabecalho'
import HeroSection from '../components/herosection/hero'

export default function Home (){
    return(
        <div className="Container-HomePage">
            <Cabecalho />
            <HeroSection/>
        </div>    
    )
}