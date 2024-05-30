package com.api.backend.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
// Cada uno de los campos que añadimos será una columna en la tabla de la base de datos
@Table(name = "torneo")
public class TournamentModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idTorneo;

    @Column(name = "cantidad_equipos")
    private Long cantidadEquipos;

    @Column(name = "cantidad_jugadores_equipo")
    private Long cantidadJugadoresEquipo;

    @Column(name = "categoria")
    private String categoria;

    @Column(name = "descripcion")
    private String descripcion;

    @Column(name = "fecha_inicio")
    private String fechaInicio;

    @Column(name = "formato")
    private String formato;

    @Column(name = "horario")
    private String horario;

    @Column(name = "nombre_torneo")
    private String nombreTorneo;

    @Column(name = "precio_inscripcion")
    private Float precioInscripcion;

    @Column(name = "precio_premiacion")
    private Float precioPremiacion;

    @Column(name = "reglamento")
    private String reglamento;

    @Column(name = "id_empresa")
    private Float idEmpresa;

    @Column(name = "id_reglamento")
    private Float idReglamento;

    @Column(name = "foto_url")
    private String fotoUrl;

    public Long getIdTorneo() {
        return idTorneo;
    }

    public void setIdTorneo(Long idTorneo) {
        this.idTorneo = idTorneo;
    }

    public Long getCantidadEquipos() {
        return cantidadEquipos;
    }

    public void setCantidadEquipos(Long cantidadEquipos) {
        this.cantidadEquipos = cantidadEquipos;
    }

    public Long getCantidadJugadoresEquipo() {
        return cantidadJugadoresEquipo;
    }

    public void setCantidadJugadoresEquipo(Long cantidadJugadoresEquipo) {
        this.cantidadJugadoresEquipo = cantidadJugadoresEquipo;
    }

    public String getCategoria() {
        return categoria;
    }

    public void setCategoria(String categoria) {
        this.categoria = categoria;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getFechaInicio() {
        return fechaInicio;
    }

    public void setFechaInicio(String fechaInicio) {
        this.fechaInicio = fechaInicio;
    }

    public String getFormato() {
        return formato;
    }

    public void setFormato(String formato) {
        this.formato = formato;
    }

    public String getHorario() {
        return horario;
    }

    public void setHorario(String horario) {
        this.horario = horario;
    }

    public String getNombreTorneo() {
        return nombreTorneo;
    }

    public void setNombreTorneo(String nombreTorneo) {
        this.nombreTorneo = nombreTorneo;
    }

    public Float getPrecioInscripcion() {
        return precioInscripcion;
    }

    public void setPrecioInscripcion(Float precioInscripcion) {
        this.precioInscripcion = precioInscripcion;
    }

    public Float getPrecioPremiacion() {
        return precioPremiacion;
    }

    public void setPrecioPremiacion(Float precioPremiacion) {
        this.precioPremiacion = precioPremiacion;
    }

    public String getReglamento() {
        return reglamento;
    }

    public void setReglamento(String reglamento) {
        this.reglamento = reglamento;
    }

    public String getFotoUrl() {
        return fotoUrl;
    }

    public void setFotoUrl(String fotoUrl) {
        this.fotoUrl = fotoUrl;
    }

    public Float getIdEmpresa() {
        return idEmpresa;
    }

    public void setIdEmpresa(Float idEmpresa) {
        this.idEmpresa = idEmpresa;
    }

    public Float getIdReglamento() {
        return idReglamento;
    }

    public void setIdReglamento(Float idReglamento) {
        this.idReglamento = idReglamento;
    }
}