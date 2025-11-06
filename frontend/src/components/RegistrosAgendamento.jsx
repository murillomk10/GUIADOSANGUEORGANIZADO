import './RegistrosAgendamento.scss';

export default function RegistrosAgendamentos() {
  return (
    <div className="registros-agendamentos">
      <h2 className="section-title">Registros de Agendamentos:</h2>
      <div className="records-container">
        <div className="record-item">
          <div className="record-header">
            <p className="record-text">Juliano fez um agendamento na data: 20/10/2025</p>
            <div className="buttons-group">
              <button className="btn btn-authorize">Autorizar</button>
              <button className="btn btn-deny">Não autorizar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
