package com.api.backend.services;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.api.backend.models.AddressModel;
import com.api.backend.repositories.IAddressRepository;

@Service
public class AddressService {

    @Autowired
    private IAddressRepository addressRepository;

    public ArrayList<AddressModel> getAllAddress() {
        return (ArrayList<AddressModel>) addressRepository.findAll(); // en JPA se usa findAll() para obtener todos los registros
    }

    public AddressModel createAddress(AddressModel address) {
        return addressRepository.save(address); // en JPA se usa save() para guardar un registro
    }

    // public Optional<AddressModel> getUserByUserName(String nombreUsuario) {
    //     return addressRepository.findByNombreUsuario(nombreUsuario);
    // }

    public Optional<AddressModel> getAddressById(Long id) {
        return Optional.ofNullable(addressRepository.findById(id).get());        
        // return addressRepository.findById(id);
    }

    /**
     * @param id
     * @param request
     * @return
     */
    public Optional<AddressModel> updateAddress(Long id, AddressModel request) {
        Optional<AddressModel> addressFound = Optional.ofNullable(addressRepository.findById(id).get());
        if (addressFound.isPresent()) {
            AddressModel address = addressFound.get();
            address.setDireccion(request.getDireccion());
            address.setCiudad(request.getCiudad());
            address.setDepartamento(request.getDepartamento());
            address.setPais(request.getPais());
            addressRepository.save(address);
        }
        return addressFound;
    }

    public Boolean deleteAddress(Long id) {
        try {
            addressRepository.deleteById(id);
            return true;
        } catch (Exception e) {
            return false;
        }
    }
}