import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import CanchaDetail from '../CanchaDetail/CanchaDetail';
import JugadorDetail from '../JugadorDetail/JugadorDetail';
import EquipoDetail from '../EquipoDetail/EquipoDetail';
import TorneoDetail from '../TorneoDetail/TorneoDetail';

const DetailDialog = ({ open, onClose, type, data }) => {
  const renderDetail = () => {
    if (!data) return null;
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
      <DialogTitle>
        {data
          ? data.nombre || data.nombreCompleto || data.nombreEquipo || data.nombreTorneo
          : ''}
      </DialogTitle>
      <DialogContent>{renderDetail()}</DialogContent>
    </Dialog>
  );
};

export default DetailDialog;
