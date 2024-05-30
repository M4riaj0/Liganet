package com.api.backend.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
// Cada uno de los campos que añadimos será una columna en la tabla de la base de datos
@Table(name = "persona")
public class UserModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idPersona;

    @Column(name = "nombre_completo")
    private String nombreCompleto;

    @Column(name = "nombre_usuario")
    private String nombreUsuario;

    @Column(name="correo" , nullable = false, unique = true)
    private String correo;

    @Column(name = "celular")
    private String celular;

    @Column(nullable = false, unique = true, name = "cedula")
    private String cedula;

    @Column(name = "lugar_expedicion")
    private String lugarExpedicion;

    @Column(name = "fecha_nacimiento")
    private String fechaNacimiento;

    @Column(name = "genero")
    private String genero;

    @Column(name = "nacionalidad")
    private String nacionalidad;

    @Column(nullable = false, name = "contraseña")
    private String contraseña;

    @Column(name = "id_direccion")
    private Long idDireccion;

    @Column(name = "foto_perfil")
    private String fotoPerfil;

    public Long getIdUser() {
        return idPersona;
    }

    public void setIdUser(Long idPersona) {
        this.idPersona = idPersona;
    }

    public String getNombreCompleto() {
        return nombreCompleto;
    }

    public void setNombreCompleto(String nombreCompleto) {
        this.nombreCompleto = nombreCompleto;
    }

    public String getNombreUsuario() {
        return nombreUsuario;
    }

    public void setNombreUsuario(String nombreUsuario) {
        this.nombreUsuario = nombreUsuario;
    }

    public String getCorreo() {
        return correo;
    }

    public void setCorreo(String correo) {
        this.correo = correo;
    }

    public String getCelular() {
        return celular;
    }

    public void setCelular(String celular) {
        this.celular = celular;
    }

    public String getCedula() {
        return cedula;
    }

    public void setCedula(String cedula) {
        this.cedula = cedula;
    }

    public String getLugarExpedicion() {
        return lugarExpedicion;
    }

    public void setLugarExpedicion(String lugarExpedicion) {
        this.lugarExpedicion = lugarExpedicion;
    }


    public String getFechaNacimiento() {
        return fechaNacimiento;
    }

    public void setFechaNacimiento(String fechaNacimiento) {
        this.fechaNacimiento = fechaNacimiento;
    }


    public String getGenero() {
        return genero;
    }

    public void setGenero(String genero) {
        this.genero = genero;
    }

    public String getNacionalidad() {
        return nacionalidad;
    }

    public void setNacionalidad(String nacionalidad) {
        this.nacionalidad = nacionalidad;
    }


    public String getContraseña() {
        return contraseña;
    }

    public void setContraseña(String contraseña) {
        this.contraseña = contraseña;
    }

    public Long getIdDireccion() {
        return idDireccion;
    }

    public void setIdDireccion(Long idDireccion) {
        this.idDireccion = idDireccion;
    }

    public String getFotoPerfil() {
        return fotoPerfil;
    }

    public void setFotoPerfil(String fotoPerfil) {
        this.fotoPerfil = fotoPerfil;
    }


}