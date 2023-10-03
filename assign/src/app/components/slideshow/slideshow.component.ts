import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit {
  images: string[] = [
    'assets/img/banner1.jpg',
    'assets/img/banner2.jpg',
    'assets/img/banner3.jpeg',
    // Thêm các ảnh khác vào đây
  ];

  currentIndex: number = 0;
  interval: any; // Biến để lưu giữ đối tượng interval

  constructor() { }

  ngOnInit() {
    // Bắt đầu trình chiếu tự động khi component được khởi tạo
    this.startSlideshow();
  }

  // Bắt đầu trình chiếu tự động
  startSlideshow() {
    this.interval = setInterval(() => {
      this.nextImage();
    }, 1000); // Đổi hình ảnh sau mỗi 3 giây (3000ms)
  }

  // Dừng trình chiếu tự động
  stopSlideshow() {
    clearInterval(this.interval);
  }

  // Các phương thức xử lý chuyển ảnh
  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevImage() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }
}