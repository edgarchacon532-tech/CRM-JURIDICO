// Seguimiento Model for Case Tracking

class Seguimiento {
    constructor(caso_id, fecha_gestion, tipo_gestion, descripcion, responsable, proxima_accion, estado) {
        this.caso_id = caso_id;              // ID of the case
        this.fecha_gestion = fecha_gestion;  // Date of management
        this.tipo_gestion = tipo_gestion;    // Type of management
        this.descripcion = descripcion;      // Description of the management
        this.responsable = responsable;      // Person responsible
        this.proxima_accion = proxima_accion; // Next action
        this.estado = estado;                // Status of the case
    }

    // Additional methods can be added here for functionalities
}

module.exports = Seguimiento;