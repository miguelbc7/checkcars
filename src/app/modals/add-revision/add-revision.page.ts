import { Component, OnInit } from '@angular/core';

@Component({
  	selector: 'app-add-revision',
  	templateUrl: './add-revision.page.html',
  	styleUrls: ['./add-revision.page.scss'],
})

export class AddRevisionPage implements OnInit {

  	active: boolean = false;
  	data:any = [
		{
		title: "Documentación",
		section: [
			{
			id: 1,
			concept: "Tarjeta de propiedad",
			status: false
			},
			{
			id: 2,
			concept: "Soat",
			status: false
			},
			{
			id: 3,
			concept: "Revisión Técnico-Mecánica",
			status: false
			},
			{
			id: 4,
			concept: "Póliza contra-extracontractual",
			status: false
			},
			{
			id: 5,
			concept: "Cédula de conducción",
			status: false
			},{
			id: 6,
			concept: "Tarjeta de conducción",
			status: false
			}
		]
		},
		{
		title: "Electricidad",
		section: [
			{
			id: 1,
			concept: "Luces altas, bajas y medias",
			status: false
			},
			{
			id: 2,
			concept: "Luces. Direccionales y de parqueo",
			status: false
			},
			{
			id: 3,
			concept: "Luces internas, aviso, timbre.",
			status: false
			},
			{
			id: 4,
			concept: "Limpiaparabrisas",
			status: false
			},
			{
			id: 6,
			concept: "Reversa. Luz/Alarma",
			status: false
			},
			{
			id: 7,
			concept: "Baterias. (Bornes y Saturación)",
			status: false
			},
			{
			id: 8,
			concept: "Pito",
			status: false
			},
			{
			id: 9,
			concept: "Stop o freno",
			status: false
			},

		]
		},
		{
		title: "Carroceria",
		section: [
			{
			id: 1,
			concept: "Espejos laterales, internos",
			status: false
			},
			{
			id: 2,
			concept: "Vidrios laterales. Etc",
			status: false
			},
			{
			id: 3,
			concept: "Silletería",
			status: false
			},
			{
			id: 4,
			concept: "Puertas (Booster y Gatos)",
			status: false
			},
			{
			id: 5,
			concept: "Emblemas y pinturas",
			status: false
			},
			{
			id: 6,
			concept: "Cinturón de seguridad",
			status: false
			},

		]
		},
		{
		title: "Llantas",
		section: [
			{
			id: 1,
			concept: "Estados general",
			status: false
			},
			{
			id: 2,
			concept: "Esparragos de las ruedas",
			status: false
			},
			{
			id: 3,
			concept: "Llantas de repuesto y HTA",
			status: false
			},
			{
			id: 4,
			concept: "Presión de inflado",
			status: false
			},
		]
		},
		{
		title: "Mecánico",
		section: [
			{
			id: 1,
			concept: "Nivel del aceite del motor",
			status: false
			},
			{
			id: 2,
			concept: "Fugas hidráulicas",
			status: false
			},
			{
			id: 3,
			concept: "Fugas refrigerantes",
			status: false
			},
			{
			id: 4,
			concept: "Fugas combustibles",
			status: false
			},
			{
			id: 5,
			concept: "Filtros",
			status: false
			},
			{
			id: 6,
			concept: "Fugas de aceite",
			status: false
			},
			{
			id: 7,
			concept: "Suspensión",
			status: false
			},
			{
			id: 8,
			concept: "Cardan (Crucetas, yoquis)",
			status: false
			},
			{
			id: 9,
			concept: "Correa, alternador hidráulico, etc",
			status: false
			},
			{
			id: 10,
			concept: "Tapas: Hidráulico, combustible, etc",
			status: false
			},
			{
			id: 11,
			concept: "Transmisión",
			status: false
			},
			{
			id: 12,
			concept: "Dirección",
			status: false
			},
			{
			id: 13,
			concept: "Frenos, servicio y emergencia",
			status: false
			},
			{
			id: 14,
			concept: "Barra de dirección",
			status: false
			},
		]
		},
		{
		title: "Otros",
		section: [
			{
			id: 1,
			concept: "Extintores y soportes",
			status: false
			},
			{
			id: 2,
			concept: "Botiquín",
			status: false
			},
			{
			id: 3,
			concept: "Equipo de carreteras",
			status: false
			},
			{
			id: 4,
			concept: "Herramientas básicas",
			status: false
			},
			{
			id: 5,
			concept: "Tarifas",
			status: false
			},
			{
			id: 6,
			concept: "Como conduzco",
			status: false
			},
			{
			id: 7,
			concept: "Lavado general (Aseo)",
			status: false
			},
			{
			id: 8,
			concept: "Lavado general (Aseo)",
			status: false
			},
		]
		},
	];
	  
	constructor() {}

  	ngOnInit() {}
}
