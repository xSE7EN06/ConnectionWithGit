import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AlertController } from '@ionic/angular'; // Importar AlertController

declare var paypal: any; // Declarar la variable global de PayPal

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  
  hamburgesa !: string;
  numeroHamburguesas !: number;
  complementosForm: FormGroup;
  total = 0;
  tipoPago!: string;
  precioComplemento = 0;

  // Mover la declaración de precios aquí
  precios: Precios = {
    papas: 30,
    aros_cebolla: 20
  };

  constructor(private fb: FormBuilder, private alertController: AlertController) {
    // Definir el formulario con checkboxes
    this.complementosForm = this.fb.group({
      papas: [false],
      aros_cebolla: [false]
    });

    // Escuchar cambios en los checkboxes
    this.complementosForm.valueChanges.subscribe(valores => {
      this.calcularPrecioComplementos(valores);
    });
  }

  ngAfterViewInit() {
    this.inicializarPayPal();
  }

  generarPago(){
    let precioBase = 0;
    switch (this.hamburgesa) {
      case "doble":
        precioBase = 30.00;
      break;
      case "triple":
        precioBase = 60.00;
      break;
      case "especial":
        precioBase = 75.00;
      break;
    }

    let precioTotal = (precioBase + this.precioComplemento) * this.numeroHamburguesas;

    if (this.tipoPago === 'efectivo' || this.tipoPago === 'tarjeta') {
      precioTotal = precioTotal * 1.05; 
    }

    this.total = precioTotal;
    console.log('Precio Total: ', this.total);

    this.inicializarPayPal(); // Llamar PayPal después de calcular el precio
  }

  calcularPrecioComplementos(valores: any) {
    this.precioComplemento = 0;
    for (let key in valores) {
      if (valores[key]) {
        this.precioComplemento += this.precios[key]; // Sumar precio si está seleccionado
      }
    }
  }

  async inicializarPayPal() {
    if (!this.total) return; // Asegurar que hay un total antes de inicializar

    paypal.Buttons({
      createOrder: (data: any, actions: any) => {
        return actions.order.create({
          purchase_units: [{
            amount: {
              value: this.total.toFixed(2) // Total a pagar
            }
          }]
        });
      },
      onApprove: async (data: any, actions: any) => {
        return actions.order.capture().then(async (details: any) => {
         // Mostrar mensaje de éxito con AlertController
         const alert = await this.alertController.create({
          header: 'Pago Exitoso',
          message: `Pago completado por <strong>${details.payer.name.given_name}</strong>`,
          buttons: ['OK']
        });
        await alert.present();
        console.log('Detalles de la transacción:', details);
        });
      },
      onError: async (err: any) => {
        console.error('Error en PayPal:', err);
        const alert = await this.alertController.create({
          header: 'Error en el Pago',
          message: 'Hubo un problema con el pago. Intenta de nuevo.',
          buttons: ['OK']
        });
        await alert.present();
      }
    }).render('#paypal-button-container');
  }
}

interface Precios {
  [key: string]: number; // permite usar cualquier cadena como índice
}
