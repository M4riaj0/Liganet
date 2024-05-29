package com.api.backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.api.backend.models.FieldModel;
import com.api.backend.services.FieldService;

import java.util.ArrayList;
import java.util.Optional;

@RestController
@RequestMapping("/api/fields")
public class FieldController {

    @Autowired
    private FieldService fieldService;

    @GetMapping
    public ArrayList<FieldModel> getAllFields() {
        return this.fieldService.getAllFields();
    }

    @GetMapping("/name/{name}")
    public Optional<FieldModel> getFieldByName(@PathVariable("name") String name) {
        return this.fieldService.getFieldByName(name);
    }

    @GetMapping("/{id}")
    public Optional<FieldModel> getFieldById(@PathVariable("id") Long id) {
        return this.fieldService.getFieldById(id);
    }

    @PostMapping
    public ResponseEntity<?> createField(@RequestBody FieldModel field) {
        try {
            FieldModel newField = this.fieldService.createField(field);
            return new ResponseEntity<>(newField, HttpStatus.CREATED);
        } catch (Exception e) {
            e.printStackTrace(); // Imprime la excepción en la consola para su diagnóstico
            return new ResponseEntity<>("Error al crear cancha", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/{id}")
    public Optional<FieldModel> updateField(@PathVariable("id") Long id, @RequestBody FieldModel request) {
        return this.fieldService.updateField(id, request);
    }
    
}
