import { Component, OnInit, ViewChild } from '@angular/core';
import { Poza } from '../model/poza';
import { CONNREFUSED } from 'dns';
import { NgImageSliderComponent } from 'ng-image-slider';
import { Lightbox } from 'ngx-lightbox';
import { ImageItem, Gallery, GalleryItem } from '@ngx-gallery/core';
import { PozaGallery } from '../model/pozaGallery';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  @ViewChild('nav', { static: false }) slider: NgImageSliderComponent;

  showSubmenuDoors = false;
  showSubmenuGlass = false;
  showSimpleDoors = false;
  selectionType = "simple";
  pageIndex = 0;
  pageSize = 24;
  poze: Poza[] = [];
  usiCopii: Poza[] = [];
  usiFlorale: Poza[] = [];
  usiSalon: Poza[] = [];
  usiBisericesti: Poza[] = [];
  usiDublePoze: Poza[] = [];
  allImages: Poza[];
  toateUsileDuble: Poza[];
  myImage = './../../assets/images/catalog/inscriptii/I1.png';
  myThumbnail = './../../assets/images/catalog/inscriptii/I1.png';

  private oglinziGallery: PozaGallery[] = [];
  oglinziItems: GalleryItem[];

  private coltareGallery: PozaGallery[] = [];
  coltareItems: GalleryItem[];

  private sticlaGallery: PozaGallery[] = [];
  sticlaItems: GalleryItem[];

  constructor(public gallery: Gallery, public gallery2: Gallery) {
    // Usi
    for (let i = 1; i <= 140; i++) {
      this.poze.push(new Poza("Poza " + i, i));
    }

    for (let i = 1; i <= 16; i++) {
      this.usiDublePoze.push(new Poza("Poza " + i, i));
    }

    for (let i = 1; i <= 17; i++) {
      this.usiSalon.push(new Poza("Poza " + i, i));
    }

    for (let i = 1; i <= 20; i++) {
      this.usiCopii.push(new Poza("Poza " + i, i));
    }

    for (let i = 1; i <= 60; i++) {
      this.usiFlorale.push(new Poza("Poza " + i, i));
    }

    for (let i = 1; i <= 29; i++) {
      this.usiBisericesti.push(new Poza("Poza " + i, i));
    }

    // Oglinzi
    for (let i = 1; i <= 6; i++) {
      let oglinda = new PozaGallery(
        "./../../assets/images/catalog/oglinzi/O" + i + ".png",
        "./../../assets/images/catalog/oglinzi/O" + i + ".png", i);
      this.oglinziGallery.push(oglinda);
    }

    // Sticla
    for (let i = 1; i <= 4; i++) {
      let sticla = new PozaGallery(
        "./../../assets/images/catalog/sticla/S" + i + ".png",
        "./../../assets/images/catalog/sticla/S" + i + ".png", i);
      this.sticlaGallery.push(sticla);
    }

    // Coltare
    for (let i = 1; i <= 2; i++) {
      let coltar = new PozaGallery(
        "./../../assets/images/catalog/coltare/C" + i + ".png",
        "./../../assets/images/catalog/coltare/C" + i + ".png", i);
      this.coltareGallery.push(coltar);
    }

   
    this.oglinziItems = this.oglinziGallery.map(item =>
      new ImageItem({ src: item.getSrcUrl(), thumb: item.getPreviewUrl() })
    );

    this.sticlaItems = this.sticlaGallery.map(item =>
      new ImageItem({ src: item.getSrcUrl(), thumb: item.getPreviewUrl() })
    );

    this.coltareItems = this.coltareGallery.map(item =>
      new ImageItem({ src: item.getSrcUrl(), thumb: item.getPreviewUrl() })
    );
  }
  ngOnInit() {
    this.getPageNumber({ pageIndex: this.pageIndex, pageSize: this.pageSize });
  }

  changeSimpleDoorsState() {
    this.showSimpleDoors = !this.showSimpleDoors;
  }

  changeSubmenuDoorsState() {
    this.showSubmenuDoors = !this.showSubmenuDoors;
  }

  changeSubmenuGlassState() {
    this.showSubmenuGlass = !this.showSubmenuGlass;
  }

  getSimpleDoorsState() {
    return this.showSimpleDoors;
  }

  getSubmenuDoorsState() {
    return this.showSubmenuDoors;
  }

  getSubmenuGlassState() {
    return this.showSubmenuGlass;
  }

  changeSelectionType(selectionType: string) {
    if (selectionType === "mirrors") {
      console.log("Mirror type. Resetting gallery");
      this.gallery.resetAll();
      this.gallery.ref().load(this.oglinziItems);
    }
    if (selectionType === "edge") {
      console.log("Edge type. Resetting gallery");
      this.gallery.resetAll();
      this.gallery.ref().load(this.coltareItems);
    }
    if (selectionType === "glass") {
      console.log("Glass type. Resetting gallery");
      this.gallery.resetAll();
      this.gallery.ref().load(this.sticlaItems);
    }
    this.selectionType = selectionType;
  }

  isSimpleDoorType() {
    return this.selectionType == "simple";
  }

  isChurchDoorType() {
    return this.selectionType == "church";
  }

  isChildrenDoorType() {
    return this.selectionType == "children";
  }

  isFlowersDoorType() {
    return this.selectionType == "flowers";
  }

  isSalonDoorType() {
    return this.selectionType == "salon";
  }

  isDoubleDoorType() {
    return this.selectionType == "double";
  }

  isMirrorType() {
    return this.selectionType == "mirrors";
  }

  isGlassType() {
    return this.selectionType == "glass";
  }

  isEdgeType() {
    return this.selectionType == "edge";
  }

  getPageNumber(obj) {
    let index = 0,
      startingIndex = obj.pageIndex * obj.pageSize,
      endingIndex = startingIndex + obj.pageSize;

    this.allImages = this.poze.filter(() => {
      index++;
      return (index > startingIndex && index <= endingIndex) ? true : false;
    });
  }

  getPageNumberUsiDuble(obj) {
    let index = 0,
      startingIndex = obj.pageIndex * obj.pageSize,
      endingIndex = startingIndex + obj.pageSize;

    this.toateUsileDuble = this.usiDublePoze.filter(() => {
      index++;
      return (index > startingIndex && index <= endingIndex) ? true : false;
    });
  }
}
