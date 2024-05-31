import React, { useEffect, useState } from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import SideBar from '../../Components/SideBar/SideBar';
import SearchView from '../SearchView/SearchView';
import FilterBar from '../../Components/FilterBar/FilterBar';
import Card from '../../Components/Card/Card';
import ReserveCard from '../../Components/ReserveCard/ReserveCard';
import ReservationDialog from '../../Components/ReservationDialog.js/ReservationDialog';
import { fetchCanchas, fetchReservasUsuario } from '../../Services/search';
import './Reserve.css';

const ReserveView = () => {
    const [view, setView] = useState('Reserve'); // 'home' or 'search'
    const [canchas, setCanchas] = useState([]);
    const [reservas, setReservas] = useState([]);
    const [dialogIsOpen, setDialogIsOpen] = useState(false);
    const [selectedIdCancha, setSelectedIdCancha] = useState(null);
    const [precioCancha, setPrecioCancha] = useState(0);

    useEffect(() => {
        const getReservas = async () => {
            try {
                const reservas = await fetchReservasUsuario();
                setReservas(reservas);
            } catch (error) {
                console.error('Error al obtener las reservas:', error);
            }
        };
        getReservas();
    }, []);

    useEffect(() => {
        const getCanchas = async () => {
            try {
                const canchas = await fetchCanchas();
                setCanchas(canchas);
            } catch (error) {
                console.error('Error al obtener las canchas:', error);
            }
        };
        getCanchas();
    }, []);

    const handleSearchClick = () => {
        setView('search');
    };

    const handleHomeClick = () => {
        setView('Reserve');
    };

    const handleResetFilters = () => {
        console.log('Filtros restablecidos');
        // Aquí puedes agregar la lógica para restablecer los filtros
    };

    const handleCardClick = (type, id, precio) => {
        if (type === 'field') {
            const selectedCancha = canchas.find(cancha => cancha.idField === id);
            if (selectedCancha) {
                setSelectedIdCancha(id);
                setPrecioCancha(precio); // Guarda el precio de la cancha seleccionada
                setDialogIsOpen(true);
            }
        }
    };

    const closeDialog = () => {
        setDialogIsOpen(false);
        setSelectedIdCancha(null);
    };

    return (
        <div className="home-container">
            <NavBar onSearchClick={handleSearchClick} />
            <div className="main-content">
                <SideBar onHomeClick={handleHomeClick} />
                {view === 'Reserve' ? (
                    //TODO LO DE LA RESERVAAAAAAA
                    <div className="ReserveContent">
                        <div className="Reservations">
                            <h3 className='TitleReservations'> Mis Reservas </h3>
                            {reservas.map((reserva) => (
                                <ReserveCard
                                    key={reserva.id_reserva}
                                    fecha={reserva.fecha}
                                    hora={reserva.hora}
                                    cantidad_horas={reserva.cantidad_horas}
                                    precio_total={reserva.precio_total}
                                    id_cancha={reserva.id_cancha} />
                            ))}
                        </div>
                        <div className="available-courts">
                            {canchas.map((cancha) => (
                                <Card
                                    key={cancha.idField}
                                    title={cancha.nombre}
                                    image={cancha.fotoUrl}
                                    type="field"
                                    onClick={() => handleCardClick('field', cancha.idField, cancha.precioHora)} />
                            ))}
                        </div>
                    </div>
                    // FINAL DE LA RESERVAAAAAAAAAAAAA
                ) : (
                    <div className="content">
                        <FilterBar onReset={handleResetFilters} />
                        <SearchView />
                    </div>
                )}
                <ReservationDialog isOpen={dialogIsOpen} onRequestClose={closeDialog} idCancha={selectedIdCancha} precioCancha={precioCancha} />
            </div>
        </div>
    );
};

export default ReserveView;
