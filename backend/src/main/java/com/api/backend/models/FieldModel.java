package com.api.backend.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Table;
import jakarta.persistence.Id;

@Entity
@Table(name = "cancha")
public class FieldModel {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idCancha;

    @Column(name = "nombre")
    private String nombre;
    
    @Column(name = "precio_hora")
    private double precioHora;

    @Column(name = "cantidad_jugadores")
    private int cantidadJugadores;

    @Column(name = "habilitada")
    private boolean habilitada;

    @Column(name = "id_empresa")
    private Long idEmpresa;

    @Column(name = "foto_url")
    private String fotoUrl;

    public Long getIdField() {
        return idCancha;
    }

    public void setIdField(Long idCancha) {
        this.idCancha = idCancha;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public double getPrecioHora() {
        return precioHora;
    }

    public void setPrecioHora(double precioHora) {
        this.precioHora = precioHora;
    }

    public int getCantidadJugadores() {
        return cantidadJugadores;
    }

    public void setCantidadJugadores(int cantidadJugadores) {
        this.cantidadJugadores = cantidadJugadores;
    }


    public boolean isHabilitada() {
        return habilitada;
    }

    public void setHabilitada(boolean habilitada) {
        this.habilitada = habilitada;
    }

    public Long getIdEmpresa() {
        return idEmpresa;
    }

    public void setIdEmpresa(Long idEmpresa) {
        this.idEmpresa = idEmpresa;
    }

    public String getFotoUrl() {
        return fotoUrl;
    }

    public void setFotoUrl(String fotoUrl) {
        this.fotoUrl = fotoUrl;
    }


}
