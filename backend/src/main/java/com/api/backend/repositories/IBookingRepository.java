package com.api.backend.repositories;

import com.api.backend.models.BookingModel;

import java.util.ArrayList;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IBookingRepository extends JpaRepository<BookingModel, Long> {
    ArrayList<BookingModel> findByIdPersona(Long idPersona);
}