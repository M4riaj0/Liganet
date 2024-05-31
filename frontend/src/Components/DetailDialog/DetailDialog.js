import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import CanchaDetail from './CanchaDetail/';
import JugadorDetail from './JugadorDetail';
import EquipoDetail from './EquipoDetail';
import TorneoDetail from './TorneoDetail';

const DetailDialog = ({ open, onClose, type, data }) => {
  const renderDetail = () => {
    switch (type) {
      case 'cancha':
        return <CanchaDetail cancha={data} />;
      case 'jugador':
        return <JugadorDetail jugador={data} />;
      case 'equipo':
        return <EquipoDetail equipo={data} />;
      case 'torneo':
        return <TorneoDetail torneo={data} />;
      default:
        return null;
    }
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>{data.nombre || data.nombreCompleto || data.nombreEquipo || data.nombreTorneo}</DialogTitle>
      <DialogContent>
        {renderDetail()}
      </DialogContent>
    </Dialog>
  );
};

export default DetailDialog;
