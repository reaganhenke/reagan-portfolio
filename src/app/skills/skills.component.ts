import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent implements OnInit {
  skills = ['angular', 'javascript', 'css', 'react', 'web design', 'nodeJS', 'python', 'c#', 'public speaking', 'game design', 'html'];
  skillPositions: string[][] = [];
  currentlyDragging: number | undefined;
  mouseX: number | undefined;
  mouseY: number | undefined;

  ngOnInit() {
    for (let i = 0; i < this.skills.length; i++) {
      let pos: string[] = [i * (100 / (this.skills.length - 1)) + '%', ((i + 1) % 3) * 50 + '%', this.getRandomRotation()];
      this.skillPositions.push(pos);
    }
  }

  getRandomRotation() {
    let randomVal = Math.floor((Math.random() * 30)) - 15;
    return `rotate(${randomVal}deg)`;
  }

  startDragging(i: number) {
    this.currentlyDragging = i;
  }

  mouseMove(e: MouseEvent) {
    if (this.currentlyDragging == undefined) { return; }
    this.skillPositions[this.currentlyDragging][0] = e.pageX - 100 + 'px';
    this.skillPositions[this.currentlyDragging][1] = e.pageY - 40 + 'px'
  }

  touchMove(e: Event) {
    if (this.currentlyDragging == undefined) { return; }
    let firstTouch = (e as TouchEvent).touches[0];
    if (firstTouch) {
      this.mouseMove({ pageX: firstTouch.pageX, pageY: firstTouch.pageY } as MouseEvent);
    }
  }

  stopDragging() {
    if (this.currentlyDragging) {
      this.skillPositions[this.currentlyDragging][2] = this.getRandomRotation();
    }
    this.currentlyDragging = undefined;
  }
}
