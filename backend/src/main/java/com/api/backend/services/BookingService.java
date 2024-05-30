package com.api.backend.services;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.api.backend.models.BookingModel;
import com.api.backend.repositories.IBookingRepository;

@Service
public class BookingService {

    @Autowired
    private IBookingRepository bookingRepository;

    public ArrayList<BookingModel> getAllBookings() {
        return (ArrayList<BookingModel>) bookingRepository.findAll(); // JPA usa findAll() para obtener todos los registros
    }

    public ArrayList<BookingModel> getBookingsByUser(Long idPersona) {
        return (ArrayList<BookingModel>) bookingRepository.findByIdPersona(idPersona); 
    }

    public BookingModel createBooking(BookingModel booking) {
        return bookingRepository.save(booking); // JPA usa save() para guardar un registro
    }

    public Optional<BookingModel> getBookingById(Long id) {
        return bookingRepository.findById(id);
    }

    public Optional<BookingModel> updateBooking(Long id, BookingModel request) {
        Optional<BookingModel> bookingFound = bookingRepository.findById(id);
        if (bookingFound.isPresent()) {
            BookingModel booking = bookingFound.get();
            booking.setIdPersona(request.getIdPersona());
            booking.setFecha(request.getFecha());
            booking.setHora(request.getHora());
            booking.setCantidadHoras(request.getCantidadHoras());
            booking.setPrecioTotal(request.getPrecioTotal());
            booking.setIdCancha(request.getIdCancha());
            bookingRepository.save(booking);
        }
        return bookingFound;
    }

    public Boolean deleteBooking(Long id) {
        try {
            bookingRepository.deleteById(id);
            return true;
        } catch (Exception e) {
            return false;
        }
    }
}
