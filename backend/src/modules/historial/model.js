class HistorialCambios {
    constructor() {
        this.cambios = [];
    }

    agregarCambio(cambio) {
        this.cambios.push(cambio);
    }

    obtenerCambios() {
        return this.cambios;
    }

    limpiarHistorial() {
        this.cambios = [];
    }
}