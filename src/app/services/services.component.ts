import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  service_data = [
    {
      image: 'sticla_sablata',
      title: 'Sticlă sablată',
      route: '/sticla_sablata'
    },
    {
      image: 'sticla_prelucrata',
      title: 'Sticlă prelucrată',
      route: '/sticla_prelucrata'
    },
    {
      image: 'sticla_antiefractie',
      title: 'Sticlă antiefracție',
      route: '/sticla_antiefractie'
    },
    {
      image: 'sticla_bombata',
      title: 'Sticlă bombată',
      route: '/sticla_bombata'
    },
    {
      image: 'sticla_laccato',
      title: 'Sticlă lăcuită',
      route: '/sticla_laccato'
    },
    {
      image: 'geam_dublu',
      title: 'Geam termoizolant dublu și triplu',
      route: '/geam_termo_dublu_triplu'
    },
    {
      image: 'geam_termoizolant_personalizat',
      title: 'Geam termoizolant personalizat',
      route: '/geam_termo_personalizat'
    },
    {
      image: 'geam_termoizolant_bagheta',
      title: 'Geam termoizolant cu baghetă ornamentală',
      route: '/geam_termo_bagheta'
    },
    {
      image: 'geam_termoizolant_antiefractie',
      title: 'Geam termoizolant antiefracție',
      route: '/geam_termo_antiefractie'
    }
  ];

  service_data_furniture = [
    {
      image: 'mobilier',
      title: 'Mobilier',
      route: '/mobilier_din_sticla'
    },
    {
      image: 'usi',
      title: 'Uși',
      route: '/usi_din_sticla'
    },
    {
      image: 'oglinzi',
      title: 'Oglinzi',
      route: '/oglinzi'
    }
  ];

  constructor() { }

  ngOnInit() {
  }
}
