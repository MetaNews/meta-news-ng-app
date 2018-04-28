import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Vote } from '../../../../models/vote.model';

@Component({
  selector: 'app-arrowbox',
  templateUrl: './arrowbox.component.html',
  styleUrls: ['./arrowbox.component.css']
})
export class ArrowboxComponent implements OnInit {
  @Input() vote: Vote;

  @Output() voteEvent = new EventEmitter<Vote>();

  constructor() {
  }

  onUpVote() {
    // If neither upVoted nor downVoted
    if (!this.vote.isUpVoted && !this.vote.isDownVoted) {
      this.vote.isUpVoted = true;

      this.voteEvent.emit(this.vote);
    } else if (!this.vote.isUpVoted && this.vote.isDownVoted) {
      this.vote.isDownVoted = false;
      this.vote.isUpVoted = true;

      this.voteEvent.emit(this.vote);
    } else if (this.vote.isUpVoted && !this.vote.isDownVoted) {
      this.vote.isUpVoted = false;

      this.voteEvent.emit(this.vote);
    }
  }

  onDownVote() {
    if (!this.vote.isDownVoted && !this.vote.isUpVoted) {
      this.vote.isDownVoted = true;

      this.voteEvent.emit(this.vote);
    } else if (!this.vote.isDownVoted && this.vote.isUpVoted) {
      this.vote.isUpVoted = false;
      this.vote.isDownVoted = true;

      this.voteEvent.emit(this.vote);
    } else if (this.vote.isDownVoted && !this.vote.isUpVoted) {
      this.vote.isDownVoted = false;

      this.voteEvent.emit(this.vote);
    }
  }

  onLeftVote() {
    if (!this.vote.isLeftVoted && !this.vote.isRightVoted) {
      this.vote.isLeftVoted = true;

      this.voteEvent.emit(this.vote);
    } else if (!this.vote.isLeftVoted && this.vote.isRightVoted) {
      this.vote.isRightVoted = false;
      this.vote.isLeftVoted = true;

      this.voteEvent.emit(this.vote);
    } else if (this.vote.isLeftVoted && !this.vote.isRightVoted) {
      this.vote.isLeftVoted = false;

      this.voteEvent.emit(this.vote);
    }
  }

  onRightVote() {
    if (!this.vote.isRightVoted && !this.vote.isLeftVoted) {
      this.vote.isRightVoted = true;

      this.voteEvent.emit(this.vote);
    } else if (!this.vote.isRightVoted && this.vote.isLeftVoted) {
      this.vote.isLeftVoted = false;
      this.vote.isRightVoted = true;

      this.voteEvent.emit(this.vote);
    } else if (this.vote.isRightVoted && !this.vote.isLeftVoted) {
      this.vote.isRightVoted = false;

      this.voteEvent.emit(this.vote);
    }
  }

  ngOnInit() {
  }

}
