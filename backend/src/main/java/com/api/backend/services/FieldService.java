package com.api.backend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.api.backend.repositories.IFieldRepository;
import com.api.backend.models.FieldModel;

import java.util.*;

@Service
public class FieldService {
    @Autowired
    private IFieldRepository fieldRepository;

    public ArrayList<FieldModel> getAllFields() {
        return (ArrayList<FieldModel>) fieldRepository.findAll();
    }

    public FieldModel createField(FieldModel field) {
        return fieldRepository.save(field);
    }

    public Optional<FieldModel> getFieldByName(String name) {
        return fieldRepository.findByNombre(name);
    }

    public Optional<FieldModel> getFieldById(Long id) {
        return Optional.ofNullable(fieldRepository.findById(id).get());
    }

    /**
     * @param id
     * @param request
     * @return
     */
    public Optional<FieldModel> updateField(Long id, FieldModel request) {
        Optional<FieldModel> fieldFound = Optional.ofNullable(fieldRepository.findById(id).get());
        if (fieldFound.isPresent()) {
            fieldFound.get().setNombre(request.getNombre());
            fieldFound.get().setPrecioHora(request.getPrecioHora());
            fieldFound.get().setCantidadJugadores(request.getCantidadJugadores());
            fieldFound.get().setHabilitada(request.isHabilitada());
            fieldFound.get().setIdEmpresa(request.getIdEmpresa());
            fieldRepository.save(fieldFound.get());
        }
        return fieldFound;
    }

    public Boolean deleteField(Long id) {
        try {
            fieldRepository.deleteById(id);
            return true;
        } catch (Exception e) {
            return false;
        }
    }

}
