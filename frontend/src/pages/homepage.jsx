import './homep.scss'
import Cabecalho from '../components/cabecalho'
import HeroSection from '../components/herosection/hero'
import SobreHome from '../components/sobreHome/sobreo'

export default function Home (){
    return(
        <div className="Container-HomePage">
            <Cabecalho />
            <HeroSection />
            <SobreHome />
        </div>    
    )
}