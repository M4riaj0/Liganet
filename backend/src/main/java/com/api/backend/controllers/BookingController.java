package com.api.backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import com.api.backend.models.BookingModel;
import com.api.backend.services.BookingService;

import java.util.ArrayList;
import java.util.Optional;

@RestController
@RequestMapping("/api/booking")

public class BookingController {

    @Autowired
    private BookingService bookingService;

    @GetMapping
    public ArrayList<BookingModel> getAllBookings() {
        return this.bookingService.getAllBookings();
    }

    @GetMapping("/user/{id}")
    public ArrayList<BookingModel> getBookingsByUser(@PathVariable("id") Long id) {
        return this.bookingService.getBookingsByUser(id);
    }

    @GetMapping("/{id}")
    public Optional<BookingModel> getBookingById(@PathVariable("id") Long id) {
        return this.bookingService.getBookingById(id);
    }

    @PostMapping
    public ResponseEntity<?> createBooking(@RequestBody BookingModel booking) {
        try {
            BookingModel newUser = this.bookingService.createBooking(booking);
            return new ResponseEntity<>(newUser, HttpStatus.CREATED);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>("Error al crear la reserva", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/{id}")
    public Optional<BookingModel> updateBooking(@PathVariable("id") Long id, @RequestBody BookingModel request) {
        return this.bookingService.updateBooking(id, request);
    }

    @DeleteMapping("/{id}")
    public void deleteBooking(@PathVariable("id") Long id) {
        Boolean result = this.bookingService.deleteBooking(id);
        if (result) {
            System.out.println("Reserva eliminado");
        } else {
            System.out.println("Error eliminando reserva");
        }
    }
}