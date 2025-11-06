import RegistrosAgendamentos from '../components/RegistrosAgendamento';
import RegistrosCadastros from '../components/RegistrosCadastros';
import './RegistrosPage.scss';

export default function RegistrosPage() {
  return (
    <div className="registros-page">
      <RegistrosCadastros />
      <RegistrosAgendamentos />
    </div>
  );
}
